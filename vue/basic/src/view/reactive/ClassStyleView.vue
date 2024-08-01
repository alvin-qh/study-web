<!--动态类选择器及样式
Vue 支持动态的类选择器和样式表, 可以动态的改变元素的样式, 有若干中方式可以使用
1. 键值对: 通过一个 Key 为类选择器名称或样式名称, Value 为 boolean 类型值的对象,
   可以为元素设置其中 Value 为 `true` 的类选择器或样式;
2. 数组: 通过一个包含类选择器名称或样式名称的数组, 可以指定元素所使用的全部类选择器或样式
-->
<template>
  <div class="reactive">
    <!--通过 Key/Value 对指定元素的内联样式表-->
    <div>
      <!--根据响应式变量的值动态设置内联样式表-->
      <div>
        <input v-model="dones['A']" type="checkbox">
        <span
          :style="{
            fontWeight: dones['A'] ? '400px' : '800px',
            color: dones['A'] ? '#7b7b7b' : '#f92727',
            textDecoration: dones['A'] ? 'line-through' : 'none'
          }"
        >A</span>
      </div>
      <!--通过响应式对象对指定元素的内联样式表-->
      <div>
        <input v-model="dones['B']" type="checkbox">
        <span :style="styleObj">B</span>
      </div>
      <!--通过数组指定元素的内联样式表-->
      <div>
        <input v-model="dones['C']" type="checkbox">
        <span :style="styleArray">C</span>
      </div>
    </div>

    <div>
      <!--通过 Key/Value 对指定元素的类选择器-->
      <div>
        <input v-model="dones['A']" type="checkbox">
        <span :class="{ active: !dones['A'], done: dones['A'] }">A</span>
      </div>
      <!--通过响应式对象对指定元素的类选择器-->
      <div>
        <input v-model="dones['B']" type="checkbox">
        <span :class="classObj">B</span>
      </div>
      <!--通过响应式数组指定元素的类选择器-->
      <div>
        <input v-model="dones['C']" type="checkbox">
        <span :class="classesArray">C</span>
      </div>
    </div>

    <div>
      <ColorPicker />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, type StyleValue } from 'vue';

import ColorPicker from '@/component/reactive/ColorPicker.vue';

// 记录三个 checkbox 是否选中的键值对
const dones = ref<Record<string, boolean>>({
  A: false,
  B: false,
  C: false
});

// 为 B checkbox 计算键值对形式的内联样式
const styleObj = computed<StyleValue>(() => {
  const done = dones.value.B;
  return {
    fontWeight: done ? '400px' : '800px',
    color: done ? '#7b7b7b' : '#f92727',
    textDecoration: done ? 'line-through' : 'none'
  };
});

// 定义类选择器对象类型
// 对象的 Key 为类选择器名称, Value 为一个 `boolean` 值, `true` 表示启用选择器
interface ClassObj {
  active: boolean
  done: boolean
}

// 为 B checkbox 计算键值对形式的类选择器对象
const classObj = computed<ClassObj>(() => (
  { active: !dones.value.B, done: dones.value.B }
));

// 为 C checkbox 计算数组形式的内联样式
// 最终元素会使用数组中所有样式对象合并的结果
const styleArray = computed<StyleValue[]>(() => {
  const done = dones.value.C;

  // 定义两个内联样式对象
  let activeStyle = {};
  let doneStyle = {};

  // 根据情况为两个内联样式对象设置属性
  if (done) {
    doneStyle = {
      textDecoration: 'line-through',
      color: '#7b7b7b'
    };
  } else {
    activeStyle = {
      fontWeight: '800px',
      color: '#f92727'
    };
  }

  // 返回内联样式组合数组
  return [activeStyle, doneStyle];
});

// 为 C checkbox 计算数组形式的类选择器集合
const classesArray = computed<string[]>(() => {
  const classes: string[] = [];
  if (dones.value.C) {
    classes.push('done');
  } else {
    classes.push('active');
  }
  return classes;
});
</script>

<style scoped lang="scss">
.reactive {
  display: flex;
  flex-direction: column;
  gap: 20px 0;

  &>div {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }

  .active {
    font-weight: 800px;
    color: #f92727;
  }

  .done {
    text-decoration: line-through;
    color: #7b7b7b;
  }
}
</style>"
