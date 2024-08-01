<!--表单组件

表单组件渲染一个 `<form>` 元素, 并根据表单定义对象渲染表单中的各个组件, 表单值通过 `model` 字段, 以 JSON 形式向外传递
-->
<template>
  <div class="component-dynamic">
    <form>
      <!--遍历表单定义对象, 渲染表单中每个组件-->
      <div v-for="(field, key) in definition" :key="key">
        <!--根据各表单项定义的 `type` 属性, 动态渲染对应表单组件, 组件类型由 `dispatchComponent` 函数返回;
        根据各表单项的 `key`, 将组件传出的值绑定到表单值对象对应的 `key` 上
        -->
        <component :is="dispatchComponent(field.type)" v-model="formData[key]" :field="field" />
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

import {
  FormCheckbox,
  type FormData,
  type FormDefinition,
  type FormFieldComponent,
  FormNumber,
  FormRadio,
  FormText,
  FormTextArea
} from './form';

// 定义组件的属性, 传入表单定义对象和表单值对象
// 组件将根据表单定义对象渲染表单和表单中的各个组件, 并根据表单值对象为对应组件设置值
defineProps<{ definition: FormDefinition }>();

// 定义组件的 `v-model` 变量
const model = defineModel<string>({ required: true });

// 定义响应式变量, 用于存储表单值
const formData = ref<FormData>(JSON.parse(model.value) as FormData);

// 根据表单项类型, 返回对应表单项组件类型
const dispatchComponent = (type: string): FormFieldComponent => {
  switch (type) {
  case 'text':
    return FormText;
  case 'number':
    return FormNumber;
  case 'radio':
    return FormRadio;
  case 'checkbox':
    return FormCheckbox;
  case 'textarea':
    return FormTextArea;
  default:
    throw new Error('Invalid component type');
  }
};

// 监控 `v-model` 变量, 将接收到的 JSON 字符串转为对象
watch(model, (val) => { formData.value = JSON.parse(val); });

// 监控响应式变量, 当表单值发生变化后, 将表单对象转为 JSON 字符串赋予 `v-model` 变量
watch(formData, (val) => { model.value = JSON.stringify(val, null, 2); }, { deep: true });
</script>

<style scoped lang="scss">
.component-dynamic {
  display: flex;
  flex-direction: row;
  gap: 0 30px;

  form {
    display: flex;
    flex-direction: column;
    gap: 15px 0;
    width: 350px;
  }
}
</style>
