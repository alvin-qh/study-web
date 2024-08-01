<!--为子组件传递属性值-->
<template>
  <div class="component">
    <InjectionComp />
  </div>
</template>

<script setup lang="ts">
import { provide, type Ref, ref } from 'vue';

import { InjectionComp, type InjectionObj, type Point } from '@/component/component/InjectionComp';
import { formatDate } from '@/lib/time';

// 向子组件注入静态值
provide<string>('static-local', 'Local static value');

// 定义响应式变量
const reactiveLocal = ref<string>(formatDate());
setInterval(() => { reactiveLocal.value = formatDate(); }, 500);

// 将响应式变量注入子组件, 子组件可以获取响应式变量
provide<Ref<string>>('reactive-local', reactiveLocal);

// 定义响应式变量和修改响应式变量的函数
const clientPoint = ref<Point>({ x: 0, y: 0 });
const changeClientPoint = (x: number, y: number): void => {
  clientPoint.value = { x, y };
};

// 将响应式变量和修改函数组成的对象注入子组件
provide<InjectionObj>('reactive-object', {
  clientPoint, changeClientPoint
});
</script>

<style lang="scss" scoped>
.component {
  display: flex;
  flex-direction: row;
  gap: 0 20px;
  padding: 20px 0;
}
</style>
