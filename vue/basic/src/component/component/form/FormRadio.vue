<!-- 定义单选框组件 -->
<template>
  <div class="form-field">
    <div class="label">
      <!--复选框文本标签-->
      <div>{{ field.label }}</div>
      <div>
        <label v-for="c in (field.choice || [])" :key="c" class="form-group">
          <!--每个复选框组中包含一个单选框组件和一个文本标签, 所有的单选框都绑定到 `value` 变量-->
          <input
            v-model="value"
            type="radio"
            :name="field.label"
            :value="c"
          >
          <div>{{ c }}</div>
        </label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import './form.scss';

import { onMounted } from 'vue';

import { type FormField, type FormFieldDataType } from './type';

// 定义组件属性, 传入单选框框组件定义
const props = defineProps<{ field: FormField }>();

// 定义双向绑定数据, 接收单选框值并发送到父组件
const value = defineModel<FormFieldDataType>();

// 组件加载后, 将组件默认值传递给 `value` 变量
onMounted(() => {
  if (value.value) {
    return;
  }
  value.value = props.field.default as (string | number);
});
</script>
