<!--定义复选框组件-->
<template>
  <div class="form-field">
    <div class="label">
      <!--复选框文本标签-->
      <div>{{ field.label }}</div>
      <div>
        <!--循环产生复选框组-->
        <label class="form-group" v-for="c in (field.choice || [])">
          <!--每个复选框组中包含一个复选框组件和一个文本标签, 所有的复选框都绑定到 `value` 变量-->
          <input type="checkbox" :name="field.label" :value="c" v-model="value">
          <div>{{ c }}</div>
        </label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FormField, FormFieldDataType } from './type';
import { onMounted } from 'vue';
import './form.scss';

// 定义组件属性, 传入复选框组件定义
const props = defineProps<{ field: FormField }>();

// 定义双向绑定数据, 接收复选框值并发送到父组件
const value = defineModel<FormFieldDataType>();

// 组件加载后, 将组件默认值传递给 `value` 变量
onMounted(() => {
  if (value.value) {
    return;
  }

  const field = props.field;

  if (Array.isArray(field.default)) {
    value.value = field.default as (string[] | number[]);
  } else if (field.default) {
    switch (typeof field.default) {
      case 'string':
        value.value = [field.default];
        break;
      case 'number':
        value.value = [field.default];
        break;
      default:
        value.value = [`${field.default}`]
    }
  } else {
    value.value = [];
  }
});
</script>
