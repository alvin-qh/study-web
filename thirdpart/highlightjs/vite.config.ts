import path from 'path';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';

/**
 * @type https://vitejs.dev/config/
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
    headers: {
    }
  }
});
