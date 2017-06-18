'use strict';

import Vue from "vue";

const template = `<div class="panel-group" role="tablist" aria-multiselectable="true">
    <slot></slot>
</div>`;

Vue.component('panel-group', {
	template: template
});