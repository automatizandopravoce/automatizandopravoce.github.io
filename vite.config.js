import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Garante que funcione no GitHub Pages em qualquer nome de repositório
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
});

