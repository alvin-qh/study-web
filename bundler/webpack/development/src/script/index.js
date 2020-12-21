import '../style/index.css';

import _ from 'lodash';
import image from '../image/webpack.png';

function textBox(text) {
  const div = document.createElement('div');
  div.className = 'text-box';
  div.innerText = text;

  return div;
}

function icon(name) {
  const div = document.createElement('div');
  div.className = 'icon-box';

  const i = document.createElement('i');
  i.className = `fas ${name}`;
  
  div.appendChild(i);
  return div;
}

function imageBox1(image) {
  const img = document.createElement('img');
  img.src = image;
  img.alt = 'image box';

  const wrapperDiv = document.createElement('div');
  wrapperDiv.className = 'image-box1';

  wrapperDiv.appendChild(img);
  return wrapperDiv;
}

function imageBox2() {
  const wrapperDiv = document.createElement('div');
  wrapperDiv.className = 'image-box2';
  return wrapperDiv;
}

const wrppper = document.body.getElementsByClassName('main')[0];
wrppper.appendChild(textBox(_.join(['Hello', 'World'], ' ')));

const row = document.createElement('div');
row.className = 'row';
wrppper.appendChild(row);

row.appendChild(icon('fa-sun'));
row.appendChild(icon('fa-cloud'));

wrppper.appendChild(imageBox1(image));
wrppper.appendChild(imageBox2());

