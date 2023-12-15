import './style.css';

// eslint-disable-next-line import/no-unresolved
import { registerSW } from 'virtual:pwa-register';

import { addStorageChangeRecord } from './components/storage-event.ts';
import { route } from './libs/router.ts';

if ('serviceWorker' in navigator) {
  registerSW();
}


const $app = document.querySelector('#app')!;

const $nav = document.createElement('nav');
$nav.className = 'menu';
$app.appendChild($nav);

const $main = document.createElement('div');
$main.className = 'main';
$app.appendChild($main);

route($main, $nav, {
  cookies: {
    title: 'Cookies',
    href: '/cookies',
    module: async () => await import('./pages/cookies.ts')
  },
  'local-storage': {
    title: 'Local Storage',
    href: '/local-storage',
    module: async () => await import('./pages/local-storage.ts')
  },
  'session-storage': {
    title: 'Session Storage',
    href: '/session-storage',
    module: async () => await import('./pages/session-storage.ts')
  },
  'storage-state': {
    title: 'Storage State',
    href: '/storage-state?no-nav=1',
    module: async () => await import('./pages/storage-state.ts'),
    target: '_blank'
  },
  'indexed-db': {
    title: 'Indexed DB',
    href: '/indexed-db',
    module: async () => await import('./pages/indexed-db.ts')
  },
  'app-cache': {
    title: 'Application Cache',
    href: '/app-cache',
    module: async () => await import('./pages/application-cache.ts')
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
