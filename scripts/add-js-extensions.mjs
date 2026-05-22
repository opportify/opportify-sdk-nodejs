#!/usr/bin/env node
/**
 * Post-build script: rewrites extensionless relative imports/exports in dist/esm
 * to include .js extensions.
 *
 * This fixes two distinct consumers:
 *
 *   1. Runtime (Node.js native ESM) — requires .js extensions in .js files.
 *   2. TypeScript consumers with moduleResolution "node16" / "nodenext" /
 *      "bundler" — requires .js extensions in .d.ts declaration files too,
 *      otherwise `tsc` cannot resolve the types and emits TS2307 errors.
 *
 * TypeScript emits bare relative specifiers (e.g. './foo') for both file
 * types even when targeting ESNext, so we must patch both after compilation.
 */

import { readdir, readFile, writeFile } from 'fs/promises';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';

const ESM_DIR = join(fileURLToPath(new URL('.', import.meta.url)), '../dist/esm');

/**
 * Matches: import/export … from './relative' or '../relative' (no extension).
 * Handles: named imports, namespace imports, re-exports, export *, import type,
 * export type — all single-line forms that TypeScript emits in compiled output.
 */
const BARE_RELATIVE_RE =
  /((?:import|export)\s[^'"]*?from\s+['"])(\.{1,2}\/[^'"]+?)(['"])/g;

/** Matches bare side-effect imports and dynamic imports with relative paths. */
const BARE_SIDE_EFFECT_RE = /(import\s*\(\s*['"]|import\s+['"])(\.{1,2}\/[^'"]+?)(['"]\s*\)?)/g;

function needsExtension(specifier) {
  return extname(specifier) === '';
}

function rewrite(source) {
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

/** Process only .js files — NOT .d.ts files.
 *
 * Rationale: TypeScript resolves bare relative imports in .d.ts declaration
 * files correctly on its own for all common moduleResolution settings
 * ("node", "node16", "bundler"). Rewriting .d.ts specifiers risks breaking
 * directory-index imports (e.g. '../lib/v1/models' → '../lib/v1/models/index.js')
 * if the script cannot distinguish a file import from a directory import.
 * Leave .d.ts files untouched; only the runtime .js files need .js extensions.
 */
function shouldProcess(filename) {
  return filename.endsWith('.js') && !filename.endsWith('.d.ts');
}

async function processDir(dir) {
  let filesFixed = 0;
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      filesFixed += await processDir(fullPath);
    } else if (entry.isFile() && shouldProcess(entry.name)) {
      const source = await readFile(fullPath, 'utf8');
      const { result, changed } = rewrite(source);
      if (changed) {
        await writeFile(fullPath, result, 'utf8');
        console.log(`  fixed: ${fullPath.replace(process.cwd() + '/', '')}`);
        filesFixed++;
      }
    }
  }

  return filesFixed;
}

console.log('post-build: adding .js extensions to ESM imports…');
const count = await processDir(ESM_DIR);
console.log(`post-build: done — ${count} file(s) updated.`);
