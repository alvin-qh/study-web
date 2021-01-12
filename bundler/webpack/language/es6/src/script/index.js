import '../style/index.css';
import { join } from 'lodash-es'

export function textBox(text) {
  const $span = document.createElement('span');
  $span.innerText = text;

  const $div = document.createElement('div');
  $div.appendChild($span);
  $div.className = 'text-box';
  return $div;
}

const $wrapper = document.querySelector('.main');
$wrapper.appendChild(textBox(join(['Hello', 'World'], ' ')));
