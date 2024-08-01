<!--演示组件的 `v-model` 指令-->
<template>
  <div class="component">
    <div>
      <!--使用组件, 组件输出的字符通过 `v-model` 传递给父组件-->
      <VModelComp v-model="letter" />
    </div>
    <div>
      <!--绑定文本域-->
      <textarea v-model="text" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, type WatchStopHandle } from 'vue';

import VModelComp from '@/component/component/VModelComp.vue';

// 定义响应式变量, 接收 `VModelComp` 组件发送的字符
const letter = ref<{ key: string }>({ key: '' });

// 定义响应式变量, 显示发送的字符内容
const text = ref<string>('');

// 监听组件的 `v-model` 变量, 组合后显示在文本域中
const beginLetterWatch = (): WatchStopHandle => (
  watch(letter, (val) => {
    if (val) {
      stopWatchHandle.stopTextWatch();

      if (val.key === 'Backspace') {
        // 处理 Backspace 按键
        text.value = text.value.substring(0, text.value.length - 1);
      } else {
        // 将组件返回的按键加入到文本框
        text.value += val.key;
      }
      // 开启文本框响应变量监听
      stopWatchHandle.stopTextWatch = beginTextWatch();
    }
  })
);

// 监听文本域内容, 将最后一个字符传递给组件的 `v-model` 变量
const beginTextWatch = (): WatchStopHandle => (
  watch(text, (nv, ov) => {
    // 判断文本是否为追加
    if (nv.length > ov.length) {
      // 获取文本追加的部分
      const diff = nv.substring(ov.length);

      if (diff.length > 0) {
        // 停止 `letter` 变量的监控
        stopWatchHandle.stopLetterWatch();

        // 为 letter 响应式变量赋值
        diff.split('').forEach((l) => {
          letter.value = { key: l };
        });

        // 开启 `letter` 变量监控
        stopWatchHandle.stopLetterWatch = beginLetterWatch();
      }
    }
  })
);

// 定义对象, 用于存储关闭监听器的函数
const stopWatchHandle = {
  stopLetterWatch: beginLetterWatch(),
  stopTextWatch: beginTextWatch()
};
</script>

<style lang="scss" scoped>
.component {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  gap: 10px 0;

  &>div {
    width: 100%;
    text-align: center;
  }

  textarea {
    width: 90%;
    height: 10em;
    resize: none;
  }
}
</style>
