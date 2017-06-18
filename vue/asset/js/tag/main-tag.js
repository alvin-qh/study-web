require('../common/breadcrumb');
require('../common/bootstrap-notify');

const alter = require('../common/alert');
require('../common/panel');
require('../common/panel-group');
const select = require('../common/select.vue');

let app = new Vue({
	el: '#app',
	components: {
		alert: alter,
		select: select
	},
	data: {},
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
