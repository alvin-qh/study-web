<template>
  <layout>
    <div>Hello, This is page 1</div>
  </layout>
</template>

<script lang="ts">
import Layout from './layout.vue';

const TITLE = 'Page 1';

export default {
  data(): Record<string, any> {
    return {
      title: TITLE
    };
  },
  components: {
    Layout
  },
  created(): void {
    document.title = TITLE;
  }
};
</script>
