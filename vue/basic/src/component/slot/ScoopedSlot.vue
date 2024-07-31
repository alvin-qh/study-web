<!--作用域插槽

如果需要将子组件的指定值通过插槽传递给父组件 (以便父组件获取更多的信息来设置插槽内容), 可以使用作用域插槽;

定义子组件时, 可以为子组件插槽定义一个属性, 并绑定一个子组件的内部变量 (例如一个响应式变量), 父组件可以在引用该子组件时,
通过 `v-slot` 指令获取到子组件为插槽定义的属性, 从而访问子组件内部定义的变量值;

作用域插槽相当于一个从子组件到父组件, 逆向传递的属性 (Properties), 只是仅限于子组件包含插槽的情景
-->
<template>
  <div class="scooped-slot">
    <!--在匿名插槽上定义 `date` 属性, 绑定 `date` 响应变量值-->
    <div>
      <slot :date="date">
        {{ date }}
      </slot>
    </div>

    <!--在命名插槽上定义 `ticktock` 属性, 绑定 `ticktock` 响应变量值-->
    <div v-if="$slots.extra">
      <slot name="extra" :ticktock="ticktock" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

import { formatDate } from '@/lib/time';

// 定义响应式变量并定时改变其值
const now = ref<Date>(new Date());
setInterval(() => { now.value = new Date(); }, 500);

// 根据 now 响应式变量计算 date 属性值
const date = computed<string>(() => formatDate(now.value));

// 根据 now 响应式变量计算 ticktock 属性值
const ticktock = computed<boolean>(() => now.value.getSeconds() % 2 === 0);
</script>

<style scoped lang="scss">
.scooped-slot {
  background-color: #6f707029;
  color: #dddfdfcc;
  padding: 10px 20px;
  width: fit-content;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px 0;
}
</style>
