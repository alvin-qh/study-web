import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import pages from 'vite-plugin-pages';

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
    }),
    pages({
      dirs: [
        { dir: path.resolve(__dirname, './src/pages'), baseRoute: '' }
      ],
      extensions: ['vue', 'md']
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
