<template>
    <div>
        <header>
            <breadcrumb :previous="[{name:'Home', href:'/www/'}, {name:'Vuex', href:'/www/vuex'}]"></breadcrumb>
        </header>

        <main class="container">
            <div class="row form-group">
                <label class="col-1 col-form-label text-right">Operator: </label>
                <div class="col-3 input-group">
                    <div class="input-group-prepend">
                        <button class="btn btn-primary" @click="decrement()">-</button>
                    </div>

                    <input type="text" class="form-control" readonly :value="count"/>

                    <div class="input-group-append">
                        <button class="btn btn-primary" @click="increment()">+</button>
                    </div>
                </div>
            </div>
        </main>
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