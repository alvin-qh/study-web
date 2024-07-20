<!-- 响应式变量

通过 `ref` 函数可以创建一个响应式变量
1. 该响应式对象是一个 `RefImpl` 类型对象, 要访问原始数据, 需通过其 `value` 属性
2. 该响应式对象可以为简单对象 (number, string, boolean), 也可以为复杂对象 (object, array), 复杂对象在 `RefImpl` 内部通过 Proxy 表示;
3. 该响应对象可以赋值到另一个变量, 赋值后的变量仍具备响应式能力;

通过 `reactive` 函数可以创建一个响应式对象
1. 该响应式对象是一个 `Proxy` 类型对象, 即原始对象的代理;
2. 该响应式对象只能为复杂对象 (object, array);
3. 该响应对象不可以赋值到另一个变量, 赋值后会失去响应能力;
4. 对于复杂对象和复杂数组, 如果希望其深层次属性 (或元素) 都能具备响应能力, 则应使用 `reactive` 函数
-->
<template>
  <div class="reactive">
    <div>
      <!--文本框绑定 `refCount` 变量, 通过按钮改变 `refCount` 变量-->
      <input type="text" readonly :value="refCount">
      <button @click="refCount++">Click</button>
    </div>

    <hr>

    <div>
      <!--将响应式变量作为文本元素, 当变量值改变后, 文本元素值随之变化-->
      <span>{{ refNow }}</span>
    </div>

    <hr>

    <div class="obj">
      <!--对于复杂类型的响应式变量, 可以使用其某个变量, 某个数组或某个数组元素值, 即整个复杂对象的各个部分都支持响应式-->
      <ul :class="refObj.className">
        <li v-for="item in refObj.items" :key="item">{{ item }}</li>
      </ul>
      <span :class="refObj.className">{{ refObj.items[refObj.items.length - 1] }}</span>
    </div>

    <hr class="double">

    <div>
      <!--文本框绑定 `reactiveCount` 变量, 通过按钮改变 `reactiveCount` 变量-->
      <input type="text" readonly :value="reactiveCount.count">
      <button @click="reactiveCount.count++">Click</button>
    </div>

    <hr>

    <div>
      <!--将响应式变量作为文本元素, 当变量值改变后, 文本元素值随之变化-->
      <span>{{ reactiveNow.now }}</span>
    </div>

    <hr>

    <div class="obj">
      <!--对于复杂类型的响应式变量, 可以使用其某个变量, 某个数组或某个数组元素值, 即整个复杂对象的各个部分都支持响应式-->
      <ul :class="reactiveObj.className">
        <li v-for="item in reactiveObj.items" :key="item">{{ item }}</li>
      </ul>
      <span :class="reactiveObj.className">{{ reactiveObj.items[reactiveObj.items.length - 1] }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';

import { formatDate } from '@/lib/time';

// 定义一个响应式变量
const refCount = ref<number>(0);

// 定义一个响应式变量, 并通过其 `value` 属性改变值, 同时模板对应元素的值也会跟随改变
// 注意, 通过 `ref` 函数定义的响应式变量, 在 JS 中访问时, 要通过 `value` 属性, 在
// 模板中则可以直接使用
const refNow = ref<string>(formatDate());

// 定时器, 定时根据时间改变 `refNow` 响应对象
setInterval(() => { refNow.value = formatDate(); }, 500);

// 可以定义复杂对象处理响应式
const refObj = ref<{ className: string; items: number[] }>({
  className: '',
  items: []
});

// 记录上一次的时间信息
let refLastDate = {
  mins: 0,
  seconds: 0
};

// 定时器, 定时根据时间改变 `refObj` 响应对象
setInterval(() => {
  const now = new Date();
  const mins = now.getMinutes();
  const secs = now.getSeconds();

  // 如果分钟数发生变化, 则修改 `refObj` 对象的 `className` 属性, 注意需要通过 `refObj.value` 属性进行修改
  if (refLastDate.mins !== mins) {
    refLastDate.mins = mins;
    refObj.value.className = (mins % 2 === 0) ? 'red' : 'green';
  }

  // 如果秒数发生变化, 则修改 `refObj` 对象的 `items` 属性, 注意需要通过 `refObj.value` 属性进行修改
  if (refLastDate.seconds !== secs) {
    if (secs < refLastDate.seconds) {
      refObj.value.items = [];
    }

    refLastDate.seconds = secs;
    refObj.value.items.push(secs);
  }
}, 500);


// 定义一个响应式变量, 代理一个对象, 其中的 `count` 属性表示一个计数值
const reactiveCount = reactive<{ count: number }>({ count: 0 });

// 定义一个响应式变量, 代理一个对象, 其中的 `now` 属性表示当前时间
// 返回的代理对象可以直接访问其属性, 这些属性已经具备响应能力
const reactiveNow = reactive<{ now: string }>({ now: formatDate() });

// 定时器, 定时根据时间改变 `reactiveNow` 响应对象的 `now` 属性值
setInterval(() => { reactiveNow.now = formatDate(); }, 500);

// 代理一个复杂对象为响应式对象
const reactiveObj = reactive<{ className: string; items: number[] }>({
  className: '',
  items: []
});

// 记录上一次的时间信息
let reactiveLastDate = {
  mins: 0,
  seconds: 0
};

// 定时器, 定时根据时间改变 `obj` 响应对象
setInterval(() => {
  const now = new Date();
  const mins = now.getMinutes();
  const secs = now.getSeconds();

  // 如果分钟数发生变化, 则修改 `reactiveObj.className` 属性
  if (reactiveLastDate.mins !== mins) {
    reactiveLastDate.mins = mins;
    reactiveObj.className = (mins % 2 === 0) ? 'red' : 'green';
  }

  // 如果秒数发生变化, 则修改 `reactiveObj.items` 属性
  if (reactiveLastDate.seconds !== secs) {
    if (secs < reactiveLastDate.seconds) {
      reactiveObj.items = [];
    }

    reactiveLastDate.seconds = secs;
    reactiveObj.items.push(secs);
  }
}, 500);
</script>

<style scoped lang="scss">
.reactive {
  display: flex;
  flex-direction: column;
  gap: 20px 0;

  &>div {
    display: flex;
    flex-direction: row;
    gap: 0 10px;
  }

  input[type=text],
  button {
    padding: 10px 8px;
  }

  .obj {
    display: flex;
    flex-direction: column;

    .red {
      color: #f00;
    }

    .green {
      color: #0f0;
    }

    >ul {
      list-style: none;
      display: flex;
      flex-direction: row;
      padding: 0;
      border-collapse: collapse;

      li {
        border: 1px solid #a09f9f;
        width: 2em;
        text-align: center;
        padding: 5px 2px;
      }
    }

    >span {
      border: 1px solid #a09f9f;
      align-self: flex-start;
      width: 2em;
      text-align: center;
      padding: 5px 2px;
    }
  }
}
</style>
