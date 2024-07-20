import '../style/index.css';

import { textbox } from './lib/component';

const $wrapper = document.querySelector('.main');
$wrapper.appendChild(textbox('Hello World'));
