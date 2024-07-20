import { fileURLToPath, URL } from 'node:url';

import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  plugins: [
    react()
  ],
  css: {
    preprocessorOptions: {
      scss: {
        // 引入 scss 全局变量文件
        // `additionalData` 属性表示其属性值内容会插入到所有 scss 的开头位置 (包括 vue 文件中的 style 块)
        additionalData: `
          @use "./src/variable.scss" as _vars;
        `
      }
    }
  }
});
