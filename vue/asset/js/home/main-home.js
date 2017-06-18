'use strict';

import Vue from "vue";
import util from "../util/util";

import "../../css/home/home.less";

let app = new Vue({
	el: '#app',
	data: {
		title: 'Vue Demos',
		datetime: util.times.nowString()
	}
});

setInterval(() => app.datetime = util.times.nowString(), 1000);