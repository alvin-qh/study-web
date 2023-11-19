import "../../css/router/router.less";

import Vue from "vue";
import Router from "vue-router";
import { runWith } from "../common/common";

import routes from "./vue-router/routes";
import "../widget/breadcrumb";

runWith('router.vue-router', () => {
  Vue.use(Router);

  const router = new Router({
    routes,
    mode: 'hash' // 'history', 'hash', 'abstract'
  });

  // eslint-disable-next-line no-new
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
