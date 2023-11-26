import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';

/**
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  plugins: [
    eslint()
  ],
  css: {
    preprocessorOptions: {
      scss: {}
    }
  }
});
