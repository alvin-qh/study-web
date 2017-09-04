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
                        <a :href="href" :title="router.title">{{router.title}}</a>
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

    import "../../../widget/breadcrumb";

    import routers from "./routers";

    export default {
        data() {
            return {
                routers: routers
            };
        },
        computed: {
        	currentLink() {
        		return window.location.pathname;
            }
        }
    }
</script>