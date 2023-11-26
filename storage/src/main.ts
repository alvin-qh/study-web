import './style.css';

import { addStorageChangeRecord } from './components/storage-event.ts';
import { route } from './libs/router.ts';

const $app = document.querySelector('#app')!;

const $nav = document.createElement('nav');
$nav.className = 'menu';
$app.appendChild($nav);

const $main = document.createElement('div');
$main.className = 'main';
$app.appendChild($main);

/* eslint-disable @typescript-eslint/promise-function-async */
route($main, $nav, {
  cookies: {
    title: 'Cookies',
    href: '/cookies',
    module: () => import('./pages/cookies.ts')
  },
  'local-storage': {
    title: 'Local Storage',
    href: '/local-storage',
    module: () => import('./pages/local-storage.ts')
  },
  'session-storage': {
    title: 'Session Storage',
    href: '/session-storage',
    module: () => import('./pages/session-storage.ts')
  },
  'storage-state': {
    title: 'Storage State',
    href: '/storage-state?no-nav=1',
    module: () => import('./pages/storage-state.ts'),
    target: '_blank'
  },
  'web-sql': {
    title: 'Web SQL',
    href: '/web-sql',
    module: () => import('./pages/web-sql.ts')
  },
  'app-cache': {
    title: 'Application Cache',
    href: '/app-cache',
    module: () => import('./pages/application-cache.ts')
  }
});

window.addEventListener('storage', (e: StorageEvent) => {
  addStorageChangeRecord({
    area: e.storageArea === localStorage ? 'LOCAL' : 'SESSION',
    key: e.key ?? '',
    newValue: e.newValue ?? '',
    oldValue: e.oldValue ?? '',
    updateAt: new Date()
  });
});
