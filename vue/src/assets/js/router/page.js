import "../../css/router/router.less";

import Vue from "vue";
import page from "page";
import * as _ from 'lodash';

import {ns} from "../common/common";

import routers from "./page/routers";
import PageLoading from "./page/loading.vue";

ns('router.page', function () {
    new Vue({
        el: '#app',
        data: {
            ViewComponent: PageLoading
        },
        created() {
            page('/www/router/page.html', () => this.ViewComponent = PageLoading);

            _.each(routers, (comp, href) => {
                page(href, () => this.ViewComponent = comp);
            });

            page('*', e => location.href = e.path);
            page();

            setTimeout(() => page.redirect('/www/router/page/page1'), 500);
        },
        render(h) {
            return h(this.ViewComponent)
        }
    });
});
