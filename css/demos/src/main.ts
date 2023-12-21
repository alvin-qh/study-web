import './style.css';

import { Route } from './component/route';

const $app = document.querySelector<HTMLDivElement>('#app')!;
$app.innerHTML = `
<div class="app-left">
  <div class="logo"></div>
  <div class="nav"></div>
</div>
<div class="app-container">Two</div>`;

const route = new Route(
  document.querySelector<HTMLDivElement>('.app-container')!,
  [
    {
      title: '水波进度条',
      href: '/progress/wave',
      module: async () => await import('./pages/progress/wave')
    }
  ],
  async () => await import('./pages/error')
);

route.render($app.querySelector<HTMLDivElement>('.app-left .nav')!);
