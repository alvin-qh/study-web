<!-- 创建根组件 (App 组件) -->

<template>
  <!--放置顶部导航栏-->
  <NavBar>VUE 基础</NavBar>

  <!--放置页面主体-->
  <div class="wrapper">
    <!--在页面主题左侧放置导航面板-->
    <LeftPane :items="items" />

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

import LeftPane from './component/common/LeftPane.vue';
import NavBar from './component/common/NavBar.vue';
import { type MenuItem } from './types/menu-item';

// 设定菜单项变量, 绑定到组件上
const items = ref<MenuItem[]>([
  {
    label: 'Template',
    children: [
      { label: 'Simple', link: '/template/simple' },
      { label: 'v-html', link: '/template/v-html' },
      { label: 'v-bind', link: '/template/v-bind' },
      { label: 'List', link: '/template/list' },
      { label: 'Condition', link: '/template/condition' },
      { label: 'Event', link: '/template/event' },
      { label: 'CSSModule', link: '/template/css-module' }
    ]
  },
  {
    label: 'Reactive',
    children: [
      { label: 'Ref', link: '/reactive/ref' },
      { label: 'Reactive', link: '/reactive/reactive' },
      { label: 'Computed', link: '/reactive/computed' },
      { label: 'ClassStyle', link: '/reactive/class-style' }
    ]
  },
  {
    label: 'Component',
    children: [
      { label: 'Lifecycle', link: '/component/lifecycle' },
      { label: 'Simple', link: '/component/simple' },
      { label: 'Props', link: '/component/props' },
      { label: 'Event', link: '/component/event' },
      { label: 'v-model', link: '/component/v-model' },
      { label: 'Integrate', link: '/component/integrate' },
      { label: 'Component', link: '/component/component' },
      { label: 'Fallthrough', link: '/component/fallthrough' },
      { label: 'Options', link: '/component/options' },
      { label: 'Injection', link: '/component/injection' },
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
