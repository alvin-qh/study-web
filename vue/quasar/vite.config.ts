import { quasar, transformAssetUrls } from '@quasar/vite-plugin';
import vue from '@vitejs/plugin-vue';
import jsx from '@vitejs/plugin-vue-jsx';
import path from 'path';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';

/**
 * @type {https://vitejs.dev/config/}
 */
export default defineConfig({
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
  },
  plugins: [
    vue({
      template: {
        transformAssetUrls
      }
    }),
    jsx(),
    quasar({
      autoImportComponentCase: 'pascal', // 使用驼峰命名自动导入组件
      sassVariables: 'src/quasar-variables.sass'
    }),
    eslint({
      include: [
        'src/**/*.ts',
        'src/**/*.vue'
      ]
    }),
  ]
});
