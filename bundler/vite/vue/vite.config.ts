import { defineConfig } from 'vite';

// @ts-expect-error no-types
import eslint from 'vite-plugin-eslint';
import vue from '@vitejs/plugin-vue';

/**
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  css: { preprocessorOptions: {} },
  plugins: [
    eslint(),
    vue(),
  ],
});
