// import react from "@vitejs/plugin-react";
import { defineConfig } from 'vite';
import qiankun from 'vite-plugin-qiankun';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3002,
    cors: true,
    origin: 'http://localhost:3002'
  },
  base: 'http://localhost:3002',
  plugins: [
    // react(),
    // 子网站配置
    qiankun(
      'vite-react', // 必须和父网站注册容器时使用的名称一致
      {
        // 表示为开发模式, 必须显式声明, 否则会和 vite 的 dev 模式冲突
        useDevMode: true
      }
    )
  ]
});
