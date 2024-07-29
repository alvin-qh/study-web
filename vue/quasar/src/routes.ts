import { type RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: async () => await import('@/pages/AHome.vue')
  },
  {
    path: '/template',
    component: async () => await import('@/pages/ATemplate.vue')
  },
  {
    path: '/reactivity',
    component: async () => await import('@/pages/AReactivity.vue')
  },
  {
    path: '/compute',
    component: async () => await import('@/pages/ACompute.vue')
  },
  {
    path: '/class-style',
    component: async () => await import('@/pages/AClass.vue')
  },
  {
    path: '/event',
    component: async () => await import('@/pages/AEvent.vue')
  }
];
