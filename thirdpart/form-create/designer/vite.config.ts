import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';

/**
 * @type {https://vitejs.dev/config/}
 */
export default defineConfig({
  plugins: [
    vue(),
    eslint({
      include: [
        'src/**/*.ts',
        'src/**/*.vue'
      ]
    })
  ],
  resolve: {
    preserveSymlinks: true,
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {}
    }
  }
});
