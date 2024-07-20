<!--为组件定义属性

可以通过 `defineProps` 宏为组件定义属性; 父组件可以通过属性传值给子组件; 属性为响应式, 当父组件传递的属性值变化时, 子组件的属性跟随变化, 但在子组件内改变属性值, 则无任何效果;

可以通过 `withDefaults` 为属性设置默认值;

属性定义后, 即可在组件模板中通过属性名访问属性值; 在脚本中则需要通过属性对象, 使用属性名称字段访问属性值;

属性对象中的字段均为只读, 改变属性对象的字段值无效, 所以组件属性不能用于 `v-model` 指令;

可以定义和属性名相同的响应式变量, 并通过 `watch` 检测属性值, 属性值的变化传递给响应式变量;
-->
<template>
  <div class="component-props">
    <fieldset class="opt">
      <legend>Inside Component</legend>
      <label>
        <div>Color</div>
        <input type="text" v-model="rColor">
      </label>
      <label>
        <div>Size</div>
        <input type="text" v-model="rSize">
      </label>
    </fieldset>
    <div class="view">
      <div :style="{ '--bg-color': rColor, '--font-size': rSize }">
        <table>
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th>Color</th>
              <th>Size</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Properties</th>
              <!--通过属性名称直接访问属性值-->
              <td>{{ color }}</td>
              <td>{{ size }}</td>
            </tr>
            <tr>
              <th>Reactive</th>
              <td>{{ rColor }}</td>
              <td>{{ rSize }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

// 定义带有默认值的属性, 返回属性对象, 其字段为属性值;
//
// `props` 变量具备响应式, 可以通过 `watch` 函数监控变化;
//
// 注意, 如果通过解构语法定义属性变量, 则属性变量会失去响应式, 例如:
//
// ```typescript
// const { color, size } = defineProps<{
//   color?: string
//   size?: string
// }>()
// ```
//
// 则结构后的 `color` 和 `size` 变量不具备响应式, 无法通过 `watch` 函数监控变化;
//
// 如果定义的属性只在"模板"中使用, 则无需定义属性对象变量, 直接在模板中使用属性名称即可, 例如:
//
// 脚本为:
//
// ```typescript
// defineProps<{
//   color?: string
//   size?: string
// }>()
// ```
//
// 模板为:
//
// ```html
// <template>
//   <div>{{ color }}, {{ size }}</div>
// </template>
// ```
//
// 即脚本中可以不定义属性对象变量, 模板中直接使用属性名访问属性即可
const props = withDefaults(
  // 定义两个属性, 属性值可缺省
  defineProps<{
    color?: string
    size?: string
  }>(),
  // 为属性指定默认值 (属性值可缺省时起作用)
  {
    color: '#f5c5c5c3b',
    size: '10px'
  }
);

// 定义响应式变量, 并用属性值进行初始化;
//
// 如果无需再模板中访问原始属性值, 也可以将响应式变量名称定义的和属性名相同,
// 从而在模板中用响应式变量名称覆盖属性名称, 例如:
//
// ```typescript
// const rColor = ref<string>(props.color);
// const rSize = ref<string>(props.size);
// ```
const rColor = ref<string>(props.color);
const rSize = ref<string>(props.size);

// 监控属性对象变化
watch(props, val => {
  rColor.value = val.color;
  rSize.value = val.size;
});
</script>

<style scoped lang="scss">
.component-props {
  --bg-color: ;
  --font-size: ;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px 0;

  .opt {
    display: flex;
    flex-direction: column;
    gap: 10px 0;

    label {
      display: flex;
      flex-direction: row;
      align-items: center;
      font-size: small;
      gap: 0 5px;

      &>div {
        width: 3em;
        text-align: right;

        &::after {
          content: ":";
        }
      }

      input {
        padding: 5px 8px;
      }
    }

    legend {
      font-size: 12px;
    }
  }

  .view {
    width: fit-content;

    &>div {
      border: 1px solid #79787846;
      padding: 10px 20px;
      background-color: var(--bg-color);
      font-size: var(--font-size);

      table {
        border-collapse: collapse;
        font-size: small;

        th,
        td {
          border: 1px solid #79787846;
          padding: 5px 8px;
        }
      }
    }
  }
}
</style>
