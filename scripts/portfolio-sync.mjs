#!/usr/bin/env node
/**
 * Обёртка: настоящий sync лежит в корне portfolio-stack.
 * Можно запускать из commercial-landings: node scripts/portfolio-sync.mjs
 */
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const stackRoot = path.resolve(__dirname, '../..');
const syncScript = path.join(stackRoot, 'scripts', 'portfolio-sync.mjs');

const result = spawnSync(process.execPath, [syncScript], {
  cwd: stackRoot,
  stdio: 'inherit',
});

process.exit(result.status ?? 1);
