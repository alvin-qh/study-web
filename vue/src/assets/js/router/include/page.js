'use strict';

import Vue from "vue";
import _ from 'lodash';
import page from "page";

import ns from "../../common/ns";

import routers from "./page/routers";
import PageLoading from "./page/loading.vue";

import "../../widget/breadcrumb";

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

			setTimeout(() => page.redirect('/www/router/page/page1'), 2000);
		},
		render(h) {
			return h(this.ViewComponent)
		}
	});
});
