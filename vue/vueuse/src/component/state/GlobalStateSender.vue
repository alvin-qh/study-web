<template>
  <div class="global-state-sender">
    <div>
      <input type="text" v-model.trim="value">
    </div>
    <div>
      <button @click="handleSendButton">Send</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useGlobalState } from './state';

// 定义响应式变量接收文本框内容
const value = ref<string>('');

// 调用组合函数, 获取改变全局字符串值 `setText` 函数
const { setText } = useGlobalState('Hello Vue');

// 处理按钮点击事件, 将文本框内容设置给 `setText` 函数
function handleSendButton(): void {
  if (value.value) {
    setText(value.value);
  }
}
</script>

<style scoped lang="scss">
.global-state-sender {
  display: flex;
  flex-direction: row;
  border-collapse: collapse;
  align-items: baseline;
  padding: 10px 0;

  input,
  button {
    padding: 10px 8px;
  }

  input {
    width: 8vw;
    outline: none;
  }

  button {
    margin-left: -1px;
  }
}
</style>
