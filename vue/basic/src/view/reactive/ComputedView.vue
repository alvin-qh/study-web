<!-- 演示计算变量
- Vue 的每个计算变量对应一个代理函数, 计算变量的值即该代理函数的返回值;
- 计算变量对应函数的内部应该依赖一个响应式变量, 当响应式变量的值发生变化时, 会调用代理函数重新计算计算变量的值;
- 如果计算变量不依赖于响应式变量, 则其值一旦确定, 不再发生变化;

计算变量的使用非常类似于通过 `ref` 函数定义响应式变量:
- 在模板中可以直接使用计算变量;
- 在 JS 中需要通过计算变量的 `value` 属性访问其值;
-->
<template>
  <div class="reactive">
    <!--将计算变量作为文本, 当计算变量值改变后, 文本元素值随之变化-->
    <div class="clock">
      <span>{{ computedNow }}</span>
    </div>

    <!--测试当响应式变量变化时, 计算变量随之变化-->
    <div class="name">
      <div class="name-input">
        <!--将文本输入框绑定到一个响应式变量上-->
        <input v-model="fullName" type="text">
      </div>
      <div class="name-display">
        <!--当 `fullName` 变量变化后, `computedName` 计算变量的值随之变化-->
        <div>
          <span>{{ computedName.firstName }}</span>
        </div>
        <div>
          <span>{{ computedName.lastName }}</span>
        </div>
      </div>
    </div>

    <!--测试计算变量的写入
    一般情况下, 计算变量都是只读的, 应该改变的是其依赖的响应式变量值, 但在某些特殊情况下,
    也允许为计算变量设置值, 需要为计算变量设置 `set` 函数
    -->
    <div class="name">
      <div class="name-input">
        <!--当输入框的值发生变化时, 调用 `onFullNameInput` 函数设置计算变量的值-->
        <input type="text" @input="onFullNameInput">
      </div>
      <div class="name-display">
        <!--当 `fullName` 变量变化后, `computedName` 计算变量的值随之变化-->
        <div>
          <span>{{ firstName }}</span>
        </div>
        <div>
          <span>{{ lastName }}</span>
        </div>
      </div>
    </div>

    <!--测试复杂类型计算变量-->
    <div class="letters">
      <div>
        <!--将输入框内容存储到指定的响应式变量中-->
        <input
          type="text"
          placeholder="Press some words"
          @input="words = ($event.target as HTMLInputElement).value"
        >
      </div>
      <ul>
        <!--遍历计算变量 `letters` 的值, `letters` 计算变量的值为一个数组-->
        <li v-for="(letter, n) in letters" :key="n">
          <div>{{ `${n}`.padStart(2, '0') }}</div>
          <div>{{ letter }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

import { formatDate } from '@/lib/time';

// 定义一个响应式变量, 表示当前时间
const now = ref<Date>(new Date());

// 定时将响应式变量 `now` 的值更新为当前时间
setInterval(() => { now.value = new Date(); }, 500);

// 定义计算变量, 其值为对 `now` 变量的值进行计算的结果
// 当 `now` 变量的值发生变化后, `computedNow` 的值会通过函数计算的结果进行相应变化
const computedNow = computed<string>(() => formatDate(now.value));

// 定义对象类型
interface NameObj {
  firstName: string
  lastName: string
}

// 定义一个响应式变量, 该变量和文本输入框绑定
const fullName = ref<string>('FirstName LastName');

// 定义一个计算变量, 当 `fullName` 变量值变化后, 会重新计算该变量值
const computedName = computed<NameObj>(() => {
  const names = fullName.value.split(' ', 2);
  return {
    firstName: names[0],
    lastName: names[1]
  };
});

// 定义两个响应式变量
const firstName = ref<string>('');
const lastName = ref<string>('');

// 定义一个可读写的计算变量
const computedFullName = computed<string>({
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
  computedFullName.value = (evt.target as HTMLInputElement).value;
};

// 定义一个响应式变量用于接收输入框内容
const words = ref<string>('');

// 将响应式变量的内容计算为字符数组
const letters = computed<string[]>(() => [...words.value]);
</script>

<style scoped lang="scss">
.reactive {
  display: flex;
  flex-direction: column;
  gap: 20px 0;

  .clock {
    width: fit-content;
    padding: 10px 8px;
    background-color: #55555575;
  }

  .name {
    .name-input, .name-display {
      padding: 5px 0;
    }

    .name-input {
      input[type=text] {
        width: 10em;
        padding: 5px 3px;
      }
    }

    .name-display {
      display: flex;
      flex-direction: row;
      gap: 0 5px;

      &>div {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0 5px;

        span {
          display: block;
          width: 10em;
          background-color: #6464647c;
          padding: 5px 10px;
          font-size: small;
          height: 1.5em;
        }
      }
    }
  }

  .letters {
    display: flex;
    flex-direction: column;
    gap: 10px 0;

    input[type=text] {
      width: 20em;
      padding: 5px 3px;
    }

    ul {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 0 5px;
      list-style: none;
      font-size: small;
      margin: 0;
      padding: 0;

      li {
        display: flex;
        flex-direction: row;
        align-items: center;

        &>div {
          padding: 8px;
          background-color: #53535367;

          &:first-child {
            text-align: center;
            width: 1.2em;
            background-color: #9c9c9c67;
          }
        }
      }
    }
  }
}
</style>
