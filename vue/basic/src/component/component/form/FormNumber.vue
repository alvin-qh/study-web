<!-- 定义数字输入框组件 -->
<template>
  <div class="form-field">
    <label class="label">
      <!--输入框文本标签-->
      <div>{{ field.label }}</div>
      <div>
        <!--输入框控件, 绑定 `value` 变量-->
        <input type="number" v-model="value">
      </div>
    </label>
  </div>
</template>

<script setup lang="ts">
import { FormField, FormFieldDataType } from './type';
import { onMounted } from 'vue';
import './form.scss';

// 定义组件属性, 传入输入框组件定义
const props = defineProps<{ field: FormField }>();

// 定义双向绑定数据, 接收输入框值并发送到父组件
const value = defineModel<FormFieldDataType>();

// 组件加载后, 将组件默认值传递给 `value` 变量
onMounted(() => {
  if (value.value) {
    return;
  }
  value.value = props.field.default as number
});
</script>
