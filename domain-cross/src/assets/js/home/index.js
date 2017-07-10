'use strict';

import Vue from "vue";

import SchoolInfo from "./compoents/school-info.vue";

new Vue({
    el: '#app',
    components: {
        "school-info": SchoolInfo
    }
});
