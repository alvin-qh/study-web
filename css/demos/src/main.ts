import './style.css';

import { Route } from './component/route';

const route = new Route([
  {
    title: '水波进度条',
    link: '/progress/wave',
    component: async () => await import('./pages/progress/wave')
  }
]);

const $app = document.querySelector<HTMLDivElement>('#app')!;
$app.innerHTML = `
<div class="app-left">
  <div class="logo"></div>
  <div class="nav"></div>
</div>
<div class="app-container">Two</div>`;

route.render($app.querySelector<HTMLDivElement>('.app-left .nav')!);
