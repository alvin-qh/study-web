import Vue from "vue";

const template = `<div v-bind:class="['panel', 'panel-' + type]">
    <div v-if="title" class="panel-heading">
        <h4 class="panel-title">
            <a v-if="isCollapse"
               role="button"
               data-toggle="collapse"
               aria-expanded="true">{{title}}</a>
            <template v-else>{{title}}</template>
        </h4>
    </div>
    <div v-if="isCollapse" v-bind:class="['collapse', {'in': isExpand}]" role="tabpanel" aria-expanded="false">
        <div class="panel-body">
            <slot></slot>
        </div>
    </div>
    <div v-else class="panel-body">
        <slot></slot>
    </div>
    <div v-if="footer" class="panel-footer">{{footer}}</div>
</div>`;

Vue.component('panel', {
	template: template,
	data() {
		return {};
	},
	props: {
		type: [String],
		title: [String],
		footer: [String],
		collapsible: [String, Boolean],
		expand: [String, Boolean]
	},
	computed: {
		isCollapse: {
			get() {
				return this.collapsible === true || this.collapsible === 'true';
			}
		},
		isExpand: {
			get() {
				return this.expand === true || this.expand === 'true';
			}
		}
	},
	mounted() {
		if (this.isCollapse) {
			const $current = $().find('div.collapse');
			const $others = $current.closest('div.panel-group').find('div.panel')
				.filter((n, other) => other !== $current[0])
				.map((n, other) => $(other).find('div.collapse'));

			$(this.$el).find('.panel-heading a')
				.off('click')
				.on('click', () => {
					if ($others.length > 0) {
						$others.each((n, other) => $(other).collapse('hide'));
					}
					$current.collapse('toggle');
				});
		}
	}
});