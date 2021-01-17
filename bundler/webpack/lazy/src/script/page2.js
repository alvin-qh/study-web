import '@fortawesome/fontawesome-free/css/all.css';
import { breadcrumb, container, icon, text } from './common.js';

export default function init() {
  const $wrapper = document.createElement('div');

  breadcrumb($wrapper, [
    { text: 'Home', name: 'index' },
    { text: 'Page2', name: 'page2' }
  ]);

  container($wrapper, $container => {
    const $div = document.createElement('div');

    $div.className = 'page-1';
    $div.appendChild(icon('fa-cloud'));
    $div.appendChild(text('This is page-2'));

    $container.appendChild($div);
  });

  return $wrapper;
}
