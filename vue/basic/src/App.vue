<!-- 创建根组件 (App 组件) -->

<template>
  <!--放置顶部导航栏-->
  <CommonNavTop>VUE 基础</CommonNavTop>

  <!--放置页面主体-->
  <div class="wrapper">
    <!--在页面主题左侧放置导航面板-->
    <CommonLeftPane :items="items" />

    <!--放置子页面容器, 子页面容器通过路由指定其渲染内容-->
    <div class="container">
      <RouterView v-slot="{ Component }">
        <KeepAlive v-if="$route.meta.keepAlive">
          <component :is="Component" />
        </KeepAlive>
        <component :is="Component" v-else />
      </RouterView>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import CommonLeftPane from './component/common/CommonLeftPane.vue';
import CommonNavTop from './component/common/CommonNavTop.vue';
import { type MenuItem } from './types/menu-item';

// 设定菜单项变量, 绑定到组件上
const items = ref<MenuItem[]>([
  {
    label: 'Template',
    children: [
      { label: 'Template', link: '/template/basic' },
      { label: 'Event', link: '/template/event' }
    ]
  },
  {
    label: 'Reactive',
    children: [
      { label: 'Reactive', link: '/reactive/basic' },
      { label: 'Computed', link: '/reactive/computed' },
      { label: 'ClassStyle', link: '/reactive/class-style' }
    ]
  },
  {
    label: 'Component',
    children: [
      { label: 'Lifecycle', link: '/component/lifecycle' },
      { label: 'Component', link: '/component/component' },
      { label: 'Slot', link: '/component/slot' }
    ]
  }
]);
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;

  .container {
    flex: 1;
    margin: _vars.$commonMargin;
    border: 1px solid #565555;
    padding: 1vh 0.5vw;
    min-height: 10vh;
  }
}
</style>
