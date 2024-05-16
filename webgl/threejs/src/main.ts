import './style.scss';

import WebGL from 'three/addons/capabilities/WebGL.js';

import { route } from '@/lib/router';

const $app = document.querySelector('#app')!;

function render(): void {
  if (!WebGL.isWebGLAvailable()) {
    $app.innerHTML = `
    <div class="error-not-support">
      Your browser does not support WebGL.
    </div>
    `;
    return;
  }

  $app.innerHTML = `
  <header>
    <nav>
      <div class="logo"></div>
      <div class="menu-item"></div>
    </nav>
  </header>
  <main id="main"></main>
  `;

  const $main = document.querySelector('#main')!;
  const $nav = document.querySelector('header>nav .menu-item')!;

  /* eslint-disable no-return-await */
  route($main as HTMLElement, $nav as HTMLElement, {
    home: {
      title: 'Basic',
      href: '/',
      module: async () => await import('./pages/basic')
    }
  });
}

render();
