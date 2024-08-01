<template>
  <div class="left-pane">
    <MenuBar :items="items" />
  </div>
</template>

<script setup lang="ts">
import { type MenuItem } from '@/types/menu-item';

import MenuBar from './MenuBar.vue';

defineProps<{ items: MenuItem[] }>();
</script>

<style scoped lang="scss">
.left-pane {
  width: 10vw;
  height: 90vh;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
