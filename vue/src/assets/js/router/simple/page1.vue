<template>
    <layout>
        <div>
            Hello, This is page 1
        </div>
    </layout>
</template>

<script>
    import Layout from "./layout.vue";

    export default {
        title: 'Page 1',
        components: {
            Layout
        },
        created() {
            document.title = comp.title;
        }
    };
</script>