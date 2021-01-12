import { link, row } from '../common/common.js';
import { join } from 'lodash-es';

function icon(name) {
  const $div = document.createElement('div');
  $div.className = 'icon-box';

  const $i = document.createElement('i');
  $i.className = join(['fas', name], ' ');

  $div.appendChild($i);
  return $div;
}


const $wrapper = document.body.getElementsByClassName('main')[0];
let $row = $wrapper.appendChild(row());
$row.appendChild(icon('fa-sun'));
$row.appendChild(icon('fa-cloud'));

$row = $wrapper.appendChild(row());
$row.appendChild(link('Home', '../index.html'));
