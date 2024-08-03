<template>
  <div class="component">
    <div>
      <input v-model.number="userId" type="text" name="id">
      <AsyncUser :user-id="userId" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { AsyncUser } from '@/component/component/AsyncUser';

const userId = ref<number>(1);
</script>

<style lang="scss" scoped>
.component {

}
</style>
