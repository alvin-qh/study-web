import './index.css';

import logo from './assets/rollup-logo.svg';

const render = (): Promise<void> => {
  const $app = document.getElementById('rollup-app');

  const $logo = document.createElement('img');
  $logo.classList.add('logo');
  $logo.src = logo;
  $app?.appendChild($logo);

  const $text = document.createElement('h1');
  $text.classList.add('text-center');
  $text.textContent = 'Hello Qiankun';
  $app?.appendChild($text);
  return Promise.resolve();
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
((global: any) => {
  // 判断是否挂载在 Qiankun 主应用下
  if (global.__POWERED_BY_QIANKUN__) {
    global['rollup'] = {
      // 初始化子应用
      bootstrap() {
        console.log('Bootstraped');
        return Promise.resolve();
      },
      // 挂载子应用
      mount() {
        console.log('Mounted');
        return render();
      },
      // 取消子应用挂载
      unmount() {
        const $app = document.getElementById('rollup-app');
        if ($app) {
          $app.innerHTML = '';
        }
        console.log('Unmounted');
        return Promise.resolve();
      }
    };
  } else {
    render();
  }
})(window);
