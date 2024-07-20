<template>
  <div>
    <q-breadcrumbs>
      <q-breadcrumbs-el icon="home" to="/" />
      <q-breadcrumbs-el label="基础" />
      <q-breadcrumbs-el label="事件处理" />
    </q-breadcrumbs>
  </div>

  <div class="q-pa-md">
    <div class="row">
      <!-- 当事件发生时, 调用 `onClick` 函数 -->
      <q-btn label="按钮 1" color="primary" class="glossy col-1" @click="onClick($event)" />
      <q-btn label="按钮 2" color="secondary" class="glossy col-1" @click="onClick($event, 'Hi')" />
      <q-btn label="按钮 3" color="deep-orange" class="glossy col-1" @click="onClick($event, 'Hello')" />
    </div>
    <div class="q-mt-md">
      <!-- 当事件发生后, 显示 `eventStatus` 记录的事件状态 -->
      <p v-if="eventStatus.name">
        按钮名称: <span class="value">{{ eventStatus.name }}</span>
        <template v-if="eventStatus.arg">
          , 事件参数: <span class="value">{{ eventStatus.arg }}</span>
        </template>
        <template v-if="eventStatus.color">
          , 背景颜色: <span :style="{ color: eventStatus.color }" class="value">{{ eventStatus.color }}</span>
        </template>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

/**
 * 记录事件状态的类型
 */
class EventStatus {
  name: string = '';
  arg?: string = '';
  color?: string = '';
}

// 记录事件状态的响应式变量
const eventStatus = ref<EventStatus>(new EventStatus());

/**
 * 处理按钮点击事件
 *
 * @param e 事件参数
 * @param text 调用事件传递的额外参数
 */
function onClick(e: Event, text?: string): void {
  const value = eventStatus.value;

  value.name = (e.currentTarget as Element).textContent!;
  value.arg = text;
  value.color = window.getComputedStyle((e.currentTarget as Element)).backgroundColor?.toUpperCase();
}
</script>

<style scoped lang="scss">
.value {
  color: $red-8;
  font-weight: 600;
}
</style>
