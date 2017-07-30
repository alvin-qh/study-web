<template>
    <div class="container-fluid">
        Loading...
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