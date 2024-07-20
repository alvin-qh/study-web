/// <reference types="vite/client" />

declare module 'vite-plugin-eslint';

declare module '~pages' {
  import type { type RouteRecordRaw } from 'vue-router';

  const routes: RouteRecordRaw[];
  export default routes;
}
