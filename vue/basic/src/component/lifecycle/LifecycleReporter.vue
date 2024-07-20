<!-- 演示组件的生命周期钩子函数调用

一个 Vue 组件从挂载到父组件中进行渲染, 中间会因为其所依赖的响应式变量变化而更新, 直到组件从父组件中卸载消失, 每一个环节,
Vue 框架都提供了响应的钩子函数进行回调

本例中的组件响应了几乎所有 Vue 生命周期钩子回调, 并且在组件内部提供了响应式变量变化过程以触发组件 `Update` 钩子,
每一次钩子函数的调用, 都会通过 `lifecycle` 事件通知到父组件
-->

<template>
  <!--用于测试 Vue 生命周期钩子调用情况的组件-->
  <div class="comp-lifecycle" ref="elem">
    Lifecycle Component, {{ now }}
  </div>
</template>

<script setup lang="ts">
import {
  onActivated,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onDeactivated,
  onMounted,
  onRenderTracked,
  onRenderTriggered,
  onUnmounted,
  onUpdated,
  ref,
} from 'vue';

import { formatDate } from '@/lib/time';
import { Lifecycle, LifecycleEvent } from '@/types/event';

// 记录钩子函数调用情况的上下文对象
const context = {
  // 钩子函数被调用的次序
  index: 0
};

// 定义事件
const emit = defineEmits<{
  // 定义 `lifecycle` 事件, 表示组件调用了一次 Vue 生命周期钩子函数,
  // 事件参数为 `LifecycleEvent` 类型对象
  lifecycle: [e: LifecycleEvent]
}>();

// 定义响应式变量, 引用 `div` 元素
const elem = ref<HTMLDivElement>();

// 定义响应式变量, 保存当前时间
const now = ref<string>(formatDate());

// 一秒钟后, 修改 `now` 响应式变量, 该操作会导致组件因依赖的响应式变量变更而重新渲染
setTimeout(() => now.value = formatDate(), 1000);

// 发出一个事件, 父组件会接收到事件调用并触发事件响应
function emitLifecycleEvent(lifecycle: Lifecycle) {
  emit('lifecycle', {
    index: context.index++,
    lifecycle: lifecycle,
  });
}

// 响应 Vue 生命周期的各个钩子函数, 并发出事件调用
onBeforeMount(() => { emitLifecycleEvent('BeforeMount'); });
onMounted(() => { emitLifecycleEvent('Mounted'); });
onBeforeUpdate(() => { emitLifecycleEvent('BeforeUpdate'); });
onUpdated(() => { emitLifecycleEvent('Updated'); });
onBeforeUnmount(() => { emitLifecycleEvent('BeforeUnmount'); });
onUnmounted(() => { emitLifecycleEvent('Unmounted'); });
onActivated(() => { emitLifecycleEvent('Activated'); });
onDeactivated(() => { emitLifecycleEvent('Deactivated'); });
onRenderTracked(() => { emitLifecycleEvent('RenderTracked'); });
onRenderTriggered(() => { emitLifecycleEvent('RenderTriggered'); });
</script>

<style scoped lang="scss">
.comp-lifecycle {
  border: 1px solid #676767;
  padding: 20px;
  background: #a3a3a320;
  text-align: center;
  font-weight: 600;
}
</style>
