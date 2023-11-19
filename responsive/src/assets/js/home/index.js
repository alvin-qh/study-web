import "../../css/home/index.less";

import $ from 'jquery';

$('body').on('click', '.nav.nav-menu-bar>.nav-menu-btn', e => {
  const $menuBarDropDown = $(e.currentTarget).closest('.nav-menu-bar').find('.nav-menu');

  const display = $menuBarDropDown.css('display');
  if ('none' === display) {
    $menuBarDropDown.css('display', 'block');
  } else {
    $menuBarDropDown.css('display', 'none');
  }
});

$(window).on('resize', () => {
  $('.nav.nav-menu-bar>.nav-menu').css('display', '');
});
