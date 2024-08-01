/// Vue 路由定义
/// Vue 官方提供了 vue-router 库负责 Vue 的路由设置, 具体方式如下:
/// 1. 通过 `createRouter` 函数创建路由对象;
/// 2. 通过 Vue 的 `App` 对象, 通过 `use` 方法加载路由对象;

import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

// 定义路由集合
// `defineAsyncComponent` 表示异步 (懒) 加载
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: async () => await import('@/view/HomeView.vue'),
    meta: { keepAlive: false }
  },
  {
    path: '/template/simple',
    component: async () => await import('@/view/template/SimpleView.vue'),
    meta: { keepAlive: true }
  },
  {
    path: '/template/v-html',
    component: async () => await import('@/view/template/VHtmlView.vue'),
    meta: { keepAlive: true }
  },
  {
    path: '/template/v-bind',
    component: async () => await import('@/view/template/VBindView.vue'),
    meta: { keepAlive: true }
  },
  {
    path: '/template/list',
    component: async () => await import('@/view/template/ListView.vue'),
    meta: { keepAlive: true }
  },
  {
    path: '/template/condition',
    component: async () => await import('@/view/template/ConditionView.vue'),
    meta: { keepAlive: true }
  },
  {
    path: '/template/event',
    component: async () => await import('@/view/template/EventView.vue'),
    meta: { keepAlive: true }
  },
  {
    path: '/template/css-module',
    component: async () => await import('@/view/template/CSSModuleView.vue'),
    meta: { keepAlive: true }
  },
  {
    path: '/reactive/ref',
    component: async () => await import('@/view/reactive/RefView.vue'),
    meta: { keepAlive: true }
  },
  {
    path: '/reactive/reactive',
    component: async () => await import('@/view/reactive/ReactiveView.vue'),
    meta: { keepAlive: true }
  },
  {
    path: '/reactive/computed',
    component: async () => await import('@/view/reactive/ComputedView.vue'),
    meta: { keepAlive: true }
  },
  {
    path: '/reactive/class-style',
    component: async () => await import('@/view/reactive/ClassStyleView.vue'),
    meta: { keepAlive: true }
  },
  {
    path: '/component/lifecycle',
    component: async () => await import('@/view/component/LifecycleView.vue'),
    meta: { keepAlive: true }
  },
  {
    path: '/component/simple',
    component: async () => await import('@/view/component/SimpleView.vue'),
    meta: { keepAlive: true }
  },
  {
    path: '/component/props',
    component: async () => await import('@/view/component/PropsView.vue'),
    meta: { keepAlive: true }
  },
  {
    path: '/component/event',
    component: async () => await import('@/view/component/EventView.vue'),
    meta: { keepAlive: true }
  },
  {
    path: '/component/v-model',
    component: async () => await import('@/view/component/VModelView.vue'),
    meta: { keepAlive: true }
  },
  {
    path: '/component/integrate',
    component: async () => await import('@/view/component/IntegrateView.vue'),
    meta: { keepAlive: true }
  },
  {
    path: '/component/fallthrough',
    component: async () => await import('@/view/component/FallthroughAttrView.vue'),
    meta: { keepAlive: true }
  },
  {
    path: '/component/options',
    component: async () => await import('@/view/component/OptionsCompView.vue'),
    meta: { keepAlive: true }
  },
  {
    path: '/component/injection',
    component: async () => await import('@/view/component/InjectionView.vue'),
    meta: { keepAlive: true }
  },
  {
    path: '/slot/simple',
    component: async () => await import('@/view/slot/SimpleView.vue'),
    meta: { keepAlive: true }
  },
  {
    path: '/slot/named',
    component: async () => await import('@/view/slot/NamedView.vue'),
    meta: { keepAlive: true }
  },
  {
    path: '/slot/condition',
    component: async () => await import('@/view/slot/ConditionView.vue'),
    meta: { keepAlive: true }
  },
  {
    path: '/slot/scooped',
    component: async () => await import('@/view/slot/ScoopedView.vue'),
    meta: { keepAlive: true }
  }
];

// 创建路由对象并导出
// `history` 表示历史记录的方式, 包括:
// - `createMemoryHistory`: 通过内存保存历史记录, 浏览器的地址栏不会发生变化
// - `createWebHistory`: 通过浏览器记录历史, 浏览器的地址栏会发生变化
// - `createWebHashHistory`: 通过在地址栏之后加上 `#` 的方式表示地址
export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});
