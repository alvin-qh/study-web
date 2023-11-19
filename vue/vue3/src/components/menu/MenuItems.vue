<template>
  <template v-for="(item, index) in items" :key="index">
    <q-expansion-item
      v-if="item.children"
      expand-separator
      :header-inset-level="initLevel"
      :icon="item.icon ?? 'none'"
      :label="item.label"
    >
      <menu-items :items="item.children" :init-level="initLevel + 0.1" />
    </q-expansion-item>
    <q-expansion-item
      v-else
      expand-icon="none"
      :header-inset-level="initLevel"
      :icon="item.icon ?? 'none'"
      :label="item.label"
      :to="item.path ?? ''"
    />
    <q-separator v-if="item.separator" :key="'sep' + index" />
  </template>
</template>

<script setup lang="ts">
import { type MenuData } from "@/menu";

defineProps({
  items: { type: Array<MenuData>, required: true },
  initLevel: { type: Number, default: 0 }
});
</script>
