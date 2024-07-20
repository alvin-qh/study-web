<!--用于记录属性列表的控件-->
<template>
  <div class="common-attributes">
    <!--显示属性列表的表格-->
    <table>
      <!--显示标题-->
      <caption>{{ title }}</caption>
      <thead>
        <th>&nbsp;</th>
        <th>Values</th>
      </thead>
      <tbody>
        <!--遍历 Key/Value, 显示每个 Key/Value 内容-->
        <tr v-for="(val, name) in attrs" :key="name">
          <th>{{ name }}</th>
          <td>{{ val }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
// 定义组件属性, 用于传递要显示的内容
defineProps<{
  title: string // 组件的标题
  attrs: Record<string, string | number | boolean | null> // 组件要显示的 Key/Value 值
}>()
</script>

<style scoped lang="scss">
.common-attributes {
  table {
    font-size: 12px;
    border-collapse: collapse;

    caption {
      font-weight: 700;
      background-color: #36363670;
    }

    th,
    td {
      border: 1px solid #80808077;
      padding: 3px 5px;
    }
  }
}
</style>
