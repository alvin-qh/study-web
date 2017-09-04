<template>
    <div class="container-fluid">
        <div id="breadcrumb">
            <breadcrumb :previous="[
                {name:'Home', href:'/www/'},
                {name:'Router', href:'/www/router/'}
                ]">
            </breadcrumb>
        </div>

        <div class="tab-pane">
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
    'use strict';

    import VLink from "./v-link.vue";
    import routers from "./routers";

    import "../../../widget/breadcrumb";

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