/// <reference types="vitest" />
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      plugins: [
        viteCompression({
          algorithm: 'brotliCompress',
          ext: '.br'
        }),
        visualizer({
          title: 'Plumejs example repo',
          open: true
        })
      ]
    },
    output: {
      entryFileNames: `[name]-[hash].js`,
    }
  },
  server: {
    host: true,
    port: 3001,
    open: '/'
  },
  test: {
    globals: true,
    environment: 'happy-dom'
  }
});
