import '../style/index.css';

import { breadcrumb, container } from './common';
import { route } from './router';

// Run once, define the route table (mapping the pathname with executable script)
// render the navigation menu
(() => {
  route(
    document.querySelector('div.main div.router'),
    document.querySelector('div.main header nav.navigation'),
    {
      index: {
        title: 'Home',
        href: '/',
        // eslint-disable-next-line import/no-self-import
        module: () => import(/* webpackPrefetch: true */ './index')
      },
      page1: {
        title: 'Page1',
        href: '/page-1',
        module: () => import(/* webpackChunkName: "page1", webpackPrefetch: true */ './page1')
      },
      page2: {
        title: 'Page2',
        href: '/page-2',
        module: () => import(/* webpackChunkName: "page2", webpackPrefetch: true */ './page2')
      },
      404: {
        title: '404',
        href: '/404',
        module: () => import(/* webpackChunkName: "404", webpackPrefetch: true */ './404'),
        menu: 'hidden'    // do not display on menu
      }
    }
  );
})();

export default function init() {
  const $wrapper = document.createElement('div');

  breadcrumb($wrapper, [
    { text: 'Home', name: 'index' }
  ]);

  container($wrapper, $container => {
    const $div = document.createElement('div');
    $div.className = 'home';
    $div.innerText = 'This is Home';
    $container.appendChild($div);
  });

  return $wrapper;
}
