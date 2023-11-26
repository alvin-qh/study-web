import { defineConfig } from 'vite';
import path from 'path';
import eslint from 'vite-plugin-eslint';

/**
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: ''
    }
  },
  plugins: [
    eslint()
  ],
  build: {
    target: 'esnext'
  },
  server: {
  }
});
