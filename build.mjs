import { createServer, build } from 'vite';
import react from '@vitejs/plugin-react';

await build({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
});

console.log('Build completed successfully');
