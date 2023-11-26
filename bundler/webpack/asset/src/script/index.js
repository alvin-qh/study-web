import '@fortawesome/fontawesome-free/css/all.css';
import '../style/index.css';

import csvData from '../data/data.csv';
import jsonData from '../data/data.json5';
import tomlData from '../data/data.toml';
import xmlData from '../data/data.xml';
import yamlData from '../data/data.yaml';

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
  $i.className = `fas ${name}`;

  $div.appendChild($i);
  return $div;
}

function show(title, data) {
  const $div = document.createElement('div');
  $div.className = 'data-box';

  const $title = document.createElement('h4');
  $title.innerText = title;
  $div.appendChild($title);

  const $textarea = document.createElement('textarea');
  $textarea.value = JSON.stringify(data, null, 2);

  $div.appendChild($textarea);
  return $div;
}

const $wrapper = document.body.getElementsByClassName('main')[0];
$wrapper.appendChild(textbox('Hello World!'));
$wrapper.appendChild(imagebox1(require('../image/webpack.png').default));

$wrapper.appendChild(imagebox2());

let $row = document.createElement('div');
$row.className = 'row';
$row.appendChild(icon('fa-sun'));
$row.appendChild(icon('fa-cloud'));
$wrapper.appendChild($row);

$row = document.createElement('div');
$row.className = 'row';
$row.appendChild(show('CSV', csvData));
$row.appendChild(show('XML', xmlData));
$row.appendChild(show('TOML', tomlData));
$row.appendChild(show('YAML', yamlData));
$row.appendChild(show('JSON5', jsonData));
$wrapper.appendChild($row);
