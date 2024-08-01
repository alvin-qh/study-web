<!--动态组件-->
<template>
  <div class="component">
    <div>
      <textarea v-model="formDefinitionJson" />
    </div>
    <div>
      <!--使用动态组件, 可以根据传入的 `formDefinition` 定义, 动态渲染组件内容-->
      <DynamicForm v-model="formDataJson" :definition="formDefinition" />
    </div>
    <div>
      <!--显示 JSON 字符串-->
      <textarea v-model="formDataJson" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

import DynamicForm from '@/component/component/DynamicForm.vue';
import { type FormDefinition } from '@/component/component/form';

// 表单定义对象 JSON 字符串, 和 textarea 元素绑定
const formDefinitionJson = ref<string>(JSON.stringify({
  name: {
    label: 'Name',
    type: 'text'
  },
  age: {
    label: 'Age',
    type: 'number'
  },
  gender: {
    label: 'Gender',
    type: 'radio',
    choice: ['Male', 'Female'],
    default: 'Male'
  },
  hobby: {
    label: 'Hobby',
    type: 'checkbox',
    choice: ['Sing', 'Dance', 'Rap', 'Football'],
    default: ['Rap']
  },
  remark: {
    label: 'Remark',
    type: 'textarea'
  }
}, null, 2));

// 定义响应式变量, 用于存储表单定义对象
const formDefinition = computed<FormDefinition>(
  () => JSON.parse(formDefinitionJson.value)
);

// 定义响应式变量, 用于存储表单值 JSON 字符串
const formDataJson = ref<string>(JSON.stringify({
  name: 'Alvin',
  age: 22
}, null, 2));
</script>

<style lang="scss" scoped>
.component {
  display: flex;
  flex-direction: row;
  gap: 0 20px;
  padding: 10px 0;

  textarea {
    width: 23em;
    height: 18em;
    resize: none;
  }

  pre {
    font-size: large;
    margin: 0;
    color: #ceccccdf;
  }
}
</style>
