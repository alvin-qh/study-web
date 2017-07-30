<template>
    <div class="container-fluid">
        <div class="loading">Loading...</div>
    </div>
</template>

<script>
	import Layout from "./layout.vue";

	const comp = {
		title: 'Loading',
		components: {
			Layout
		},
		created() {
			document.title = comp.title;
		}
	};

	export default comp;
</script>

<style lang="less" scoped>
    .loading {
        text-align: center;
        margin-top: 30px;
    }
</style>