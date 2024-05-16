import '../style/index.css';

import { join } from 'lodash-es';

import txt from '../data/content.txt';

function textbox(text) {
  const $div = document.createElement('div');
  $div.className = 'text-box';
  $div.innerText = text;
  return $div;
}

function imagebox1(image) {
  const $image = document.createElement('img');
  $image.src = image;
  $image.alt = 'image box';

  const $div = document.createElement('div');
  $div.className = 'image-box1';

  $div.appendChild($image);
  return $div;
}

function imagebox2() {
  const $div = document.createElement('div');
  $div.className = 'image-box2';
  return $div;
}

function icon(name) {
  const $div = document.createElement('div');
  $div.className = 'icon-box';

  const $i = document.createElement('i');
  $i.className = join(['fas', name], ' ');

  $div.appendChild($i);
  return $div;
}

const $wrapper = document.body.getElementsByClassName('main')[0];
$wrapper.appendChild(textbox(txt));
$wrapper.appendChild(imagebox1(require('../image/webpack.png')));

$wrapper.appendChild(imagebox2());

const $row = document.createElement('div');
$row.className = 'row';
$row.appendChild(icon('fa-sun'));
$row.appendChild(icon('fa-cloud'));
$wrapper.appendChild($row);
