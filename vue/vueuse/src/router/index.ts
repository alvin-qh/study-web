/// Vue 路由定义
/// Vue 官方提供了 vue-router 库负责 Vue 的路由设置, 具体方式如下:
/// 1. 通过 `createRouter` 函数创建路由对象;
/// 2. 通过 Vue 的 `App` 对象, 通过 `use` 方法加载路由对象;

import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import HomeView from '../view/HomeView.vue'

// 定义路由集合
// `defineAsyncComponent` 表示异步 (懒) 加载
const routes: RouteRecordRaw[] = [
  { path: '/', component: HomeView },
  { path: '/state/global', component: async () => await import('@/view/state/GlobalStateView.vue'), meta: { keepAlive: true } },
  { path: '/state/injection', component: async () => await import('@/view/state/InjectionStateView.vue'), meta: { keepAlive: true } },
];

// 创建路由对象并导出
// `history` 表示历史记录的方式, 包括:
// - `createMemoryHistory`: 通过内存保存历史记录, 浏览器的地址栏不会发生变化
// - `createWebHistory`: 通过浏览器记录历史, 浏览器的地址栏会发生变化
// - `createWebHashHistory`: 通过在地址栏之后加上 `#` 的方式表示地址
export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
