<!--条件插槽

所谓条件插槽, 即如果父组件为子组件传递了插槽内容, 子组件根据条件对其进行渲染, 否则不渲染和该插槽相关的任何内容

大部分情况下, 插槽外会包围 HTML 元素用于为插槽内容指定样式, 此时如果父组件不传递该插槽, 则意味着插槽内容为空,
但插槽外包围的元素会被正常渲染;
此时可以通过 `v-if` 指令判断指定插槽是否被父组件传递, 从而通过条件渲染避免额外的元素被渲染
-->
<template>
  <div class="condition-slot">
    <!--如果 title 插槽被传递, 才会渲染 header 及其子元素-->
    <header v-if="$slots.title">
      <a href="/" class="logo">
        <img :src="logo">
      </a>
      <div class="title">
        <slot name="title">
          Title
        </slot>
      </div>
      <div class="avatar">
        <img :src="avatar">
      </div>
    </header>

    <!--如果默认插槽被传递, 才会渲染 main 及其子元素-->
    <main v-if="$slots.default">
      <slot>Body</slot>
    </main>

    <!--如果 footer 插槽被传递, 才会渲染 main 及其子元素-->
    <footer v-if="$slots.footer">
      <slot name="footer">
        Footer
      </slot>
    </footer>
  </div>
</template>

<script setup lang="ts">
import defaultImg from '/vue.svg';

// 定义两个组件属性, 用于定义 Logo 和 Avatar 内容
withDefaults(
  defineProps<{
    logo?: string
    avatar?: string
  }>(),
  {
    logo: defaultImg,
    avatar: defaultImg
  }
);
</script>

<style scoped lang="scss">
.condition-slot {
  color: #c1c1c1be;
  border-collapse: collapse;
  width: 60vw;
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
