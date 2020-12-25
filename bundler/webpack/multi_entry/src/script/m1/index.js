import '../style/index.css';

import _ from 'lodash';

function icon(name) {
  const div = document.createElement('div');
  div.className = 'icon-box';

  const i = document.createElement('i');
  i.className = _.join(['fas', name], ' ');

  div.appendChild(i);
  return div;
}


const wrppper = document.body.getElementsByClassName('main')[0];
const row = document.createElement('div');

row.className = 'row';
wrppper.appendChild(row);

row.appendChild(icon('fa-sun'));
row.appendChild(icon('fa-cloud'));
