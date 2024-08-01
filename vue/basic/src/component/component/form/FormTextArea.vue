<!-- 定义文本域输入组件 -->
<template>
  <div class="form-field">
    <label class="label">
      <!--文本域组件标签-->
      <div>{{ field.label }}</div>
      <div>
        <!--文本域控件, 绑定 `value` 变量-->
        <textarea v-model="value" />
      </div>
    </label>
  </div>
</template>

<script setup lang="ts">
import './form.scss';

import { onMounted } from 'vue';

import { type FormField } from './type';

// 定义组件属性, 传入文本域组件定义
const props = defineProps<{ field: FormField }>();

// 定义双向绑定数据, 接收文本域控件值并发送到父组件
const value = defineModel<string>();

// 组件加载后, 将组件默认值传递给 `value` 变量
onMounted(() => {
  if (value.value) {
    return;
  }
  value.value = props.field.default as string;
});
</script>
