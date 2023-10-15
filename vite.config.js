/// <reference types="vitest" />
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';
import css from "rollup-plugin-import-css";


export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      plugins: [
        css(),
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
    port: 3002,
    open: '/'
  },
  test: {
    globals: true,
    environment: 'happy-dom'
  }
});
