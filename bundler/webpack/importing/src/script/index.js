import { row } from './common.js';
import {sayHello, icon} from './lib/component.js';

function button(name, action) {
  const $div = document.createElement('div');
  $div.className = 'button-box';

  const $button = document.createElement('button');
  $button.innerText = name;
  $button.type = 'button';
  $button.addEventListener('click', action);

  $div.appendChild($button);
  return $div;
}

const $wrapper = document.querySelector('.main');

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
