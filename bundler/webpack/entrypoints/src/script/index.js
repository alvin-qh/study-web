import {link, _, row} from './common/common.js';

function textBox(text) {
  const $div = document.createElement('div');
  $div.className = 'text-box';
  $div.innerText = text;
  return $div;
}

const $wrapper = document.body.getElementsByClassName('main')[0];
$wrapper.appendChild(textBox(_.join(['Hello', 'World'], ' ')));

const $row = $wrapper.appendChild(row());
$row.appendChild(link('Page1', './m1/index.html'));
$row.appendChild(link('Page2', './m2/index.html'));