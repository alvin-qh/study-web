import { button, row, link } from './common.js';
import {sayHello, icon} from './lib/component.js';

const $wrapper = document.querySelector('.main');

$wrapper.appendChild(link('./bundle-report.html', 'Bundle report', '_blank'));

$wrapper.appendChild(button('Click me', () => {
  const $row = row();
  $wrapper.appendChild($row);
  
  sayHello('Alvin')
    .then($text => {
      $row.appendChild($text);

      icon('fa-sun')
        .then($icon => $row.appendChild($icon));
    });
}));
