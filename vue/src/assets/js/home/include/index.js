'use strict';

import Vue from "vue";

import util from "../../common/utils";
import ns from "../../common/ns";

ns('home', function () {
    new Vue({
        el: '#app',
        data: {
            title: 'Vue Demos',
            datetime: util.times.nowString()
        },
        created() {
            setInterval(() => this.datetime = util.times.nowString(), 1000);
        }
    });

});
