import {
  qiankunWindow,
  renderWithQiankun,
  type QiankunProps
} from 'vite-plugin-qiankun/dist/helper';
import { createApp, type App as VueApp } from 'vue';

import App from './App.vue';
import { router } from './routes';

let app: VueApp<Element> | undefined;

// 判断是否进入 Qiankun 的容器环境
if (!(qiankunWindow.__POWERED_BY_QIANKUN__ ?? false)) {
  // 如果不在容器环境内, 则直接渲染 Vue 根组件
  app = createApp(App);
  app.use(router).mount('#app');
} else {
  // 启动 Qiankun 容器环境
  renderWithQiankun({
    mount(props: QiankunProps) {
      app = createApp(App);

      // 当 Qiankun 容器 mount 后, 进一步 mount Vue 根组件
      app
        .use(router)
        .mount(
          (
            (props.container != null)
              ? props.container.querySelector('#app')
              : document.getElementById('app')
          ) as Element
        );

      console.log('MicroApp mounted');
    },
    bootstrap() {
      console.log('MicroApp bootstrapped');
    },
    update() {
      console.log('MicroApp updated');
    },
    unmount() {
      app?.unmount();
      console.log('MicroApp unmounted');
    }
  });
}
