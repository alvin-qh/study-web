<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="template">
    <!--可以通过 {{  }} 引用脚本中定义的 JS 变量-->
    <p>
      Message:
      <span class="msg">{{ msg }}</span>
    </p>

    <hr>

    <!--可以通过 `v-html` 指令将 JS 变量中包含的标签解释为 HTML 标签-->
    <p>
      Message:
      <span class="msg" v-html="msg" />
    </p>

    <hr>

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

    <hr>

    <!--使用 `v-bind` 指令可以指定一个对象, 对象中的字段作为 HTML 元素的属性-->
    <p v-bind="attrs">
      Message: <span v-html="msg" />
    </p>

    <hr>

    <!--可以通过在指令值中调用函数, 并将函数的返回值作为指令值-->
    <table>
      <tr v-for="(item, row) in items" :key="item" :class="rowStyle(row)">
        <td>{{ item }}-1</td>
        <td>{{ item }}-2</td>
      </tr>
    </table>

    <hr>

    <!--`v-if` 指令表示一个条件渲染, 只有条件满足后才会渲染指定标签
    相关的指令包括 `v-if`, `v-if-else` 以及 `v-else`, 在同一个
    逻辑分支中的条件指令要按逻辑顺序写在一起
    -->
    <p>
      Message:
      <strong v-if="isImportant()" v-html="msg" />
      <span v-else v-html="msg" />
    </p>

    <hr>

    <!--动态属性值, 可以从 JS 变量指定属性名和属性值-->
    <p :[dynamicAttr.name]="dynamicAttr.value">
      Message:
      <span v-html="msg" />
    </p>
  </div>
</template>

<script setup lang="ts">
// 定义变量, 该变量可以被当前文件中的模板所引用
const msg = 'Hello <u>World</u>';

// 定义数组变量
const items = ['A', 'B', 'C'];

// 可以定义一个包含所需 HTML 元素属性的对象
const attrs = {
  id: 'id-attr',
  class: 'class-attr'
};

// 定义一个在模板中调用的函数
const rowStyle = (row: number): string => (row % 2 === 0 ? 'row-even' : 'row-odd');

// 根据当前时间返回一个 boolean 值, 用于 `v-if` 指令进行判断
const isImportant = (): boolean => new Date().getMinutes() % 2 === 0;

// 定义一个对象, 包括元素的属性名和属性值, 用于定义动态属性
const dynamicAttr = {
  name: 'class',
  value: 'dynamic-class'
};
</script>

<style scoped lang="scss">
.template {
  .msg {
    font-weight: 800;
    color: rgb(245, 109, 109);
  }

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
