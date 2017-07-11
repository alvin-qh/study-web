'use strict';

import Vue from "vue";
import util from "../../common/utils";
import ns from "../../common/ns";

ns('bind.index', function () {
    new Vue({
        el: '#app',
        data: {
            text: '',
            color: 'info',
            panelColor: 'primary',
            now: util.times.nowString()
        },
        computed: {
            textInverse: {
                get() {
                    return this.text.split('').reverse().join('');
                },
                set(newVal) {
                    this.text = newVal.split('').reverse().join('');
                }
            },
            noRefresh() {
                return util.times.nowString();
            },
            refresh() {
                return this.now;
            }
        },
        watch: {
            color(val) {
                switch (val) {
                case 'info':
                    this.panelColor = 'primary';
                    break;
                case 'warning':
                    this.panelColor = 'success';
                    break;
                case 'danger':
                    this.panelColor = 'default';
                    break;
                }
            }
        },
        created() {
            setInterval(() => this.now = util.times.nowString(), 1000);
        }
    });
});