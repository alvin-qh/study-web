<!--使用 `defineModel` 宏为组件定义 `v-model` 变量-->
<template>
  <!--定义键盘输入区
  1. 通过 `tabindex` 开启 DIV 元素的输入焦点
  2. 通过 `@keydown` 事件捕获键盘按键
  3. 通过 `@focus` / `@blur` 事件捕获 DIV 获得焦点和失去焦点, 从而改变元素样式
  -->
  <div
    tabindex="0"
    :class="{ 'component-v-model': true, focus: focus }"
    @focus="focus = true"
    @blur="focus = false"
    @keydown.prevent="handleKeyDown"
  >
    <!--标点符号区-->
    <div class="symbols">
      <div v-for="s in symbols" :key="s" :class="{ selected: s === letter?.key }">
        {{ s }}
      </div>
      <div :class="{ selected: letter?.key === 'Backspace' }">
        ⬅
      </div>
      <div :class="{ selected: letter?.key === '\n' }">
        ↵
      </div>
    </div>
    <!--数字区-->
    <div class="numbers">
      <div v-for="n in 10" :key="n" :class="{ selected: `${n - 1}` === letter?.key }">
        {{ n - 1 }}
      </div>
    </div>
    <!--小写字母区-->
    <div class="letters">
      <div v-for="l in letters" :key="l" :class="{ selected: l.toLowerCase() === letter?.key }">
        {{ l.toLowerCase() }}
      </div>
    </div>
    <!--大写字母区-->
    <div class="letters">
      <div v-for="l in letters" :key="l" :class="{ selected: l === letter?.key }">
        {{ l }}
      </div>
    </div>
    <!--空格键区-->
    <div class="whitespace">
      <div :class="{ selected: letter?.key === ' ' }">
        {{ '________' }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// 生成 26 个字母组成的数组
const letters = (() => {
  const ls = [];
  for (let c = 'A'.charCodeAt(0); c <= 'Z'.charCodeAt(0); c++) {
    ls.push(String.fromCharCode(c));
  }
  return ls;
})();

// 标点符号集合
const symbols = '`,<.>/?;:\'"~-_=+[{}]\\|';

// 定义 `v-model` 变量
// 注意, 这里之所以定义为对象, 是为了保证每次传递给父组件的值都不同, 否则父组件的 `watch` 将不起作用
// 如果使用 string 类型, 当父组件接收到则重复按键产生的值后, 会认为接收到的值未发生变化
const letter = defineModel<{ key: string }>({ required: true });

// 处理按键按下事件
const handleKeyDown = (e: Event): void => {
  const ke = e as KeyboardEvent;
  if (letter.value) {
    if (ke.key.length === 1 || ke.key === 'Backspace') {
      letter.value = { key: ke.key };
    } else if (ke.key === 'Enter') {
      letter.value = { key: '\n' };
    }
  }
};

// 定义响应式变量, 保存 DIV 是否获取输入焦点
const focus = ref<boolean>(false);
</script>

<style scoped lang="scss">
.component-v-model {
  display: flex;
  flex-direction: column;
  gap: 10px 0;
  outline: none;
  padding: 10px 20px;

  &.focus {
    background-color: #3636364f;
    box-shadow: #a6a6a623 0 0 10px 0;
  }

  .symbols,
  .letters,
  .numbers,
  .whitespace {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0 5px;
    justify-content: center;

    &>div {
      border: 1px solid #85858575;
      width: 2em;
      height: 2em;
      display: flex;
      align-items: center;
      justify-content: center;

      &.selected {
        background-color: #83838393;
      }
    }
  }

  .whitespace {
    &>div {
      width: 10em;
    }
  }
}
</style>
