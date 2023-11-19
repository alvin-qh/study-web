import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import qiankun from 'vite-plugin-qiankun';

export default defineConfig({
  server: {
    port: 3001,
    cors: true, // 子网站必须开启跨域访问
    origin: 'http://localhost:3001'
  },
  base: 'http://localhost:3001',
  plugins: [
    vue(),
    // 子网站配置
    qiankun(
      'vite-vue', // 必须和父网站注册容器时使用的名称一致
      {
        // 表示为开发模式, 必须显式声明, 否则会和 vite 的 dev 模式冲突
        useDevMode: true
      }
    )
  ]
});
