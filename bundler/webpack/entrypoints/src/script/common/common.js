import '../../style/index.css';
import _ from 'lodash';

function link(name, url) {
  const $div = document.createElement('div');
  $div.className = 'link-box';

  const $a = document.createElement('a');
  $a.href = url;
  $a.innerText = name;

  $div.appendChild($a);
  return $div;
}

function row() {
  const $div = document.createElement('div');
  $div.className = 'row';
  return $div;
}

export {
  link,
  _,
  row
}
