import {link, row} from '../common/common.js';

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

const $wrapper = document.body.getElementsByClassName('main')[0];
$wrapper.appendChild(imageBox1(require('../../image/webpack.png').default));
$wrapper.appendChild(imageBox2());

const $row = $wrapper.appendChild(row());
$row.appendChild(link('Home', '../index.html'));
