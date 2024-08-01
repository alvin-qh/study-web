<!--简单插槽

插槽也是一种向组件传参的语法形式, 传递的内容一般为: 子组件, HTML 节点;
所以使用插槽可以做到由父元素为子组件提供内容
-->
<template>
  <div class="slot">
    <div>
      <!--为组件设置插槽内容-->
      <SimpleSlot>Hello Slot</SimpleSlot>
    </div>

    <!--插槽嵌套-->
    <div>
      <!--插槽中可以包含任意 HTML 元素以及 Vue 组件-->
      <SimpleSlot>
        <p>Hello Slot1</p>
        <SimpleSlot>Hello Slot2</SimpleSlot>
      </SimpleSlot>
    </div>

    <!--插槽作用域-->
    <div>
      <!--插槽可以在子组件中使用父组件的作用域-->
      <SimpleSlot>
        <div>{{ now }}</div>
      </SimpleSlot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import SimpleSlot from '@/component/slot/SimpleSlot.vue';
import { formatDate } from '@/lib/time';

// 定义响应式变量, 并设置到插槽中, 即子组件的插槽可以引用父组件的上下文
const now = ref<string>(formatDate());
setInterval(() => { now.value = formatDate(); }, 500);
</script>

<style lang="scss" scoped>
.slot {
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 20px 0;
}
</style>
