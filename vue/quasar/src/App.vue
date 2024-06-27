<template>
  <q-layout view="hHh Lpr lff" container class="container">
    <top-header @menu-toggled="onMenuToggled()" />
    <left-drawer ref="leftDrawer" />
    <q-page-container>
      <q-page padding>
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { type ComponentPublicInstance, ref } from 'vue';

import LeftDrawer from '@/components/LeftDrawer.vue';
import TopHeader from '@/components/TopHeader.vue';

const leftDrawer = ref<ComponentPublicInstance<typeof LeftDrawer> | null>(null);

function onMenuToggled() {
  leftDrawer.value?.toggleMenuState();
}
</script>

<style lang="scss" scoped>
.container {
  min-height: 2000px;
}
</style>
