<template>
    <div>
        <div id="breadcrumb">
            <breadcrumb :previous="[
                {name:'Home', href:'../index.html'},
                {name:'Router', href:'./index.html'}
                ]"></breadcrumb>
        </div>

        <div class="container-fluid">
            <ul class="nav nav-tabs" role="tablist">
                <template v-for="(router, href) in routers">
                    <li role="presentation" :class="{'active': currentLink === href}">
                        <v-link :href="href" :title="router.title" :routers="routers" v-model="currentLink">
                            {{router.title}}
                        </v-link>
                    </li>
                </template>
            </ul>
            <div class="tab-content">
                <div class="panel panel-default no-top-border">
                    <div class="panel-body">
                        <slot></slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import VLink from "../../../widget/v-link.vue";
    import "../../../widget/breadcrumb";

    import routers from "./routers";

    export default {
        components: {
            VLink
        },
        data() {
            return {
                routers: routers,
                currentLink: window.location.pathname
            };
        },
        watch: {
            currentLink() {
                this.$root.currentLink = this.currentLink;
            }
        }
    }
</script>