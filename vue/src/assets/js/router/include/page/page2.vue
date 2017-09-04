<template>
    <layout>
        <div>
            Hello, This is page 2
        </div>
    </layout>
</template>

<script>
    'use strict';

    import Layout from "./layout.vue";

    const comp = {
	    title: 'Page 2',
	    components: {
		    Layout
	    },
	    created() {
		    document.title = comp.title;
	    }
    };

    export default comp;
</script>