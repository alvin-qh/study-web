import './main.scss';

import logo from './assets/logo.webp';

const $nav = document.createElement('nav');

const $logo = document.createElement('img');
$logo.alt = '*';
$logo.src = logo;
$logo.classList.add('logo');
$nav.appendChild($logo);

const $menu = document.createElement('ul');
$menu.classList.add('menu');
$nav.appendChild($menu);

const $inputBar = document.createElement('div');
$inputBar.classList.add('input-bar');

const $label = document.createElement('label');
$label.textContent = 'Count: ';
$inputBar.appendChild($label);

const $input = document.createElement('input');
$input.type = 'text';
$input.readOnly = true;

let count = 0;
$input.value = `${count}`;

$input.addEventListener('click', () => {
  $input.value = `${count++}`;
});

$inputBar.appendChild($input);

const $app = document.querySelector('#app')!;
$app.appendChild($nav);
$app.appendChild($inputBar);
