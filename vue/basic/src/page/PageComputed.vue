<!-- 演示计算变量
- Vue 的每个计算变量对应一个代理函数, 计算变量的值即该代理函数的返回值;
- 计算变量对应函数的内部应该依赖一个响应式变量, 当响应式变量的值发生变化时, 会调用代理函数重新计算计算变量的值;
- 如果计算变量不依赖于响应式变量, 则其值一旦确定, 不再发生变化;

计算变量的使用非常类似于通过 `ref` 函数定义响应式变量:
- 在模板中可以直接使用计算变量;
- 在 JS 中需要通过计算变量的 `value` 属性访问其值;
-->
<template>
  <div class="template">
    <div class="timer">
      <!--将计算变量作为文本, 当计算变量值改变后, 文本元素值随之变化-->
      <span>{{ computedNow }}</span>
    </div>

    <hr>

    <!--测试当响应式变量变化时, 计算变量随之变化-->
    <div class="name">
      <div class="name-input">
        Press full name:
        <!--将文本输入框绑定到一个响应式变量上-->
        <input v-model="refFullName" type="text" class="full-name">
      </div>
      <div class="name-display">
        <!--当 `refFullName` 变量变化后, `roNameObj` 计算变量的值随之变化-->
        <div>FirstName: </div>
        <div>
          <span>{{ roNameObj.firstName }}</span>
        </div>
        <div>LastName: </div>
        <div>
          <span>{{ roNameObj.lastName }}</span>
        </div>
      </div>
    </div>

    <hr>

    <!--测试计算变量的写入
    一般情况下, 计算变量都是只读的, 应该改变的是其依赖的响应式变量值, 但在某些特殊情况下, 也允许为计算变量设置值, 需要为计算变量设置 `set` 函数
    -->
    <div class="name">
      <div class="name-input">
        Press full name:
        <!--当输入框的值发生变化时, 调用 `onFullNameInput` 函数设置计算变量的值-->
        <input type="text" class="full-name" @input="onFullNameInput">
      </div>
      <div class="name-display">
        <!--当 `watchFullName` 变量被设置后, 其 `set` 方法会同时改变 `firstName` 和 `lastName` 的值-->
        <div>FirstName: </div>
        <div>
          <span>{{ firstName }}</span>
        </div>
        <div>LastName: </div>
        <div>
          <span>{{ lastName }}</span>
        </div>
      </div>
    </div>

    <hr>

    <!--测试复杂类型计算变量-->
    <div class="letters">
      <div>
        Press some words:
        <!--将输入框内容存储到指定的响应式变量中-->
        <input type="text" @input="words = ($event.target as HTMLInputElement).value">
      </div>
      <ul>
        <!--遍历计算变量 `letters` 的值, `letters` 计算变量的值为一个数组-->
        <li v-for="(letter, n) in letters" :key="n">
          <span>{{ `${n}`.padStart(2, '0') }}.</span>
          <span>{{ letter }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

import { formatDate } from '@/lib/time';

// 定义一个响应式变量, 表示当前时间
const timer = ref<Date>(new Date());

// 定义计算变量, 其值为对 `timer` 变量的值进行计算的结果
// 当 `timer` 变量的值发生变化后, `computedNow` 的值会通过函数计算的结果进行相应变化
const computedNow = computed<string>(() => formatDate(timer.value));

// 定时将响应式变量 `timer` 的值更新为当前时间
setInterval(() => { timer.value = new Date(); }, 500);


// 定义一个响应式变量, 该变量和文本输入框绑定
const refFullName = ref<string>('');

// 定义一个计算变量, 当 `refFullName` 变量值变化后, 会重新计算该变量值
const roNameObj = computed<{ firstName: string, lastName: string }>(() => {
  const names = refFullName.value.split(' ', 2);
  return {
    firstName: names[0],
    lastName: names[1]
  };
});


// 定义两个响应式变量
const firstName = ref<string>('');
const lastName = ref<string>('');

// 定义一个可读写的计算变量
const watchFullName = computed<string>({
  // 定义计算变量的读函数
  get() {
    const fn = `${firstName.value || ''} ${lastName.value || ''}`.trim();
    if (fn.trim() === '') {
      return '';
    }
    return fn;
  },
  // 定义计算变量的写函数
  set(val: string) {
    console.log(val);
    [firstName.value, lastName.value] = val.split(' ', 2);
  }
});

// 用于处理文本框输入变化事件的函数, 函数内用输入框的值改变了计算变量的值
const onFullNameInput = (evt: Event): void => {
  // 为计算变量赋值需要通过其 `value` 属性
  watchFullName.value = (evt.target as HTMLInputElement).value;
};


// 定义一个响应式变量用于接收输入框内容
const words = ref<string>('');

// 将响应式变量的内容计算为字符数组
const letters = computed<string[]>(() => [...words.value]);
</script>

<style scoped lang="scss">
.template {
  display: flex;
  flex-direction: column;
  gap: 20px 0;

  input[type=text] {
    width: 10em;
    padding: 5px 3px;
  }

  .name {
    .name-input,
    .name-display {
      padding: 5px 0;
    }

    .name-display {
      display: grid;
      grid-template-columns: auto 10em auto 1fr;
      grid-template-rows: 1fr;
      gap: 10px;
    }
  }

  .letters {
    li {
      font-family: 'Courier New', Courier, monospace;
      font-weight: 600;
    }
  }
}
</style>
