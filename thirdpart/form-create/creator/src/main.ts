import 'ant-design-vue/dist/reset.css';
import './main.scss';

import AntD from 'ant-design-vue';
import { type Component, createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import routes from '~pages';

import App from './App.vue';

const router = createRouter({
  routes,
  history: createWebHistory()
});

export const app = createApp(App as Component);
app.use(AntD);
app.use(router);

app.mount('#app');
