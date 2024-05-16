/* eslint-disable @typescript-eslint/no-unsafe-argument */
import './main.scss';
import 'element-plus/dist/index.css';

import FcDesigner from '@form-create/designer';
import formCreate from '@form-create/element-ui';
import ElementPlus from 'element-plus';
import { type Component, createApp } from 'vue';

import App from './App.vue';

const app = createApp(App as Component);

app.use(ElementPlus);
app.use(formCreate);
app.use(FcDesigner);

app.mount('#app');
