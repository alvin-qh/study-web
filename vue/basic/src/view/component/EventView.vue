<!--处理组件事件-->
<template>
  <div class="component">
    <div>
      <!--使用组件, 并通过 `change` 事件接收子组件发出的计算结果-->
      <EventComp
        :number1="number1"
        :number2="number2"
        :opt="opt"
        @change="handleResultChange"
      />
      <div class="result">
        {{ `${number1} ${opt} ${number2} = ${result}` }}
      </div>
    </div>

    <div>
      <!--使用组件, 通过子组件的 `modelValue` 属性和 `update:modelValue` 事件实现 `v-model` 指令-->
      <EventComp v-model="calModel" />
      <div class="result">
        {{ `${calModel.number1} ${calModel.operator} ${calModel.number2} = ${calModel.result || 0}` }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { type CalculateEvent, EventComp, type ModelType, type Operator } from '@/component/component/EventComp';

// 定义用于接收组件事件的响应式变量, 并作为 `EventComp` 组件的属性
const number1 = ref<number>(1);
const number2 = ref<number>(2);
const opt = ref<Operator>('+');
const result = ref<number>(0);

// 处理 `EventComp` 组件的 `change` 事件
const handleResultChange = (e: CalculateEvent): void => {
  number1.value = e.number1;
  number2.value = e.number2;
  opt.value = e.operator;

  if (e.result !== undefined) {
    result.value = e.result;
  }
};

// 定义响应式对象, 作为 `EventComp` 组件的 `modelValue` 属性值和 `update:modelValue` 事件参数值,
// 从而实现 `v-model` 指令
const calModel = ref<ModelType>({
  number1: 1,
  number2: 2,
  operator: '+'
});
</script>

<style lang="scss" scoped>
.component {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 30px 0;

  &>div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px 0;

    .result {
      font-family: 'Courier New', Courier, monospace;
      background-color: #79797977;
      padding: 5px 8px;
    }
  }
}
</style>
