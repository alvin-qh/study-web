'use strict';

import Vue from "vue";
import _ from "lodash";
import page from "page";

import ns from "../../common/ns";

import routers from "./router";
import IndexPage from "./component/index.vue";


ns('vuex.index', function () {
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


