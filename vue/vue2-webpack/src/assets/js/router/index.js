import "../../css/router/index.less";

import Vue from "vue";
import { runWith } from "../common/common";

import "../widget/breadcrumb";

runWith('router.index', () => {
  // eslint-disable-next-line no-new
  new Vue({
    el: '#app',
    data: {
      links: [
        { name: 'Simple', href: '/www/router/simple.html' },
        { name: 'Page', href: '/www/router/page.html' },
        { name: 'Vue', href: '/www/router/vue.html' }
      ]
    }
  });
});
