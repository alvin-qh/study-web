<template>
  <div class="menu">
    <ul>
      <!-- 循环所有的菜单项 -->
      <li v-for="item in items" :key="item.label">
        <!--Vue Router 超链接组件:
        1. 会被渲染为 `a` 标签, 表示一个超链接;
        2. 点击该链接会触发 Vue Router 的路由, 渲染 <router-view /> 组件中的内容;
        3. 和当前页面匹配的链接会具备 `router-link-active` 以及 `router-link-exact-active` 样式类, 可为其定义特殊样式;
            也可以在调用 `createRouter` 函数创建路由对象时, 传递 `linkActiveClass` 和 `linkExactActiveClass` 参数自定义类样式名称;

            ```typescript
            const router = createRouter({
              linkActiveClass: 'border-indigo-500',
              linkExactActiveClass: 'border-indigo-700',
              // ...
            })
          ```
          也可以通过 `<route-link>` 组件的属性指定样式：

          ```html
          <router-link
            active-class="border-indigo-500"
            exact-active-class="border-indigo-700"
            ...
          >
          ```
        -->
        <template v-if="item.children && item.children.length > 0">
          <div class="menu-group">{{ item.label }}</div>
          <common-menu :items="item.children" />
        </template>
        <router-link v-else :to="item.link">
          {{ item.label }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { type MenuItem } from '@/types/menu-item';

// 定义组件属性, 传入要展示的菜单项
defineProps<{ items: MenuItem[] }>();
</script>

<style scoped lang="scss">
.menu {
  ul {
    list-style: none;
    padding: 0;
    margin: _vars.$commonMargin;
    display: flex;
    flex-direction: column;
    gap: 10px 0;

    li {
      flex: 1;
      border: 1px solid #737272;
      padding: 0;

      a {
        display: block;
        padding: 5px 5px;
        color: #68696a;
        font-size: smaller;

        &:hover {
          background-color: #202020;
          color: #8d8d8d;
        }

        // 定义 <router-link> 组件和当前页面地址匹配 (链接被激活) 时的样式
        &.router-link-active {
          color: #d8d8d8dc;
          background-color: #44434398;
          cursor: default;
          // 取消鼠标一切行为
          pointer-events: none;
        }
      }

      .menu-group {
        text-align: center;
        font-weight: bold;
        padding-top: 5px;
        font-size: large;
        color: #9b9b9bbb;
        font-size: small
      }
    }
  }
}
</style>
