import './common.css';

import logo from '../assets/rollup-logo.svg';

const $body = document.querySelector('body');

const $main = document.createElement('div');
$main.className = 'p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4';
$body?.appendChild($main);

const $image = document.createElement('img');
$image.src = logo;
$image.className = 'h-12 w-12';
$main.appendChild($image);

const $buildData = document.createElement('div');
$buildData.textContent = '__build_date';
$main.appendChild($buildData);
