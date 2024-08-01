<template>
  <div class="template">
    <!--`v-if` 指令表示一个条件渲染, 只有条件满足后才会渲染指定标签
    相关的指令包括 `v-if`, `v-if-else` 以及 `v-else`, 在同一个
    逻辑分支中的条件指令要按逻辑顺序写在一起
    -->
    <p>
      Message:
      <strong v-if="isImportant()">
        {{ msg }}
      </strong>
      <span v-else>
        {{ msg }}
      </span>
    </p>
  </div>
</template>

<script setup lang="tsx">
// 定义变量, 该变量可以被当前文件中的模板所引用
const msg = 'Hello World';

// 根据当前时间返回一个 boolean 值, 用于 `v-if` 指令进行判断
const isImportant = (): boolean => (
  new Date().getMinutes() % 2 === 0
);
</script>

<style lang="scss" scoped>

</style>
