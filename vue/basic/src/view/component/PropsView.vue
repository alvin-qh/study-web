<!--为组件传递属性值-->
<template>
  <div class="component">
    <fieldset class="props-value">
      <legend>Outside Component</legend>
      <label>
        <div>Color</div>
        <input v-model="color" type="text">
      </label>
      <label>
        <div>Size</div>
        <input v-model="size" type="text">
      </label>
    </fieldset>

    <!--使用组件, 并传递属性值到组件内部-->
    <PropsComp :color="color" :size="size" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import PropsComp from '@/component/component/PropsComp.vue';

// 定义两个响应式变量, 作为 `ComponentProps` 组件的输入属性
const color = ref<string>('#f5c5c5c3b');
const size = ref<string>('15px');
</script>

<style lang="scss" scoped>
.component {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px 0;

  .props-value {
    display: flex;
    flex-direction: column;
    gap: 10px 0;
    height: fit-content;
    border: 1px solid #a5a5a542;

    legend {
      font-size: 12px;
    }

    label {
      display: flex;
      flex-direction: row;
      gap: 0 5px;
      align-items: center;

      &>div {
        font-size: small;
        width: 3em;
        text-align: right;

        &::after {
          content: ":";
        }
      }

      input {
        padding: 5px 8px;
        outline: none;
      }
    }
  }
}
</style>
