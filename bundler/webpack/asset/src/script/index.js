import '@fortawesome/fontawesome-free/css/all.css';
import '../style/index.css';

import webpackImage from '../image/webpack.png';

import csvData from '../data/data.csv';
import xmlData from '../data/data.xml';

import tomlData from '../data/data.toml';
import yamlData from '../data/data.yaml';
import jsonData from '../data/data.json5';

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
wrppper.appendChild(textBox('Hello World!'));
wrppper.appendChild(imageBox1(webpackImage));
wrppper.appendChild(imageBox2());

let row = document.createElement('div');
row.className = 'row';
row.appendChild(icon('fa-sun'));
row.appendChild(icon('fa-cloud'));
wrppper.appendChild(row);


row = document.createElement('div');
row.className = 'row';
row.appendChild(showData('CSV', csvData));
row.appendChild(showData('XML', xmlData));
row.appendChild(showData('TOML', tomlData));
row.appendChild(showData('YAML', yamlData));
row.appendChild(showData('JSON5', jsonData));
wrppper.appendChild(row);
