import '../../css/home/index.less';

import { BootstrapVue, NavbarPlugin } from 'bootstrap-vue';
import Vue from 'vue';

import { runWith, Times } from '../common/common';

runWith('home.index', () => {
  Vue.use(BootstrapVue);
  Vue.use(NavbarPlugin);

  new Vue({
    el: '#app',
    data(): Record<string, any> {
      return {
        title: 'Vue Demos',
        datetime: Times.nowString()
      };
    },
    created(): void {
      setInterval(() => {
        this.datetime = Times.nowString();
      }, 1000);
    }
  });
});
