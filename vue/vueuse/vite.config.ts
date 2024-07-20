import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      // 设定 Vue 模块选项
      template: {
        // 设定模板编译参数
        compilerOptions: {
          // 编译时删除模板中的注释
          comments: false
        }
      }
    }),
    vueDevTools(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        // 引入 scss 全局变量文件
        // `additionalData` 属性表示其属性值内容会插入到所有 scss 的开头位置 (包括 vue 文件中的 style 块)
        additionalData: `
          @use "./src/variable.scss" as _vars;
        `,
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
