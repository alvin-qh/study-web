<!--禁用组件的属性继承

通过调用 `defineOptions` 宏函数可以禁用组件的属性继承

所谓禁用组件继承, 指的是 Vue 不会将继承的属性作用在组件的 HTML 根元素上
-->
<template>
  <div class="component-attr" ref="elem">
    <CommonAttributes title="Inherit Attrs" :attrs="inheritAttrs" />
    <CommonAttributes title="InUse Attrs" :attrs="usedAttrs" />
  </div>
</template>

<script setup lang="ts">
import { useAttrs, ref } from 'vue';
import CommonAttributes from '@/component/common/CommonAttributes.vue';
import { useElementAttrs } from './composable';

// 定义组件选项, 禁用属性继承
defineOptions({
  inheritAttrs: false
});

// 通过 `useAttrs()` 函数, 可以获取到当前组件所继承的全部属性值
const inheritAttrs = useAttrs() as Record<string, string | number>;

// 获取组件的 HTML 根元素
const elem = ref<HTMLDivElement>();

// 获取组件根元素上实际应用的属性值
const usedAttrs = useElementAttrs(elem, ['class', 'id']);
</script>
