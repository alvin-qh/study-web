<template>
    <layout>
        <div>
            Hello, This is page 2
        </div>
    </layout>
</template>

<script>
    import Layout from "./layout.vue";

    export default {
	    title: 'Page 2',
	    components: {
		    Layout
	    },
	    created() {
		    document.title = comp.title;
	    }
    };
</script>