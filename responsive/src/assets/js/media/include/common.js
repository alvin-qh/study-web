'use strict';

import $ from 'jquery';

$('body').on('click', '.menu-bar>.menu-bar-btn', e => {
    const $menuBarDropDown = $(e.currentTarget).closest('.menu-bar').find('ul');

    const display = $menuBarDropDown.css('display');
    if ('none' === display) {
        $menuBarDropDown.css('display', 'block');
    } else {
        $menuBarDropDown.css('display', 'none');
    }
});

$(window).on('resize', () => {
    $('.menu-bar>ul').css('display', '');
});