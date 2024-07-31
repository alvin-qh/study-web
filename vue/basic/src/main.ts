import './style.scss';

import { type Component, createApp } from 'vue';

import App from './App.vue';
import router from './router';

// 创建应用 (App) 实例, 设定应用的路由表, 并将应用附加到 `#app` 元素上
createApp(App as Component)
  .use(router)
  .provide('globalValue', 'Hello Vue') // 全局注入值
  .mount('#app');
