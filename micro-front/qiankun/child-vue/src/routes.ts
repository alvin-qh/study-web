import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper';
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

// 定义微应用的路由
export const routes: RouteRecordRaw[] = [
  { name: 'Home', path: '/', component: async () => await import('./components/Home.vue') },
  { name: 'About', path: '/about', component: async () => await import('./components/About.vue') }
];

/**
 * 获取微应用的路由根路径
 *
 * @returns 路由根路径
 */
function getBasePath(): string {
  const base = (qiankunWindow.__POWERED_BY_QIANKUN__ ?? false) ? '/vite-vue' : '/';
  console.log(`The base path: "${base}"`);
  return base;
}

// 创建路由
export const router = createRouter({
  history: createWebHistory(getBasePath()),
  routes
});
