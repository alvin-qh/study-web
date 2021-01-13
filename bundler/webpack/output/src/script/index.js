import '../style/index.css';

import { join } from 'lodash-es';
import printMe from './print.js';

function component() {
  const $div = document.createElement('div');
  const $btn = document.createElement('button');
  $div.innerHTML = join(['Hello', 'webpack'], ' ');

  $btn.innerHTML = 'Click Me!';
  $btn.onclick = printMe;

  $div.appendChild($btn);
  return $div;
}

function textBox(text) {
  const $div = document.createElement('div');
  $div.className = 'text-box';
  $div.innerText = text;
  return $div;
}

function imageBox1(image) {
  const $image = document.createElement('img');
  $image.src = image;
  $image.alt = 'image box';

  const $div = document.createElement('div');
  $div.className = 'image-box1';

  $div.appendChild($image);
  return $div;
}

function imageBox2() {
  const $div = document.createElement('div');
  $div.className = 'image-box2';
  return $div;
}

function icon(name) {
  const $div = document.createElement('div');
  $div.className = 'icon-box';

  const $i = document.createElement('i');
  $i.className = `fas ${name}`;

  $div.appendChild($i);
  return $div;
}

const $wrapper = document.body.getElementsByClassName('main')[0];
$wrapper.appendChild(component());

$wrapper.appendChild(textBox('Hello World!'));
$wrapper.appendChild(imageBox1(require('../image/webpack.png').default));
$wrapper.appendChild(imageBox2());

const $row = document.createElement('div');
$row.className = 'row';
$row.appendChild(icon('fa-sun'));
$row.appendChild(icon('fa-cloud'));
$wrapper.appendChild($row);
