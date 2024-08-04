<!--异步组件-->
<template>
  <div class="component">
    <!--演示在组件中使用异步调用-->
    <div class="user">
      <!--使用防抖输入组件-->
      <DebounceInput
        v-model.debounce.number="userId"
        name="id"
        type="text"
        placeholder="Please input user id"
      />
      <AsyncUser :user-id="userId" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import DebounceInput from '@/component/common/DebounceInput.vue';
import AsyncUser from '@/component/component/AsyncUser.vue';

// 定义响应式变量, 表示用户 ID
const userId = ref<number>();
</script>

<style lang="scss" scoped>
.component {
  display: flex;
  flex-direction: column;
  gap: 20px 0;
  padding: 10px 0;

  .user {
    display: flex;
    flex-direction: column;
    gap: 10px 0;

    input[type=text] {
      padding: 8px 10px;
      width: 10em;
    }
  }
}
</style>
