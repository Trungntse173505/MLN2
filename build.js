#!/usr/bin/env node

import { spawn } from 'child_process';

const child = spawn('npx', ['vite', 'build'], {
  stdio: 'inherit',
  shell: true
});

child.on('close', (code) => {
  process.exit(code);
});
