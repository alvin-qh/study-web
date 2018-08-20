<template>
    <div>
        <header>
            <breadcrumb :previous="[{name:'Home', href:'/www/'}]"></breadcrumb>
        </header>
        <main class="container">
            <ul class="feature-menu">
                <li v-for="(comp, href) in routers">
                    <a :href="href">{{ comp.title }}</a>
                </li>
            </ul>
        </main>
    </div>
</template>


<script>
	import routers from "../router";

	import "../../widget/breadcrumb";

	const TITLE = 'Vuex';

	export default {
		title: TITLE,
		created() {
			document.title = TITLE;
		},
		data() {
			return {
				routers
			};
		}
	}
</script>

<style lang="less" scoped>

</style>