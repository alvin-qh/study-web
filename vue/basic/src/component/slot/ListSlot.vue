<!--列表插槽

在列表循环中包含插槽, 也是插槽作用域的一个典型应用;
一般情况下, 需要将列表的每一项相关的数据通过插槽属性暴露给父组件, 以便父组件依据当前插槽项的对外属性值进行内容的渲染;
-->
<template>
  <div class="list-slots">
    <ul>
      <li v-for="(item, index) in items" :key="item">
        <!--循环列表项, 每次循环产生一个插槽, 并将循环每一项相关属性通过插槽属性传递给父组件-->
        <slot :item="item" :index="index + 1" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// 列表项
const items = ref<string[]>(['A', 'B', 'C', 'D', 'E', 'F', 'G']);
</script>

<style scoped lang="scss">
.list-slots {
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
}
</style>
