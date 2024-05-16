import '@fortawesome/fontawesome-free/css/all.css';

import { breadcrumb, container, icon, text } from './common';

export default function init() {
  const $wrapper = document.createElement('div');

  breadcrumb($wrapper, [
    { text: 'Home', name: 'index' },
    { text: '404', name: '404' }
  ]);

  container($wrapper, $container => {
    const $div = document.createElement('div');

    $div.className = 'error';
    $div.appendChild(icon('fa-exclamation'));
    $div.appendChild(text('404, Page Not Found'));

    $container.appendChild($div);
  });

  return $wrapper;
}
