import '../style/index.css';

import _ from 'lodash';

function textBox(text) {
  const div = document.createElement('div');
  div.className = 'text-box';
  div.innerText = text;

  return div;
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

