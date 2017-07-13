
'use strict';

import Vue from "vue";
import ns from "../../common/ns";

ns('router.index', function () {
    new Vue({
        el: '#app',
        data: {
            links: [
                {name: 'Simple', href: './simple-router.html'},
                {name: 'Page', href: './page-router.html'}
            ]
        }
    });
});