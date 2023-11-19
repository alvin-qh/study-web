import './main.scss';

import $ from 'jquery';

import logo from './assets/logo.webp';

const $nav = $('<nav>');

const $logo = $('<img alt=*>').appendTo($nav);
$logo.addClass('logo');
$logo.attr('src', logo);

const $menu = $('<ul class=menu>').appendTo($nav);
[
  ['Vue', '/vue.html'],
  ['React', '/react.html'],
].forEach((item) => {
  const $item = $('<li>').appendTo($menu);
  $('<a href=\'javascript:;\'>')
    .text(item[0])
    .attr('href', item[1])
    .appendTo($item);
});

$('#app').append($nav);
