import { link, row } from '../common/common.js';

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

const $wrapper = document.body.getElementsByClassName('main')[0];
$wrapper.appendChild(imagebox1(require('../../image/webpack.png').default));
$wrapper.appendChild(imagebox2());

const $row = $wrapper.appendChild(row());
$row.appendChild(link('Home', '../index.html'));
