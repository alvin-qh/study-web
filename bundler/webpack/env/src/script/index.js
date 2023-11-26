import '../style/index.css';

import { component } from './lib/component';

const $wrapper = document.querySelector('.main');
$wrapper.appendChild(component.show('Hello World'));
