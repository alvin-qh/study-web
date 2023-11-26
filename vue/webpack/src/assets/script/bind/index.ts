import '../../css/bind/index.less';
import '../widget/breadcrumb';

import Vue from 'vue';

import { runWith, Times } from '../common/common';

runWith('bind.index', () => {
  new Vue({
    el: '#app',
    data(): Record<string, any> {
      return {
        text: '',
        color: 'info',
        panelColor: 'info',
        now: Times.nowString()
      };
    },
    computed: {
      textInverse: {
        get(): string {
          return ((this as any).text).split('').reverse().join('');
        },
        set(newVal: string): void {
          ((this as any)).text = newVal.split('').reverse().join('');
        }
      },
      noRefresh() {
        return Times.nowString();
      },
      refresh() {
        return this.now;
      }
    },
    watch: {
      color(val) {
        switch (val) {
        case 'info':
          this.panelColor = 'info';
          break;
        case 'warning':
          this.panelColor = 'warning';
          break;
        case 'danger':
          this.panelColor = 'danger';
          break;
        }
      }
    },
    created(): void {
      setInterval(() => {
        this.now = Times.nowString();
      }, 1000);
    }
  });
});
