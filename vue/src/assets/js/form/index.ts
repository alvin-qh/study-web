import "../../css/form/index.less";

import Vue from "vue";
import {runWith} from "../common/common";
import hljs from "highlight.js"
import "../widget/breadcrumb";

declare interface Birthday {
    year: number,
    month: number,
    date: number
}

declare interface DOMType {
    $hljs: HTMLElement | null
}

class Form {
    name: string = '';
    gender: string = 'M';
    birthday: Birthday = {year: 0, month: 0, date: 0};
    hobbies: Array<string> = [];
    remark: string = '';
}

runWith('form.index', function () {
    const DOM: DOMType = {
        $hljs: null
    };

    new Vue({
        el: '#app',
        data: {
            form: new Form(),
            formJson: ''
        },
        created() {
            const now = new Date();
            const year = now.getFullYear(), month = now.getMonth() + 1, date = now.getDate();
            this.form.birthday = {year, month, date};

            hljs.initHighlightingOnLoad();
        },
        mounted() {
            DOM.$hljs = document.querySelector('.hljs.json') as HTMLElement;
        },
        computed: {
            now(): Date {
                return new Date();
            },
            lastMonthDay(): number {
                if (this.form.birthday.month) {
                    const now = new Date();
                    now.setMonth(this.form.birthday.month);
                    now.setDate(0);
                    return now.getDate();
                }
                return 0;
            }
        },
        watch: {
            form: {
                handler() {
                    DOM.$hljs!.innerText = JSON.stringify(this.form, null, '    ');
                    hljs.highlightBlock(DOM.$hljs!);
                },
                deep: true
            }
        }
    });
});