import "../../css/tag/main.less";

import Vue from "vue";
import {ns} from "../common/common";


import alter from "../widget/alert";
import NameSelect from "../widget/name-select.vue";

import "../widget/breadcrumb";
import "../widget/panel";
import "../widget/panel-group";

ns('tag.index', function () {
    new Vue({
        el: '#app',
        components: {
            alert: alter,
            "name-select": NameSelect
        },
        data: {
            userType: ''
        },
        methods: {
            notify(text) {
                $.notify({
                    message: text
                }, {
                    type: 'info',
                    delay: 1000
                });
            },
            alertClose(type) {
                this.notify('Alert is ' + type);
            }
        },
        watch: {
            userType() {
                $.notify({
                    message: 'User type changed ' + this.userType
                }, {
                    type: 'info',
                    delay: 1000
                });
            }
        }
    });
});