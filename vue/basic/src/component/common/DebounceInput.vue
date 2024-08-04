<!--具备防抖功能的文本数字输入框-->
<template>
  <input
    :name="name"
    :type="type"
    :placeholder="placeholder ?? ''"
    :value="modelValue"
    @input="handleInput"
    @change="(e) => emit('change', e)"
  >
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { debounceRun } from '@/lib/execute';

// 定义组件属性
const props = withDefaults(
  defineProps<{
    name?: string
    type?: 'text' | 'number'
    placeholder?: string
    debounceDelay?: number // 防抖延时
    modelValue?: string | number // `v-model` 值
    modelModifiers?: { // `v-model` 修饰符属性
      debounce?: boolean
      number?: boolean
    }
  }>(),
  {
    type: 'text',
    debounceDelay: 500, // 防抖延时默认值
    modelModifiers() { // `v-model` 修饰符默认值 (默认无修饰符)
      return {};
    }
  }
);

// 定义组件事件
const emit = defineEmits<{
  'update:modelValue': [value: string | number] // `v-model` 更新事件
  'input': [e: Event]
  'change': [e: Event]
}>();

// 根据 `v-model` 指令的 `number` 修饰符, 将 `update:modelValue` 事件的值转为所需类型
const convertModelValue = (e: Event): string | number => {
  const target = e.target as HTMLInputElement;
  return props.modelModifiers.number ? (parseFloat(target.value) || '') : target.value;
};

// 通过计算属性返回一个防抖函数
// 当组件属性中的防抖延迟时间变化后, 返回新的防抖函数
const debounceFn = computed(() => (
  debounceRun((e: Event) => { emit('update:modelValue', convertModelValue(e)); }, props.debounceDelay)
));

// 处理 input 事件
const handleInput = (e: Event): void => {
  emit('input', e);

  if (props.modelModifiers.debounce) {
    debounceFn.value(e);
  } else {
    emit('update:modelValue', convertModelValue(e));
  }
};
</script>
