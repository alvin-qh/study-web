<template>
  <div class="slot">
    <div>
      <!--通过条件插槽渲染所需的插槽内容-->
      <ConditionSlot :avatar="avatar">
        <!--设置默认插槽, 此时子组件的 `<main>` 元素会被渲染-->
        <div class="body">
          Condition Slot Demo
        </div>
        <!--设置 title 插槽, 此时子组件的 `<header>` 元素会被渲染-->
        <template #title>
          <strong>Condition Slot</strong>
        </template>
        <!--未设置 footer 插槽, 故子组件的 `<footer>` 元素不被渲染-->
      </ConditionSlot>
    </div>

    <div>
      <ConditionSlot :avatar="avatar">
        <div class="body">
          Dynamic Slot Demo
        </div>
        <!--动态插槽, 可以通过 `v-slot:[插槽名称]` 或 `#[插槽名称]` 语法动态设置插槽名称-->
        <template #[slotName]>
          <strong>Dynamic Slot</strong>
        </template>
      </ConditionSlot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import avatar from '@/assets/avatar.jpg';
import ConditionSlot from '@/component/slot/ConditionSlot.vue';

// 表示动态插槽名称的响应式变量
const slotName = ref<string>('title');

// 定期修改插槽名称, 会导致组件在不同时刻渲染不同的插槽
setInterval(() => {
  if (slotName.value === 'title') {
    slotName.value = 'footer';
  } else {
    slotName.value = 'title';
  }
}, 2000);
</script>

<style lang="scss" scoped>
.slot {
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 40px 0;

  .body {
    display: flex;
    min-height: 5vh;
    align-items: center;
    justify-content: center;
    font-size: medium;
    font-weight: bold;
    border: 1px solid #62626244;
  }

  .footer {
    text-align: center;
    font-size: smaller;
  }
}
</style>
