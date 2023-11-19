import { type RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: async () => import('@/pages/AHome.vue')
  },
  {
    path: '/template',
    component: async () => import('@/pages/ATemplate.vue')
  },
  {
    path: '/reactivity',
    component: async () => import('@/pages/AReactivity.vue')
  },
  {
    path: '/compute',
    component:async () => import('@/pages/ACompute.vue')
  },
  {
    path: '/class-style',
    component:async () => import('@/pages/AClass.vue')
  },
  {
    path: '/event',
    component:async () => import('@/pages/AEvent.vue')
  }
];
