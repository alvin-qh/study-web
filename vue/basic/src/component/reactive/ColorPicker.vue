<!--在 CSS 中使用 `v-bind`

在 `.vue` 文件的 `<style>` 标签中, 可以在 CSS 选择器中使用 `v-bind` 指令,
即将响应式变量和样式进行绑定

而 CSS3 中的变量, 也可以在 `<style>` 标签中继续使用
-->
<template>
  <div class="color-picker">
    <input v-model="currentColor" type="color">
    <div>
      <div class="current-color" />
      <div class="color-history">
        <ul>
          <li v-for="c in colorHistory" :key="c" :style="{'--bgcolor': c}" />
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const currentColor = ref<string>('');
const colorHistory = ref<string[]>([]);

watch(currentColor, (nVal, oVal) => {
  if (oVal && oVal !== nVal) {
    colorHistory.value.push(oVal);
  }
});
</script>

<style lang="scss" scoped>
.color-picker {
  display: flex;
  flex-direction: column;
  gap: 10px 0;

  input[type=color] {
    outline: none;
    width: 100px;
    height: 50px;
  }

  &>div {
    display: flex;
    flex-direction: row;
    gap: 0 10px;

    .current-color {
      width: 100px;
      height: 100px;
      // 可以在样式中使用 `v-bind` 引用响应式变量
      background-color: v-bind('currentColor');
    }

    .color-history {
      flex: 1;

      ul {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        padding: 0;
        margin: 0;
        list-style: none;
        gap: 10px;

        li {
          --bgcolor: '';

          display: block;
          width: 50px;
          height: 30px;
          background-color: var(--bgcolor)
        }
      }
    }
  }
}
</style>
