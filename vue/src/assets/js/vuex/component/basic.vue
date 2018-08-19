<template>
    <div class="container-fluid">
        <breadcrumb :previous="[{name:'Home', href:'/www/'}, {name:'Vuex', href:'/www/vuex'}]"></breadcrumb>

        <div class="container">
            <div class="form-group form-group-sm">
                <label class="control-label">Operator: </label>
                <div class="row col-md-5 input-group input-group-sm">
                    <div class="input-group-btn">
                        <button class="btn btn-primary" @click="decrement()">-</button>
                    </div>
                    <input type="text" class="form-control" readonly :value="count"/>
                    <div class="input-group-btn">
                        <button class="btn btn-primary" @click="increment()">+</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
	import store from "../store/basic";

	import "../../widget/breadcrumb";

	const TITLE = 'Basic';

	export default {
		title: TITLE,
		created() {
			document.title = TITLE;
		},
		data() {
			return {};
		},
		computed: {
			count() {
				return store.state.count;
			}
		},
		methods: {
			decrement() {
				store.commit('decrement')
			},
			increment() {
				store.commit('increment')
			}
		}
	}
</script>

<style lang="less" scoped>

</style>