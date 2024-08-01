<!-- 演示组件的生命周期钩子函数调用

本例通过加载 `CompLifecycle` 组件, 并接收其 `lifecycle` 事件来接收该组件所响应的 Vue 生命周期钩子回调情况,
以此演示 Vue 生命周期钩子函数的回调过程
-->
<template>
  <div class="component">
    <div class="control">
      <div>
        <!--复选框, 用于改变 `showComponent` 响应式变量-->
        <input v-model="showComponent" type="checkbox"> Mount
        <!--复选框, 用于改变 `keepAlive` 响应式变量-->
        <input v-model="keepAlive" type="checkbox"> KeepAlive
      </div>
      <div>
        <!--当 `keepAlive` 响应式变量为 `true`, `CompLifecycle` 组件通过 `KeepAlive` 组件缓存-->
        <KeepAlive v-if="keepAlive" :max="1">
          <LifecycleRecorder v-if="showComponent" @lifecycle="onLifecycleChanged" />
        </KeepAlive>
        <!--当 `keepAlive` 响应式变量为 `false`, `CompLifecycle` 组件直接被父组件加载渲染-->
        <div v-else>
          <LifecycleRecorder v-if="showComponent" @lifecycle="onLifecycleChanged" />
        </div>
      </div>
    </div>

    <div class="status">
      <!--渲染一个列表, 包括所有 Vue 生命周期钩子调用-->
      <div
        v-for="l in allLifecycle"
        :key="l"
        :class="{ node: true, worked: status[l]?.called || false }"
      >
        <div class="index">
          {{ status[l]?.index || 0 }}
        </div>
        <div class="content">
          {{ l || '' }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from 'vue';

import LifecycleRecorder from '@/component/component/LifecycleRecorder.vue';
import { allLifecycle } from '@/lib/lifecycle';
import { type LifecycleEvent } from '@/types/event';

// 响应式变量, 用于决定 `CompLifecycle` 组件是否被渲染
const showComponent = ref<boolean>(false);

// 响应式变量, 用于决定 `CompLifecycle` 组件是否渲染到 `KeepAlive` 组件中被缓存
const keepAlive = ref<boolean>(false);

// 响应式对象, 用于记录各个 Vue 生命周期钩子函数的调用情况
const status = reactive<Record<string, { called: boolean, index: number }>>({});

// 监测 `showComponent` 响应式变量, 当其值变化为 `true` 时, 将 `status` 响应式对象的所有属性值改为 `false`
// 即消除之前记录的 Vue 生命周期钩子函数的调用情况
watch(showComponent, (val) => {
  if (val) {
    Object.keys(status).forEach((key) => {
      status[key] = { ...status[key], called: false };
    });
  }
});

// 处理 `CompLifecycle` 组件的 `lifecycle` 事件, 记录组件的 Vue 生命周期钩子调用情况
const onLifecycleChanged = (e: LifecycleEvent): void => {
  status[e.lifecycle] = {
    index: e.index,
    called: true
  };
};
</script>

<style scoped lang="scss">
.component {
  display: flex;
  flex-direction: row;
  gap: 0 50px;

  .control {
    display: flex;
    flex-direction: column;
    width: 20vw;
    gap: 20px 0;
  }

  .status {
    display: flex;
    flex-direction: column;
    gap: 10px 0;

    .node {
      width: 200px;
      height: 35px;
      display: flex;
      border-collapse: collapse;
      color: #8c8c8c;

      .index {
        height: 100%;
        width: 20%;
        border: 1px solid #676565;
        background-color: #706f6f35;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .content {
        height: 35px;
        width: 80%;
        border: 1px solid #676565;
        border-left: none;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      &.worked {
        color: #ffffff;
        font-weight: 500;
      }
    }
  }
}
</style>
