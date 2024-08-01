<!--选项式 API 组件-->
<template>
  <div class="component">
    <div>
      <div class="label">
        <input type="checkbox" checked @change="toggleAnimate">
        <div>Animate</div>
      </div>
      <div class="color">
        <label>
          <div>Color1</div>
          <input name="color1" type="color" @change="changeColor">
        </label>
        <label>
          <div>Color2</div>
          <input name="color2" type="color" @change="changeColor">
        </label>
      </div>
    </div>

    <div>
      <OptionsComp ref="compOptStyle" :color1="color1" :color2="color2" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import OptionsComp from '@/component/component/OptionsComp.vue';

// 通过响应式变量引用 `OptionsComp` 组件
const compOptStyle = ref<typeof OptionsComp>();

// 复选框事件处理, 用于切换 `OptionsComp` 组件是否启用动画
const toggleAnimate = (e: Event): void => {
  const target = e.target as HTMLInputElement;

  // 根据复选框是否选中, 调用 `OptionsComp` 提供的方法开启和停用动画
  if (target.checked) {
    compOptStyle.value?.startAnimate();
  } else {
    compOptStyle.value?.stopAnimate();
  }
};

// 定义响应式变量作为组件的颜色属性
const color1 = ref<string>('#7a5456ab');
const color2 = ref<string>('#547a5aab');

// 响应文本框事件, 修改颜色
const changeColor = (e: Event): void => {
  const target = e.target as HTMLInputElement;
  switch (target.name) {
  case 'color1':
    color1.value = target.value;
    break;
  case 'color2':
    color2.value = target.value;
    break;
  default:
    throw new Error('invalid color value');
  }
};
</script>

<style lang="scss" scoped>
.component {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  gap: 0 20px;

  &>div {
    &:first-child {
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 10px 0;

      .label {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0 5px;
      }

      .color {
        display: flex;
        flex-direction: column;
        gap: 10px 0;
        font-size: small;

        label {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 0 5px;

          &>div {
            width: 3.5em;
            text-align: right;

            &::after {
              content: ":"
            }
          }

          input[type=text] {
            padding: 5px 10px;
          }
        }
      }
    }

    &:last-child {
      display: flex;
    }
  }
}
</style>
