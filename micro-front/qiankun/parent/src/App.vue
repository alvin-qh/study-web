<template>
  <img alt="*" :src="logo">
  <Menu />
  <div id="container" />
</template>

<script setup lang="ts">
import { initGlobalState, type MicroAppStateActions, registerMicroApps, runAfterFirstMounted, setDefaultMountApp, start } from 'qiankun';
import { onMounted } from 'vue';

import logo from './assets/logo.png';
import Menu from './components/Menu.vue';

// 注册 qiankun 微前端路由
registerMicroApps([
  {
    name: 'vite-vue', // 微前端子网站的名称, 必须和子网站 `vite.config.ts` 配置中 `qiankun` 插件中定义的名称一致
    entry: '//localhost:3001', // 微服务子网站入口地址, 该网站必须开启跨域访问
    container: '#container', // 子网站在父网页呈现的容器元素
    activeRule: '/vite-vue/' // 子网站的路由
  },
  {
    name: 'vite-react',
    entry: '//localhost:3002',
    container: '#container',
    activeRule: '/vite-react/'
  },
  {
    name: 'general',
    entry: '//localhost:3004',
    container: '#container',
    activeRule: '/rollup/'
  }
], {
  beforeLoad: [
    async (app) => {
      // 这个打印日志的方法可以学习一下，第三个参数会替换掉第一个参数中的 %c%s，并且第三个参数的颜色由第二个参数决定
      console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
    }
  ],
  beforeMount: [
    async (app) => {
      console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
    }
  ],
  afterUnmount: [
    async (app) => {
      console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
    }
  ]
});

// 定义全局状态，并返回两个通信方法
const actions: MicroAppStateActions = initGlobalState({
  user: 'qiankun'
});

// 设置默认进入的子应用，当主应用启动以后默认进入指定微应用
setDefaultMountApp('/vite-vue');

// 监听全局状态的更改，当状态发生改变时执行回调函数
actions.onGlobalStateChange((value: Record<string, unknown>, prev: Record<string, unknown>) => {
  console.log('[onGlobalStateChange - master]:', value, prev);
});

// 设置新的全局状态，只能设置一级属性，微应用只能修改已存在的一级属性
actions.setGlobalState({
  ignore: 'master',
  user: {
    name: 'master'
  }
});

// 当第一个微应用挂载以后，执行回调函数，在这里可以做一些特殊的事情，比如开启一监控或者买点脚本
runAfterFirstMounted(() => {
  console.log('[MainApp] first app mounted');
});

// 当组件渲染完毕后, 启动 Qiankun 容器
onMounted(() => {
  // 启动 qiankun 框架
  start({
    // 设置隔离沙盒
    sandbox: {
      // 启用实验性样式隔离
      experimentalStyleIsolation: true
      // strictStyleIsolation: true
    }
  });
});
</script>

<style scoped>
nav {
  margin-bottom: 20px;
}

img {
  width: 120px;
}

img:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
</style>
