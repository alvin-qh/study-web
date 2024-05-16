import { join } from 'lodash-es';

function component() {
  const $div = document.createElement('div');
  $div.innerHTML = join(['Hello', 'webpack'], ' ');
  return $div;
}

document.body.appendChild(component());
