<!--响应式变量

通过 `reactive` 函数可以创建一个响应式对象
1. 该响应式对象是一个 `Proxy` 类型对象, 即原始对象的代理;
2. 该响应式对象只能为复杂对象 (object, array);
3. 该响应对象不可以赋值到另一个变量, 赋值后会失去响应能力;
4. 对于复杂对象和复杂数组, 如果希望其深层次属性 (或元素) 都能具备响应能力, 则应使用 `reactive` 函数
-->
<template>
  <div class="reactive">
    <!--将响应式变量作为文本元素, 当变量值改变后, 文本元素值随之变化-->
    <div class="clock">
      <span>{{ nowObj.now }}</span>
    </div>

    <!--文本框绑定 `reactiveCount` 变量, 通过按钮改变 `reactiveCount` 变量-->
    <div class="counter">
      <input type="text" readonly :value="countObj.count">
      <button @click="countObj.count++">
        Click
      </button>
    </div>

    <!--对于复杂类型的响应式变量, 可以使用其某个变量, 某个数组或某个数组元素值, 即整个复杂对象的各个部分都支持响应式-->
    <div class="reactive-obj">
      <ul :class="reactiveObj.className">
        <li v-for="item in reactiveObj.items" :key="item">
          {{ item }}
        </li>
      </ul>
      <span :class="reactiveObj.className">{{ reactiveObj.items[reactiveObj.items.length - 1] }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

import { objectMap } from '@/lib/execute';
import { formatDate } from '@/lib/time';

// 定义一个响应式变量, 代理一个对象, 其中的 `count` 属性表示一个计数值
const countObj = reactive<{ count: number }>({ count: 0 });

// 定义一个响应式变量, 代理一个对象, 其中的 `now` 属性表示当前时间
// 返回的代理对象可以直接访问其属性, 这些属性已经具备响应能力
const nowObj = reactive<{ now: string }>({ now: formatDate() });

// 定时器, 定时根据时间改变 `reactiveNow` 响应对象的 `now` 属性值
setInterval(() => { nowObj.now = formatDate(); }, 500);

// 定义响应式对象类型
interface ReactiveObj {
  className: string
  items: number[]
}

// 代理一个复杂对象为响应式对象
const reactiveObj = reactive<ReactiveObj>({
  className: '',
  items: []
});

// 记录上一次的时间信息
const record = {
  mins: 0,
  seconds: 0
};

// 定时器, 定时根据时间改变 `obj` 响应对象
setInterval(() => {
  // 获取当前时间的分钟和秒
  const [mins, secs] = objectMap<[number, number], Date>(new Date(), (val) => [
    val.getMinutes(),
    val.getSeconds()
  ]);

  // 如果分钟数发生变化, 则修改 `reactiveObj.className` 属性
  if (record.mins !== mins) {
    record.mins = mins;
    reactiveObj.className = (mins % 2 === 0) ? 'red' : 'green';
  }

  // 如果秒数发生变化, 则修改 `reactiveObj.items` 属性
  if (record.seconds !== secs) {
    if (secs < record.seconds) {
      reactiveObj.items = [];
    }

    record.seconds = secs;
    reactiveObj.items.push(secs);
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

  .reactive-obj {
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
