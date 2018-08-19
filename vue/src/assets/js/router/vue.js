import "../../css/router/router.less";

import Vue from "vue";
import Router from "vue-router";
import {ns} from "../common/common";

import routes from "./vue-router/routes";
import "../widget/breadcrumb";

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