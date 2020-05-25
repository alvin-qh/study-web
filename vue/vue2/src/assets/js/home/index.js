import "../../css/home/index.less"

import Vue from "vue"
import { BootstrapVue, NavbarPlugin } from 'bootstrap-vue'

import { runWith, Times } from "../common/common"

runWith('home.index', () => {
  Vue.use(BootstrapVue)
  Vue.use(NavbarPlugin)

  // eslint-disable-next-line no-new
  new Vue({
    el: '#app',
    data: {
      title: 'Vue Demos',
      datetime: Times.nowString()
    },
    created() {
      setInterval(() => {
        this.datetime = Times.nowString()
      }, 1000)
    }
  })
})
