export const allLifecycle = [
  // 组件挂载前
  'BeforeMount',
  // 组件已经挂载
  'Mounted',
  // 组件在渲染时追踪到依赖了响应式变量 (DEV 模式)
  'RenderTracked',
  // 组件依赖的响应式变量被更新, 组件即将被更新
  'BeforeUpdate',
  // 组件因所依赖的响应式变量变化而更新, 且更新完毕
  'Updated',
  // 当组件依赖的响应式变量改变而执行渲染 (DEV 模式)
  'RenderTriggered',
  // 当组件即将从父组件中被卸载
  'BeforeUnmount',
  // 当组件已经从父组件中卸载
  'Unmounted',
  // 组件捕获了后代组件传递的错误
  // 'ErrorCaptured',
  // 当组件位于 `<KeepAlive>` 组件中, 已被缓存且重新被激活 (重新加载到父组件的 DOM 树中)
  'Activated',
  // 当组件位于 `<KeepAlive>` 组件中, 已被缓存且从父组件移出 (从父组件的 DOM 树中移除)
  'Deactivated'
  // 组件在服务器上即将被渲染
  // 'ServerPrefetch',
] as const;
