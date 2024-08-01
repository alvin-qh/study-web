<!--定义组件的模板

使用 VUE 模板, 并可以在模板中通过 `{{  }}` 符合引用脚本变量
-->
<template>
  <div class="template">
    <p>
      Message:
      <span class="msg">{{ msg }}</span>
    </p>
  </div>
</template>

<!--定义组件的执行脚本-->
<script setup lang="ts">
// 定义变量, 该变量可以被当前文件中的模板所引用
const msg = 'Hello World';
</script>

<!--定义组件的样式-->
<style lang="scss" scoped>
.template {
  .msg {
    font-weight: 800;
    color: rgb(245, 109, 109);
  }
}
</style>
