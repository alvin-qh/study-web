<!-- 定义顶部的导航栏组件 -->

<template>
  <nav class="common-nav-top">
    <!-- Logo 图标 -->
    <RouterLink class="logo" to="/" />

    <!-- 标题 -->
    <div class="title">
      <slot></slot>
    </div>

    <!-- 用户状态 -->
    <div class="status">
      <div class="avatar">
        <img :src="avatar" />
      </div>
      <div>Alvin</div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import avatar from '@/assets/avatar.jpg';
</script>

<style scoped lang="scss">
.common-nav-top {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px 0;

  .logo {
    width: 40px;
    height: 40px;
    justify-self: start;
    margin: 10px 20px;

    background: url(/vue.svg) no-repeat;
    background-size: cover;

    transition: filter 300ms;

    :hover {
      filter: drop-shadow(0 0 2em #646cffaa);
    }
  }

  .title {
    font-size: 30px;
    flex: 1;
  }

  .status {
    display: flex;
    align-items: center;
    padding: 0 20px;
    gap: 10px;

    .avatar {
      img {
        width: 50px;
        border-radius: 50%;
      }
    }
  }
}
</style>
