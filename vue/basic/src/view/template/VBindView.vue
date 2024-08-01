<!--`v-bind` 指令

可通过 `v-bind` 指令值, 可以为组件的属性绑定脚本变量
-->
<template>
  <div class="template">
    <!--使用 `v-bind` 指令可以指定一个对象, 对象中的字段作为 HTML 元素的属性-->
    <p v-bind="attrs">
      Message:
      <span>{{ msg }}</span>
    </p>

    <!--可以通过在指令值中调用函数, 并将函数的返回值作为指令值-->
    <table>
      <tr
        v-for="(item, row) in items"
        :key="item"
        :class="rowStyle(row)"
      >
        <td>{{ item }}-1</td>
        <td>{{ item }}-2</td>
      </tr>
    </table>

    <!--动态属性值, 可以从 JS 变量指定属性名和属性值-->
    <p :[dynAttr.name]="dynAttr.value">
      Message:
      <span>{{ msg }}</span>
    </p>
  </div>
</template>

<script setup lang="ts">
// 定义变量, 该变量可以被当前文件中的模板所引用
const msg = 'Hello World';

// 定义数组变量
const items = ['A', 'B', 'C'];

// 可以定义一个包含所需 HTML 元素属性的对象
const attrs = {
  id: 'id-attr',
  class: 'class-attr'
};

// 定义一个在模板中调用的函数
const rowStyle = (row: number): string => (
  row % 2 === 0 ? 'row-even' : 'row-odd'
);

// 定义一个对象, 包括元素的属性名和属性值, 用于定义动态属性
const dynAttr = {
  name: 'class',
  value: 'dynamic-class'
};
</script>

<style lang="scss">
.template {
  .msg {
    font-weight: 800;
    color: rgb(245, 109, 109);
  }

  .class-attr {
    color: rgb(160, 30, 111);
    font-weight: 700;
  }

  table {
    border-collapse: collapse;

    tr {
      &.row-even {
        background-color: rgb(121, 121, 123);
      }
      &.row-odd {
        background-color: rgb(194, 194, 194);
      }
    }

    td {
      padding: 10px 20px;
      border: 1px solid #4d4d4d;
    }
  }

  .dynamic-class {
    color: #0f0;
  }
}
</style>
