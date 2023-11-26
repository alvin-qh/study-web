import '@fortawesome/fontawesome-free/css/all.css';

import { breadcrumb, container, icon, text } from './common.js';

export default function init() {
  const $wrapper = document.createElement('div');

  breadcrumb($wrapper, [
    { text: 'Home', name: 'index' },
    { text: 'Page1', name: 'page1' }
  ]);

  container($wrapper, $container => {
    const $div = document.createElement('div');

    $div.className = 'page-1';
    $div.appendChild(icon('fa-sun'));
    $div.appendChild(text('This is page-1'));

    $container.appendChild($div);
  });

  return $wrapper;
}
