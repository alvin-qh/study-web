import React from 'react';
import { createRoot, type Root } from 'react-dom/client';
import {
  type QiankunProps,
  qiankunWindow,
  renderWithQiankun
} from 'vite-plugin-qiankun/dist/helper';

import App from './App.tsx';

function mount(elem?: Element): Root {
  const root = createRoot(elem ?? document.getElementById('root') as Element);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  return root;
}

function unmount(root?: Root): void {
  root?.unmount();
}

if (!(qiankunWindow.__POWERED_BY_QIANKUN__ ?? false)) {
  // 如果不在容器环境内, 则直接渲染 React 根组件
  mount();
} else {
  let root: Root | undefined;
  // 启动 Qiankun 容器环境
  renderWithQiankun({
    mount(props: QiankunProps) {
      root = mount(
        (
          (props.container != null)
            ? props.container.querySelector('#root')
            : document.getElementById('root')
        ) as HTMLElement
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
      unmount(root);
      console.log('MicroApp unmounted');
    }
  });
}
