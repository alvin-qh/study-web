<template>
  <template v-for="(item, index) in items" :key="index">
    <QExpansionItem
      v-if="item.children"
      expand-separator
      :header-inset-level="initLevel"
      :icon="item.icon ?? 'none'"
      :label="item.label"
    >
      <MenuItems :items="item.children" :init-level="initLevel + 0.01" />
    </QExpansionItem>
    <QExpansionItem
      v-else
      expand-icon="none"
      :header-inset-level="initLevel"
      :icon="item.icon ?? 'none'"
      :label="item.label"
      :to="item.path ?? ''"
    />
    <QSeparator v-if="item.separator" :key="'sep' + index" />
  </template>
</template>

<script setup lang="ts">
import { type MenuData } from '@/menu';

defineProps({
  items: { type: Array<MenuData>, required: true },
  initLevel: { type: Number, default: 0 }
});
</script>
