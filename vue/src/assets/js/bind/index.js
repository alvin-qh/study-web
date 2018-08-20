import Vue from "vue";
import {runWith, Times} from "../common/common";

import "../widget/breadcrumb";

runWith('bind.index', function () {
    new Vue({
        el: '#app',
        data: {
            text: '',
            color: 'info',
            panelColor: 'primary',
            now: Times.nowString()
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
                return Times.nowString();
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
            setInterval(() => this.now = Times.nowString(), 1000);
        }
    });
});