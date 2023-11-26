<template>
  <div class="page-layouts">
    <header>
      <breadcrumb :previous="previous"></breadcrumb>
    </header>

    <main class="container">
      <ul class="nav nav-tabs" role="tablist">
        <li class="nav-item" role="presentation" v-for="(router, href) in routers" :key="href">
          <a :class="linkStyle(href)" :href="href" :title="router.title">{{ router.title }}</a>
        </li>
      </ul>
      <div class="card no-top-border">
        <div class="card-body">
          <slot></slot>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import '../../widget/breadcrumb';

import { routers } from './routers';

export default {
  data(): Record<string, any> {
    return {
      routers: routers,
      previous: [
        { name: 'Home', href: '/www/' },
        { name: 'Router', href: '/www/router/' },
      ]
    };
  },
  computed: {
    currentLink(): string {
      return window.location.pathname;
    }
  },
  methods: {
    linkStyle(link: any): string[] {
      return this.currentLink === link ? ['nav-link', 'active'] : ['nav-link'];
    }
  }
};
</script>
