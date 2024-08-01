<!--列表渲染

列表渲染指的是将数组 (或对象) 等可迭代的集合类型对象渲染到页面上
-->
<template>
  <div class="template">
    <ul>
      <!--`v-for` 指令表示一个循环渲染, 可以让当前元素 (及其子元素) 重复渲染指定次数-->
      <li v-for="item in items" :key="item">
        <!--可以通过 `v-bind:attr` 将 HTML 元素属性绑定到一个 JS 变量 (或表达式) 上,
        可以省略 `v-bind` 前缀, 只使用 `:attr` 即可-->
        <div :id="item" :class="`${item}-style`">
          {{ item }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
// 定义数组变量
const items = ['A', 'B', 'C'];
</script>

<style lang="scss" scoped>
.template {
  // 定义一个数组
  $colors: (
    A: #f00,
    B: #0f0,
    C: #00f,
  );

  // 循环产生三个样式, 包括: `A-style`, `B-style` 和 `C-style`
  @each $key, $color in $colors {
    .#{$key}-style {
      color: $color;
    }
  }
}
</style>
