<!--为组件设置事件

通过 `defineEmits` 宏可以定义组件的事件, 父组件可以通过子组件定义的事件, 监听子组件对应事件发出的数据;

如果为组件定义了 `modelValue` 属性, 且为组件定义了 `update:modelValue` 事件, 则父组件可以通过 `v-model` 指令实现数据的双向绑定
-->
<template>
  <div class="component-event">
    <form>
      <div>
        <!--输入框, 绑定 `number1` 响应式变量-->
        <input v-model="number1" type="number" placeholder="0">
      </div>
      <div>
        <!--下拉选项框, 用于选择运算符, 绑定 `opt` 响应式变量-->
        <select v-model="opt">
          <option v-for="o in operators" :key="o">
            {{ o }}
          </option>
        </select>
      </div>
      <div>
        <!--输入框, 绑定 `number2` 响应式变量-->
        <input v-model="number2" type="number" placeholder="0">
      </div>
      <div>=</div>
      <div>
        <!--输入框, 绑定 `result` 变量, 用于显示计算结果-->
        <input type="number" readonly :value="result">
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';

import { type CalculateEvent, type ModelType, type Operator, operators } from './EventComp';

// 定义组件的属性, 其中的 `modelValue` 属性为 Vue 内置属性, 用于父组件的 `v-model` 指令
const props = withDefaults(
  defineProps<{
    number1?: number
    number2?: number
    operator?: Operator
    modelValue?: ModelType
  }>(),
  {
    number1: 0,
    number2: 0,
    operator: '+'
  }
);

// 定义一组响应式变量, 接收组件属性值的变化, 并绑定到 `number1` 和 `number2` 文本框
const number1 = ref<number>(props.modelValue ? props.modelValue.number1 : props.number1);
const number2 = ref<number>(props.modelValue ? props.modelValue.number2 : props.number2);
const opt = ref<Operator>(props.modelValue ? props.modelValue.operator : props.operator);

// 监控组件属性的变化, 根据最新属性值情况更改响应式变量的值 (令响应式变量和组件属性值同步)
watch(props, (val) => {
  number1.value = val.modelValue ? val.modelValue.number1 : val.number1;
  number2.value = val.modelValue ? val.modelValue.number2 : val.number2;
  opt.value = val.modelValue ? val.modelValue.operator : val.operator;
});

// 根据响应式变量的当前值, 计算运算结果
const calculate = (): number => {
  const n1 = number1.value;
  const n2 = number2.value;
  const op = opt.value;

  let result = 0;

  switch (op) {
  case '*':
    result = n1 * n2;
    break;
  case '+':
    result = n1 + n2;
    break;
  case '-':
    result = n1 - n2;
    break;
  case '/':
    result = n1 / n2;
    break;
  default:
    throw new Error('invalid operator');
  }
  return result;
};

// 定义计算变量, 表示计算结果, 并绑定到 `result` 文本框上
const result = computed(() => calculate());

// 定义两个事件:
// 当 `result` 计算变量发生变化后, `change` 事件将最新的计算参数和结果发出;
// `update:modelValue` 事件将 `` 属性更新后发出, 以响应 `v-model` 指令;
const emit = defineEmits<{
  change: [e: CalculateEvent]
  'update:modelValue': [model: ModelType]
}>();

const emitEvents = (value: number): void => {
  // 发出 `change` 事件, 向事件监听者报告最新的计算结果
  emit('change', {
    number1: number1.value,
    number2: number2.value,
    operator: opt.value,
    result: value
  });

  if (props.modelValue) {
    // 发出 `update:modelValue` 事件, 向 `v-model` 指令方报告最新的计算结果,
    //
    // 注意, 在 `v-model` 指令下, ``update:modelValue` 发送的数据必须是 `modelValue` 属性值,
    // 否则父组件无法实现"双向绑定"
    emit('update:modelValue', {
      number1: number1.value,
      number2: number2.value,
      operator: opt.value,
      result: value
    });
  }
};

// 监听 `result` 计算变量的变化, 当计算变量变化后, 发出事件
// `immediate` 选项表示当组件加载完毕后, 发送一次事件, 以保证 `result` 值在文本框未发生修改时, 也能通知到父组件一次
watch(result, (val) => { emitEvents(val); }, { immediate: true });
</script>

<style scoped lang="scss">
.component-event {
  &>form {
    display: flex;
    flex-direction: row;
    gap: 0 5px;

    input, select {
      width: 3em;
      padding: 5px 3px;
      text-align: center;

      -moz-appearance: textfield;
      appearance: textfield;

      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      font-family: 'Courier New', Courier, monospace;

      option {
        font-size: 18px;
      }
    }
  }
}
</style>
