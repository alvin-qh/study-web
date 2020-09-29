import "../../css/misc/index.less";

import Vue from "vue";

import { runWith } from "../common/common";
import Router from "vue-router";

import "../widget/breadcrumb";
import InfiniteScroll from "./vue-infinite-scroll";

const routes = [{
  path: '/vue-infinite-scroll',
  components: {
    default: InfiniteScroll
  },
  name: 'InfiniteScroll'
}];

runWith('misc.index', () => {
  Vue.use(Router);

  const router = new Router({
    routes,
    mode: 'hash'
  });

  // eslint-disable-next-line no-new
  new Vue({
    el: '#app',
    data() {
      return {
        routes
      }
    },
    router,
    created() {
      if (router.currentRoute.matched.length === 0) {
        router.replace(routes[0].path);
      }
    }
  });
});
