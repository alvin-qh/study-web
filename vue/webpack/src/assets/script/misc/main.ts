import '../../css/misc/index.less';
import '../widget/breadcrumb';

import Vue from 'vue';
import Router from 'vue-router';

import { runWith } from '../common/common';
import InfiniteScroll from './vue-infinite-scroll.vue';

const routes = [
  {
    path: '/vue-infinite-scroll',
    components: {
      default: InfiniteScroll
    },
    name: 'InfiniteScroll'
  }
];

runWith('misc.index', () => {
  Vue.use(Router);

  const router = new Router({
    routes,
    mode: 'hash'
  });

  // eslint-disable-next-line no-new
  new Vue({
    el: '#app',
    data(): Record<string, any> {
      return {
        routes
      };
    },
    router,
    created(): void {
      if (router.currentRoute.matched.length === 0) {
        router.replace(routes[0].path);
      }
    }
  });
});
