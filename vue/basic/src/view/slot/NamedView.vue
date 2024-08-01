<!--命名插槽-->
<template>
  <div class="slot">
    <!--为组件定义的多个插槽设置内容-->
    <NamedSlot :avatar="avatar">
      <!--为组件的匿名插槽设置内容, 该匿名插槽用于定义组件的 Body 内容-->
      <div class="body">
        Named Slot Demo
      </div>
      <!--为组件的 title 命名插槽定义内容, 也可以使用 `v-slot:title` 语法-->
      <template #title>
        <strong>Named Slot</strong>
      </template>
      <!--为组件的 footer 命名插槽定义内容, 也可以使用 `v-slot:footer` 语法-->
      <template #footer>
        <div class="footer">
          Powered by Vue 3.x
        </div>
      </template>
    </NamedSlot>
  </div>
</template>

<script setup lang="ts">
import avatar from '@/assets/avatar.jpg';
import NamedSlot from '@/component/slot/NamedSlot.vue';
</script>

<style lang="scss" scoped>
.slot {
  padding: 20px 0;

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
