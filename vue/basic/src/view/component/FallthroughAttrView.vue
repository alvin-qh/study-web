<!--组件属性透传


-->
<template>
  <div class="component">
    <div>
      <!--展示组件获得的透传属性继承-->
      <FallthroughAttr
        :id="100"
        class="inherit-attr-class"
        @click="handleAttrClick"
      />
    </div>
    <div>
      <!--展示禁用属性透传时的情况-->
      <DisableFallthroughAttrs
        :id="100"
        class="inherit-attr-class"
        @click="handleAttrClick"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { DisableFallthroughAttrs, FallthroughAttr } from '@/component/component/attr';

// 测试属性继承的事件处理函数
const handleAttrClick = (): void => {
  // eslint-disable-next-line no-alert
  window.alert('Hello');
};
</script>

<style lang="scss" scoped>
.component {
  display: flex;
  flex-direction: column;
  gap: 30px 0;
  padding: 10px 0;
}
</style>
