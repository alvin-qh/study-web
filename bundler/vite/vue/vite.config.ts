import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';

/**
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: ''
    }
  },
  plugins: [
    eslint(),
    vue()
  ]
});
