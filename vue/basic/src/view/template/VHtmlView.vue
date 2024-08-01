<!-- eslint-disable vue/no-v-html -->
<!--`v-html` 指令

可以通过 `v-html` 指令将脚本变量中包含的标签解释为 HTML 标签
-->
<template>
  <div class="template">
    <p>
      Message:
      <span class="msg" v-html="html" />
    </p>
  </div>
</template>

<script setup lang="ts">
// 定义变量, 该变量可以被当前文件中的模板所引用
const html = 'Hello <u>World</u>';
</script>

<style lang="scss" scoped>
.template {
  .msg {
    font-weight: 800;
    color: rgb(245, 109, 109);
  }
}
</style>
