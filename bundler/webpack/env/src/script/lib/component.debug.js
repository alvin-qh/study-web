import '../../style/lib/component.debug.css';
import _ from 'lodash';

export const component = {
  show(text) {
    const $div = document.createElement('div');
    $div.className = 'text-box';

    const $i = document.createElement('i');
    $i.className = _.join(['fas', 'fa-tools'], ' ');
    $div.appendChild($i);

    const $span = document.createElement('span');
    $span.innerText = text;
    $div.appendChild($span);

    return $div;
  }
}
