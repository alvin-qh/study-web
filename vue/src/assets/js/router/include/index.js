
'use strict';

import Vue from "vue";
import ns from "../../common/ns";

import "../../../css/router/index.less";

ns('router.index', function () {
    new Vue({
        el: '#app',
        data: {
            links: [
                {name: 'Simple', href: '/www/router/simple.html'},
                {name: 'Page', href: '/www/router/page.html'},
                {name: 'Vue', href: '/www/router/vue.html'}
            ]
        }
    });
});