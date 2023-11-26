import { join } from 'lodash-es';

export function row() {
  const $div = document.createElement('div');
  $div.className = 'row';
  return $div;
}

export function textbox(text) {
  const $div = document.createElement('div');
  $div.className = 'text-box';

  const $span = document.createElement('span');
  $span.innerText = text;
  $div.appendChild($span);

  return $div;
}

export function imagebox(name) {
  const $div = document.createElement('div');
  $div.className = 'image-box';

  const $i = document.createElement('i');
  $i.className = join(['fas', name], ' ');
  $div.appendChild($i);

  return $div;
}
