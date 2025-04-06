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
        title: '动画',
        items: [
          {
            title: '水波进度条',
            href: '/progress/wave',
            module: async () => import('./pages/progress/wave'),
          },
          {
            title: '贝塞尔运动',
            href: '/animate/bezier',
            module: async () => import('./pages/animate/bezier'),
          },
        ],
      },
      {
        title: '边框',
        items: [
          {
            title: '闪光边框',
            href: '/border/shine',
            module: async () => import('./pages/border/shinning'),
          },
          {
            title: '图片边框',
            href: '/border/image',
            module: async () => import('./pages/border/image'),
          },
        ],
      },
      {
        title: '布局',
        items: [
          {
            title: '无缝轮播',
            href: '/scroll/carousel',
            module: async () => import('./pages/scroll/carousel'),
          },
          {
            title: '视差滚动',
            href: '/scroll/parallax',
            module: async () => import('./pages/scroll/parallax'),
          },
          {
            title: '3D 菜单',
            href: '/layout/3d-menu',
            module: async () => import('./pages/layout/3d-menu'),
          },
          {
            title: '滑动卡片',
            href: '/layout/slide-card',
            module: async () => import('./pages/layout/slide-card'),
          },
        ],
      },
    ],
    async () => import('./pages/error'),
  );

  route.render($app.querySelector<HTMLDivElement>('.app-left .nav')!);
};
