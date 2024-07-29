<template>
  <div class="common-left-pane">
    <CommonMenu :items="items" />
  </div>
</template>

<script setup lang="ts">
import { MenuItem } from '@/types/menu-item';
import CommonMenu from './CommonMenu.vue';

defineProps<{ items: MenuItem[] }>();
</script>

<style scoped lang="scss">
.common-left-pane {
  width: 10vw;
}
</style>
