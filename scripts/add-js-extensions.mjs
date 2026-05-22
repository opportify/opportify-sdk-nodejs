#!/usr/bin/env node
/**
 * Post-build script: rewrites extensionless relative imports/exports in dist/esm
 * to include .js extensions, which Node.js ESM requires.
 *
 * TypeScript emits bare relative specifiers (e.g. './foo') even when targeting
 * ESNext. Node.js native ESM resolution requires the full file extension, so
 * every './foo' must become './foo.js' in the final output.
 */

import { readdir, readFile, writeFile } from 'fs/promises';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';

const ESM_DIR = join(fileURLToPath(new URL('.', import.meta.url)), '../dist/esm');

/** Matches import/export … from './relative' or '../relative' (no extension). */
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

async function processDir(dir) {
  let filesFixed = 0;
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      filesFixed += await processDir(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.js')) {
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
