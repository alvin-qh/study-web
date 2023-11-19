import './index.css';

import { join } from 'lodash-es';

export function textbox(text) {
  const $span = document.createElement('span');
  $span.innerText = text;

  const $div = document.createElement('div');
  $div.appendChild($span);
  $div.className = 'text-box';
  return $div;
}

const $wrapper = document.querySelector('.main');
$wrapper.appendChild(textbox(join(['Hello', 'World'], ' ')));
