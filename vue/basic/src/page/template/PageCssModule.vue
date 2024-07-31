<!--CSS Module

VUE 中可以通过两种方式使用 CSS Module:
- 通过引入外部 `.module.scss` 文件, 引入模块化 CSS, 在 VUE 文件的 `<template>` 标签中通过引入的模块
  名称使用 CSS 类选择器;

  ```vue
  <script setup lang="ts">
  import cssFile from './CSSModule.module.scss';
  </script>
  ```

- 通过在 VUE 文件内部的 `<style module="<module name>">` 标签, 由 `module` 属性指定 CSS 模块名称,
  在 VUE 文件的 `<template>` 标签中通过模块名称使用 CSS 类选择器;
-->
<template>
  <div :class="cssFile['css-module']">
    <div :class="cssFile['file-module']" />

    <hr>

    <div :class="cssInline['inline-module']" />
  </div>
</template>

<script setup lang="ts">
// 从外部 CSS 文件引入模块化 CSS, 并定义模块名称
import cssFile from './CSSModule.module.scss';
</script>

<!-- 通过 `module` 属性指定 CSS 模块名 -->
<style lang="scss" module="cssInline">
.inline-module {
  background-color: #067a198c;
  width: 100px;
  height: 100px;
  cursor: pointer;

  &:hover {
    background-color: #067a19bb
  }
}
</style>
