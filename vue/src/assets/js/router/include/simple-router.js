'use strict';

import Vue from "vue";
import _ from "lodash";
import ns from "../../common/ns";
import routers from "./pages/routers";

import Page404 from "./pages/404.vue";

ns('router.simple', function () {

    _.each(routers, (router, href) => {
        window.history.pushState(null, router.title, href);
        return false;
    });

    new Vue({
        el: '#app',
        data: {
            currentLink: window.location.pathname
        },
        computed: {
            currentView () {
                const matchingView = routers[this.currentLink];
                return matchingView ? matchingView.component : Page404;
            }
        },
        created() {
            window.addEventListener('popstate', () => {
                this.currentLink = window.location.pathname;
            });
        },
        render (h) {
            return h(this.currentView)
        }
    });
});