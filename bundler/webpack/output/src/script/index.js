import '../style/index.css';

import _ from 'lodash';
import printMe from './print.js';

import webpackImage from '../image/webpack.png';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

function textBox(text) {
  const div = document.createElement('div');
  div.className = 'text-box';
  div.innerText = text;
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

function icon(name) {
  const wrapperDiv = document.createElement('div');
  wrapperDiv.className = 'icon-box';

  const i = document.createElement('i');
  i.className = `fas ${name}`;

  wrapperDiv.appendChild(i);
  return wrapperDiv;
}

function showData(title, data) {
  const wrapperDiv = document.createElement('div');
  wrapperDiv.className = 'data-box';

  const titleDiv = document.createElement('h4');
  titleDiv.innerText = title;

  wrapperDiv.appendChild(titleDiv);

  const textarea = document.createElement('textarea');
  textarea.value = JSON.stringify(data, null, 2);

  wrapperDiv.appendChild(textarea);
  return wrapperDiv;
}


const wrppper = document.body.getElementsByClassName('main')[0];
wrppper.appendChild(component());

wrppper.appendChild(textBox('Hello World!'));
wrppper.appendChild(imageBox1(webpackImage));
wrppper.appendChild(imageBox2());

const row = document.createElement('div');
row.className = 'row';
row.appendChild(icon('fa-sun'));
row.appendChild(icon('fa-cloud'));
wrppper.appendChild(row);
