<!--禁用组件的属性继承

通过调用 `defineOptions` 宏函数可以禁用组件的属性继承

所谓禁用组件继承, 指的是 Vue 不会将继承的属性作用在组件的 HTML 根元素上
-->
<template>
  <div ref="elem" class="component-attr">
    <AttributeList title="Inherit Attrs" :attrs="inheritAttrs" />
    <AttributeList title="InUse Attrs" :attrs="usedAttrs" />
  </div>
</template>

<script setup lang="ts">
import { ref, useAttrs } from 'vue';

import { AttributeList, type Attributes } from '@/component/common/AttributeList';

import { useElementAttrs } from './composable';

// 定义组件选项, 禁用属性继承
defineOptions({
  inheritAttrs: false
});

// 通过 `useAttrs()` 函数, 可以获取到当前组件所继承的全部属性值
const inheritAttrs = useAttrs() as Attributes;

// 获取组件的 HTML 根元素
const elem = ref<HTMLDivElement>();

// 获取组件根元素上实际应用的属性值
const usedAttrs = useElementAttrs(elem, ['class', 'id']);
</script>

<style scoped lang="scss">
.component-attr {
  display: flex;
  flex-direction: row;
  gap: 0 10px;
}
</style>
