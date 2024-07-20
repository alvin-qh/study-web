<template>
  <div class="global-state-receiver">
    <div>{{ text }}</div>
  </div>
</template>

<script setup lang="ts">
import { useGlobalState } from './state';

// 调用组合函数, 获取全局的 `text` 响应式变量
const { text } = useGlobalState();
</script>

<style scoped lang="scss">
.global-state-receiver {
  padding: 10px 0;

  &>div {
    background-color: #75757533;
    padding: 10px 8px;
    width: fit-content;
  }
}
</style>
