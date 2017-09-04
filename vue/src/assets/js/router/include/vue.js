'use strict';

import "../../../css/router/router.less";

import "../../widget/breadcrumb";

import ns from "../../common/ns";

import Vue from "vue";
import Router from "vue-router";

import routes from "./vue-router/routes";

ns('router.vue', function () {
    Vue.use(Router);

    const router = new Router({
        routes,
        mode: 'hash'    // 'history', 'hash', 'abstract'
    });

    router.afterEach(route => {
        document.title = route.name;
    });

    new Vue({
        el: '#app',
        data: {
            routes
        },
        router: router,
        created() {
            if (this.is404) {
                router.replace('/page1');
            }
        },
        computed: {
            is404() {
                return router.currentRoute.matched.length === 0;
            }
        }
    });
});