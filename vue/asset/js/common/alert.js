'use strict';

const template = `
<div v-bind:class="['alert', 'alert-' + type]" role="alert">
    <button v-if="closeable === 'true'" type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>
    <slot></slot>
</div>`;

const alert = Vue.extend({
	template: template,
	data() {
		return {};
	},
	props: {
		type: [String],
		closeable: {
			default: 'false'
		}
	},
	mounted: function () {
		const $alert = $(this.$el);
		const self = this;
		$alert.alert()
			.off('close.bs.alert')
			.on('close.bs.alert', e => self.$emit('close'))
			.off('closed.bs.alert')
			.on('closed.bs.alert', e => self.$emit('closed'));
	}
});

module.exports = alert;