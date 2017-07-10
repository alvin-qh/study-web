<template>
    <div class="form-group form-group-sm clearfix">
        <label :for="id" class="control-label pull-left">{{label}}: </label>
        <select :id="id" :name="name" class="form-control pull-left" v-model="selected">
            <slot></slot>
        </select>
    </div>
</template>

<script>
    export default {
        props: {
            label: String,
            name: String,
            value: ''
        },
        data() {
            return {
                selected: ''
            }
        },
        computed: {
            id() {
                return `form-control-${this.name}`;
            }
        },
        watch: {
            selected() {
                this.$emit('input', this.selected);
            }
        }
    }
</script>

<style scoped lang="less">
    .form-group {
        select {
            width: 220px;
            margin-left: 10px;
        }
    }
</style>