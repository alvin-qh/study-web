<!--响应式变量

通过 `ref` 函数可以创建一个响应式变量
1. 该响应式对象是一个 `RefImpl` 类型对象, 要访问原始数据, 需通过其 `value` 属性
2. 该响应式对象可以为简单对象 (`number`, `string`, `boolean`), 也可以为复杂对象 (`object`, `array`),
   复杂对象在 `RefImpl` 内部通过 Proxy 表示;
3. 该响应对象可以赋值到另一个变量, 赋值后的变量仍具备响应式能力;
-->
<template>
  <div class="reactive">
    <!--将响应式变量作为文本元素, 当变量值改变后, 文本元素值随之变化-->
    <div class="clock">
      <span>{{ now }}</span>
    </div>

    <!--文本框绑定 `count` 变量, 通过按钮改变 `count` 变量-->
    <div class="counter">
      <input type="text" readonly :value="count">
      <button @click="count++">
        Click
      </button>
    </div>

    <!--对于复杂类型的响应式变量, 可以使用其某个变量, 某个数组或某个数组元素值, 即整个复杂对象的各个部分都支持响应式-->
    <div class="ref-obj">
      <ul :class="obj.className">
        <li v-for="item in obj.items" :key="item">
          {{ item }}
        </li>
      </ul>
      <span :class="obj.className">
        {{ obj.items[obj.items.length - 1] }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { objectMap } from '@/lib/execute';
import { formatDate } from '@/lib/time';

// 定义一个响应式变量, 并通过其 `value` 属性改变值, 同时模板对应元素的值也会跟随改变
// 注意, 通过 `ref` 函数定义的响应式变量, 在 JS 中访问时, 要通过 `value` 属性, 在
// 模板中则可以直接使用
const now = ref<string>(formatDate());

// 定时器, 定时根据时间改变 `now` 响应对象
setInterval(() => { now.value = formatDate(); }, 500);

// 定义一个响应式变量
const count = ref<number>(0);

// 定义响应式对象类型
interface RefObj {
  className: string
  items: number[]
}

// 可以定义复杂对象处理响应式
const obj = ref<RefObj>({
  className: '',
  items: []
});

// 记录上一次的时间信息
const record = {
  mins: 0,
  seconds: 0
};

// 定时器, 定时根据时间改变 `refObj` 响应对象
setInterval(() => {
  // 获取当前时间的分钟和秒
  const [mins, secs] = objectMap<[number, number], Date>(new Date(), (val) => [
    val.getMinutes(),
    val.getSeconds()
  ]);

  // 如果分钟数发生变化, 则修改 `refObj` 对象的 `className` 属性, 注意需要通过 `refObj.value` 属性进行修改
  if (record.mins !== mins) {
    record.mins = mins;
    obj.value.className = (mins % 2 === 0) ? 'red' : 'green';
  }

  // 如果秒数发生变化, 则修改 `refObj` 对象的 `items` 属性, 注意需要通过 `refObj.value` 属性进行修改
  if (record.seconds !== secs) {
    if (secs < record.seconds) {
      obj.value.items = [];
    }

    record.seconds = secs;
    obj.value.items.push(secs);
  }
}, 500);
</script>

<style lang="scss" scoped>
.reactive {
  display: flex;
  flex-direction: column;
  gap: 20px 0;

  .clock {
    padding: 8px 10px;
    background-color: #5858586b;
    width: fit-content;
  }

  .counter {
    input[type=text], button {
      padding: 10px 8px;
    }

    input[type=text] {
      width: 8em;
    }
  }

  .ref-obj {
    display: flex;
    flex-direction: column;

    .red {
      color: #f00;
    }

    .green {
      color: #0f0;
    }

    &>ul {
      list-style: none;
      display: flex;
      flex-direction: row;
      padding: 0;
      border-collapse: collapse;

      li {
        border: 1px solid #6e6d6d88;
        width: 2em;
        text-align: center;
        padding: 5px 2px;
      }
    }

    &>span {
      border: 1px solid #6e6d6d88;
      align-self: flex-start;
      width: 2em;
      text-align: center;
      padding: 5px 2px;
    }
  }
}
</style>
