import Vue from "vue";
import {Navbar} from 'bootstrap-vue/es/components';

import {ns, Times} from "../common/common";

ns('home', function () {
    Vue.use(Navbar);

    new Vue({
        el: '#app',
        data: {
            title: 'Vue Demos',
            datetime: Times.nowString()
        },
        created() {
            setInterval(() => this.datetime = Times.nowString(), 1000);
        }
    });
});