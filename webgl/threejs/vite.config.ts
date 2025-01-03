import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import path from 'path';

/**
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  resolve: {alias: {'@': path.resolve(__dirname, 'src')}},
  css: {preprocessorOptions: {scss: {}}},
  plugins: [
    eslint(),
  ],
});
