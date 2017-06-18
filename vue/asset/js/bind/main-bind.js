'use strict';

import Vue from "vue";

import util from "../util/util";

import "../widget/breadcrumb";

import "../../css/bind/bind.less";

const app = new Vue({
	el: '#app',
	data: {     // data 属性设置用于双向棒的对象
		text: '',
		color: 'info',
		panelColor: 'primary',
		now: util.times.nowString()
	},
	computed: {
		textInverse: {
			get() {
				return this.text.split('').reverse().join('');
			},
			set(newVal) {
				this.text = newVal.split('').reverse().join('');
			}
		},
		noRefresh() {
			return util.times.nowString();
		},
		refresh() {
			return this.now;
		}
	},
	watch: {
		color(val) {
			switch (val) {
			case 'info':
				this.panelColor = 'primary';
				break;
			case 'warning':
				this.panelColor = 'success';
				break;
			case 'danger':
				this.panelColor = 'default';
				break;
			}
		}
	},
	created() {
		setInterval(() => this.now = util.times.nowString(), 1000);
	}
});