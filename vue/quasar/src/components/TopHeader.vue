<template>
  <QHeader elevated class="bg-black">
    <QToolbar>
      <QBtn
        flat
        round
        dense
        icon="menu"
        @click="$emit('menuToggled')"
      />
      <QToolbarTitle>Header</QToolbarTitle>
    </QToolbar>
  </QHeader>
</template>

<script setup lang="ts">
defineEmits<{
  menuToggled: []
}>();
</script>
