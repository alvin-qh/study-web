<!--使用简单组件-->
<template>
  <div class="component">
    <!--简单组件-->
    <div class="simple">
      <!--使用简单组件, 该组件通过 `import` 关键字引入, 在模板中, 可以写为 `<SimpleComponent>` 或 `<simple-component>`-->
      <SimpleComp ref="component" />
      <div>
        <a href="#" @click.prevent="showComponentDialog">
          Call Component showDialog function
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import SimpleComp from '@/component/component/SimpleComp.vue';

// 获取 `SimpleComp` 组件的引用
const component = ref<typeof SimpleComp>();

// 定义方法, 通过访问 `SimpleComp` 内部的函数显示 `SimpleComp` 组件内部定义的对话框
const showComponentDialog = (): void => {
  // `showDialog` 函数通过 `SimpleComp` 组件内部的 `defineExpose` 导出, 故可在父组件中访问
  component.value?.showDialog('Show Component Dialog', 'Notify');
};
</script>

<style lang="scss" scoped>
.component {
  .simple {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0 10px;

    &>div {
      font-size: small;
    }
  }
}
</style>
