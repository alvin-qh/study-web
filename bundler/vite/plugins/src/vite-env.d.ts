/// <reference types="vite/client" />

declare module 'vite-plugin-eslint';

declare module '~solid-pages' {
  import type { type RouteDefinition } from '@solidjs/router';

  const routes: RouteDefinition[];
  export default routes;
}
