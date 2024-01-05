<template>
  <a-config-provider :theme="{algorithm: theme.darkAlgorithm,}">
    <a-layout class="layout">
      <a-layout-sider width="200">
        <a-menu mode="inline" class="side-menu" @click="onMenuClicked">
          <a-menu-item key="1">
            <home-outlined />
            <router-link to="/">
              Home
            </router-link>
          </a-menu-item>
          <a-menu-item key="2">
            <appstore-outlined />
            option2
          </a-menu-item>
          <a-menu-item key="3">
            <appstore-outlined />
            option3
          </a-menu-item>
          <a-menu-item key="4">
            <appstore-outlined />
            option4
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout-content>
        <div class="main">
          <router-view />
        </div>
      </a-layout-content>
    </a-layout>
  </a-config-provider>
</template>

<script setup lang="ts">
import { AppstoreOutlined, HomeOutlined } from '@ant-design/icons-vue';
import { theme } from 'ant-design-vue';

const onMenuClicked = (e: Event): void => {
  console.log(e);
};
</script>

<style scoped>
.side-menu {
  height: 100%;
}

.layout {
  height: 100%;
}

.main {
  height: 100%;
  padding: 1.5vh;
}
</style>
