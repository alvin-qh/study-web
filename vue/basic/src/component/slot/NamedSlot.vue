<!--插槽

在组件中使用命名插槽

一个组件只能具备一个默认插槽, 如果要为组件定义多个插槽, 则: 可以有零或一个默认插槽和多个命名插槽;
-->
<template>
  <div class="named-slot">
    <header>
      <a href="/" class="logo">
        <img :src="logo">
      </a>
      <div class="title">
        <!--通过一个命名插槽定义 Title 元素-->
        <slot name="title">Title</slot>
      </div>
      <div class="avatar">
        <img :src="avatar">
      </div>
    </header>
    <main>
      <!--通过一个匿名插槽定义 Body 元素-->
      <slot>Body</slot>
    </main>
    <footer>
      <!--通过一个命名插槽定义 Footer 元素-->
      <slot name="footer">Footer</slot>
    </footer>
  </div>
</template>

<script setup lang="ts">
import defaultImg from '/vue.svg';

// 定义两个组件属性, 用于定义 Logo 和 Avatar 内容
withDefaults(
  defineProps<{
    logo?: string,
    avatar?: string,
  }>(),
  {
    logo: defaultImg,
    avatar: defaultImg
  }
);
</script>

<style scoped lang="scss">
.named-slot {
  color: #c1c1c1be;
  border-collapse: collapse;
  width: 20vw;
  font-size: small;

  header {
    display: flex;
    flex-direction: row;
    gap: 0 5px;
    align-items: center;

    .logo {
      display: block;
      width: 23px;
      height: 23px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .title {
      flex: 1;
    }

    .avatar {
      width: 23px;
      height: 23px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        border-radius: 50%;
      }
    }
  }

  main {
    padding: 10px 5px;
  }
}
</style>
