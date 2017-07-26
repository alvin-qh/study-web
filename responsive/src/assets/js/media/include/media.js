'use strict';

import $ from 'jquery';

const $menuBarDropDown = $('.menu-bar>ul');

window.media = function () {
    $('.menu-bar>.menu-bar-btn').on('click', e => {
        const display = $menuBarDropDown.css('display');
        if ('none' === display) {
            $menuBarDropDown.css('display', 'block');
        } else {
            $menuBarDropDown.css('display', 'none');
        }
    });
};