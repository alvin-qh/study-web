import '../style/common.css';

export function button(name, action) {
  const $div = document.createElement('div');
  $div.className = 'button-box';

  const $button = document.createElement('button');
  $button.innerText = name;
  $button.type = 'button';
  $button.addEventListener('click', action);

  $div.appendChild($button);
  return $div;
}

export function row() {
  const $row = document.createElement('row');
  $row.className = 'row';
  return $row;
}

export function link(url, text, target = '') {
  const $div = document.createElement('div');
  $div.className = 'link-box';

  const $a = document.createElement('a');
  $a.href = url;
  $a.innerText = text;
  if (target) {
    $a.target = target;
  }

  $div.appendChild($a);
  return $div;
}
