'use strict';

import Vue from "vue";
import $ from "jquery";

import alter from "../widget/alert";

import "bootstrap-growl";

import "../widget/breadcrumb";
import "../widget/panel";
import "../widget/panel-group";

import "../../css/tag/tag.less";

const app = new Vue({
	el: '#app',
	components: {
		alert: alter
	},
	methods: {
		notify(text) {
			$.notify({
				message: text
			}, {
				type: 'info',
				delay: 1000
			});
		},
		alertClose(type) {
			this.notify('Alert is ' + type);
		}
	}
});
