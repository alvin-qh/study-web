import '../style/index.css';

import _ from 'lodash';

function textBox(text) {
  const $div = document.createElement('div');
  $div.className = 'text-box';
  $div.innerText = text;
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
$wrapper.appendChild(textBox(_.join(['Hello', 'World'], ' ')));

const $row = document.createElement('div');
$row.className = 'row';
$wrapper.appendChild($row);

$row.appendChild(icon('fa-sun'));
$row.appendChild(icon('fa-cloud'));

$wrapper.appendChild(imageBox1(require('../image/webpack.png').default));
$wrapper.appendChild(imageBox2());
