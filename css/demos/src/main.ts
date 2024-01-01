import './style.css';

import { Route } from './component/route';

window.onload = () => {
  const $app = document.querySelector<HTMLDivElement>('#app')!;
  $app.innerHTML = `
  <div class="app-left">
    <div class="logo"></div>
    <div class="nav"></div>
  </div>
  <div class="app-container"></div>`;

  const route = new Route(
    document.querySelector<HTMLDivElement>('.app-container')!,
    [
      {
        title: '水波进度条',
        href: '/progress/wave',
        module: async () => await import('./pages/progress/wave')
      },
      {
        title: '闪光边框',
        href: '/border/shine',
        module: async () => await import('./pages/border/shinning')
      },
      {
        title: '图片边框',
        href: '/border/image',
        module: async () => await import('./pages/border/image')
      },
      {
        title: '无缝轮播',
        href: '/scroll/carousel',
        module: async () => await import('./pages/scroll/carousel')
      },
      {
        title: '视差滚动',
        href: '/scroll/parallax',
        module: async () => await import('./pages/scroll/parallax')
      }
    ],
    async () => await import('./pages/error')
  );

  route.render($app.querySelector<HTMLDivElement>('.app-left .nav')!);
};
