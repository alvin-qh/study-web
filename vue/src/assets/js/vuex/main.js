import "../../css/vuex/index.less";

import Vue from "vue";
import * as _ from "lodash";
import page from "page";

import {runWith} from "../common/common";

import routers from "./router";
import IndexPage from "./component/index.vue";


runWith('vuex.index', function () {
    new Vue({
        el: '#app',
        data: {
            currentView: IndexPage
        },
        created() {
            page('/www/vuex/', () => this.currentView = IndexPage);
            _.each(routers, (comp, href) => page(href, () => this.currentView = comp));
            page();
        },
        render(h) {
            return h(this.currentView);
        }
    });
});