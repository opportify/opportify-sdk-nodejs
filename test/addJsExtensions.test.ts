/**
 * Tests for the ESM specifier rewrite logic used in scripts/add-js-extensions.mjs.
 *
 * The rewrite function is a pure string transformation — these tests exercise
 * every import/export form that TypeScript emits in ESNext output to guard
 * against regressions in the post-build script.
 */

import path from 'path';

// Inline the core logic from scripts/add-js-extensions.mjs so it can be
// tested by ts-jest without requiring ESM module interop changes.
const BARE_RELATIVE_RE =
  /((?:import|export)\s[^'"]*?from\s+['"])(\.{1,2}\/[^'"]+?)(['"])/g;

const BARE_SIDE_EFFECT_RE =
  /(import\s*\(\s*['"]|import\s+['"])(\.{1,2}\/[^'"]+?)(['"]\s*\)?)/g;

function needsExtension(specifier: string): boolean {
  return path.extname(specifier) === '';
}

function rewrite(source: string): { result: string; changed: boolean } {
  let changed = false;
  const result = source
    .replace(BARE_RELATIVE_RE, (match, prefix, specifier, suffix) => {
      if (!needsExtension(specifier)) return match;
      changed = true;
      return `${prefix}${specifier}.js${suffix}`;
    })
    .replace(BARE_SIDE_EFFECT_RE, (match, prefix, specifier, suffix) => {
      if (!needsExtension(specifier)) return match;
      changed = true;
      return `${prefix}${specifier}.js${suffix}`;
    });
  return { result, changed };
}

describe('rewrite ESM specifiers', () => {
  describe('static named imports', () => {
    it('adds .js to bare relative import', () => {
      const { result, changed } = rewrite(`import { Foo } from './foo';`);
      expect(result).toBe(`import { Foo } from './foo.js';`);
      expect(changed).toBe(true);
    });

    it('adds .js to parent-relative import', () => {
      const { result, changed } = rewrite(`import { Bar } from '../bar';`);
      expect(result).toBe(`import { Bar } from '../bar.js';`);
      expect(changed).toBe(true);
    });

    it('handles double-quoted specifiers', () => {
      const { result } = rewrite(`import { Baz } from "../baz";`);
      expect(result).toBe(`import { Baz } from "../baz.js";`);
    });
  });

  describe('namespace imports', () => {
    it('adds .js to namespace import', () => {
      const { result } = rewrite(`import * as runtime from '../runtime';`);
      expect(result).toBe(`import * as runtime from '../runtime.js';`);
    });
  });

  describe('named exports (re-exports)', () => {
    it('adds .js to named re-export', () => {
      const { result } = rewrite(`export { EmailInsights } from './emailInsights';`);
      expect(result).toBe(`export { EmailInsights } from './emailInsights.js';`);
    });

    it('adds .js to export * re-export', () => {
      const { result } = rewrite(`export * from './AbuseContact';`);
      expect(result).toBe(`export * from './AbuseContact.js';`);
    });

    it('adds .js to export type re-export', () => {
      const { result } = rewrite(`export type { ErrorResponse } from './types';`);
      expect(result).toBe(`export type { ErrorResponse } from './types.js';`);
    });
  });

  describe('side-effect and default imports', () => {
    it('adds .js to bare side-effect import', () => {
      const { result } = rewrite(`import './polyfill';`);
      expect(result).toBe(`import './polyfill.js';`);
    });

    it('adds .js to default import', () => {
      const { result } = rewrite(`import Config from './config';`);
      expect(result).toBe(`import Config from './config.js';`);
    });
  });

  describe('dynamic imports', () => {
    it('adds .js to dynamic import', () => {
      const { result } = rewrite(`const mod = await import('./lazy');`);
      expect(result).toBe(`const mod = await import('./lazy.js');`);
    });
  });

  describe('already-suffixed specifiers (must not double-add)', () => {
    it('does not modify specifier already ending in .js', () => {
      const input = `import { Foo } from './foo.js';`;
      const { result, changed } = rewrite(input);
      expect(result).toBe(input);
      expect(changed).toBe(false);
    });

    it('does not modify specifier already ending in .ts', () => {
      const input = `import { Foo } from './foo.ts';`;
      const { result, changed } = rewrite(input);
      expect(result).toBe(input);
      expect(changed).toBe(false);
    });
  });

  describe('non-relative specifiers (must not be touched)', () => {
    it('does not modify bare package import', () => {
      const input = `import { something } from 'some-package';`;
      const { result, changed } = rewrite(input);
      expect(result).toBe(input);
      expect(changed).toBe(false);
    });

    it('does not modify scoped package import', () => {
      const input = `import { Api } from '@opportify/sdk-nodejs';`;
      const { result, changed } = rewrite(input);
      expect(result).toBe(input);
      expect(changed).toBe(false);
    });

    it('does not modify node: protocol import', () => {
      const input = `import { readFile } from 'node:fs/promises';`;
      const { result, changed } = rewrite(input);
      expect(result).toBe(input);
      expect(changed).toBe(false);
    });
  });

  describe('multiple imports in one file', () => {
    it('rewrites all bare specifiers in a multi-import file', () => {
      const input = [
        `import * as runtime from '../runtime';`,
        `import { ModelA } from '../models/index';`,
        `export { EmailInsights } from './emailInsights';`,
        `export * from './AbuseContact';`,
      ].join('\n');

      const { result, changed } = rewrite(input);

      expect(changed).toBe(true);
      expect(result).toContain(`from '../runtime.js'`);
      expect(result).toContain(`from '../models/index.js'`);
      expect(result).toContain(`from './emailInsights.js'`);
      expect(result).toContain(`from './AbuseContact.js'`);
    });

    it('reports unchanged when no bare specifiers present', () => {
      const input = [
        `import * as runtime from '../runtime.js';`,
        `export { EmailInsights } from './emailInsights.js';`,
      ].join('\n');

      const { result, changed } = rewrite(input);
      expect(changed).toBe(false);
      expect(result).toBe(input);
    });
  });
});
