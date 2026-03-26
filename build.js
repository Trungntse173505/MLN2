#!/usr/bin/env node

import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { platform } from 'os';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const isWindows = platform() === 'win32';
const vitePath = isWindows ? 'node_modules\\.bin\\vite.cmd' : 'node_modules/.bin/vite';

try {
  execSync(`${vitePath} build`, { 
    stdio: 'inherit',
    cwd: __dirname,
    shell: true
  });
} catch (error) {
  process.exit(1);
}
