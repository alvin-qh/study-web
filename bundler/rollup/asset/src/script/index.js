import '../style/index.css';
import '@fortawesome/fontawesome-free/css/all.css';

import { join } from 'lodash-es';
import { textbox } from './lib/component.js';

const $wrapper = document.querySelector('.main');
$wrapper.appendChild(textbox(join(['Hello', 'World'], ' ')));
