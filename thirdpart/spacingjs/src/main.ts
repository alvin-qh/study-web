import './style.css';
import 'spacingjs'; // 引入库即可开启测量模式, 参考 https://github.com/stevenlei/spacingjs

import viteLogo from '/vite.svg';

import { setupCounter } from './counter.ts';
import typescriptLogo from './typescript.svg';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div>
  <a href="https://vitejs.dev" target="_blank">
    <img src="${viteLogo}" class="logo" alt="Vite logo" />
  </a>
  <a href="https://www.typescriptlang.org/" target="_blank">
    <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
  </a>
  <h1>Vite + TypeScript</h1>
  <div class="card">
    <button id="counter" type="button"></button>
  </div>
  <p class="read-the-docs">
    按住 <code>ALT</code> (Windows) 或 <code>Option</code> (macOS) 键, 可开启测量模式, 可以移动鼠标指针查看页面元素的位置
  </p>
</div>`;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
