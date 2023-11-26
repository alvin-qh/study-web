<template>
  <q-header elevated class="bg-black">
    <q-toolbar>
      <q-btn flat round dense icon="menu" @click="$emit('menuToggled')" />
      <q-toolbar-title>Header</q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
defineEmits<{
  menuToggled: []
}>();
</script>
