<!--为子组件传递属性值

除了通过"组件属性"向子组件传递值外, 还可以通过"注入"的方式向子组件传递值, 后者和前者的区别包括:
- 注入的值无需在子组件调用上进行声明, 子组件可以通过注入值的名称直接获取值;
- 注入的值可以被所有下级组件获取;

注入方式包括:
1. 通过 Vue 的 `App` 对象可以为所有组件注入一个值;

   ```typescript
   createApp(App)
    .provide('global', 'Global provider value') // 全局注入值
    .mount('#app')
   ```

2. 通过 `provide` 函数可以为当前组件的所有子组件注入一个值;

注入的值可以为任何有效的 Javascript 值, 包括 Vue 的响应式变量值
-->
<template>
  <CommonAttributes title="Global" :attrs="globalAttrs" />
  <CommonAttributes title="Local" :attrs="localAttrs" />
  <CommonAttributes title="Point" :attrs="clientPoint || {}" />
</template>

<script setup lang="ts">
import { inject, onMounted, type Ref, ref } from 'vue';

import CommonAttributes from '@/component/common/CommonAttributes.vue';
import { exec } from '@/lib/execute';

// 定义响应式变量, 用于获取所有全局注入值
const globalAttrs = ref<Record<string, string | number | null>>({
  // 表示名为 `global` 的全局注入值
  global: null
});

// 定义响应式变量, 用于获取所有父组件注入值
const localAttrs = ref<Record<string, string | number | null>>({
  // 表示名为 `static-local` 的全局注入值
  'static-local': null,
  // 表示名为 `reactive-local` 的全局注入值, 该值为一个响应式变量, 父组件中改变该变量后, 子组件会得到响应
  'reactive-local': null
});

// 执行函数, 获取全局注入值
exec(() => {
  // 遍历对象的 Key, 并以 Key 为名称获取全局注入值, 将值设置到该 Key 上
  Object.keys(globalAttrs.value)
    .forEach((key) => {
      const val = inject<string | null>(key, null);
      globalAttrs.value[key] = val;
    });
});

// 执行函数, 获取父组件注入值
exec(() => {
  // 遍历对象的 Key, 并以 Key 为名称获取全局注入值, 将值设置到该 Key 上
  Object.keys(localAttrs.value)
    .forEach((key) => {
      const val = inject<string | null>(key, null);
      localAttrs.value[key] = val;
    });
});

// 获取名为 `reactive-object` 的父组件注入值
// 该注入值为一个对象, 包括 `clientPoint` 和 `changeClientPoint`, 前者为一个响应式变量, 后者是改变该变量的函数
// eslint-disable-next-line no-spaced-func
const { clientPoint, changeClientPoint } = inject<{
  clientPoint?: Ref<{ x: number, y: number }>
  changeClientPoint?: (x: number, y: number) => void
}>('reactive-object', { clientPoint: undefined, changeClientPoint: undefined });

// 当组件加载后, 追踪鼠标指针位置, 通过调用 `changeClientPoint` 函数, 改变 `clientPoint` 响应式变量的值
onMounted(() => {
  window.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    if (changeClientPoint) {
      changeClientPoint(x, y);
    }
  });
});
</script>
