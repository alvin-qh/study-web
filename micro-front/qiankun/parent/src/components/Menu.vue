<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav>
    <ul>
      <!-- 绘制菜单 -->
      <li>
        <a href="/" @click.prevent="push('/')">Home</a>
      </li>
      <li>
        <!-- qiankun 要求在路径后面都要增加 `/` -->
        <a href="/vite-vue" @click.prevent="push('/vite-vue/')">Vite Vue</a>
      </li>
      <li>
        <a href="/vite-react" @click.prevent="push('/vite-react/')">Vite React</a>
      </li>
      <li>
        <a href="/rollup" @click.prevent="push('/rollup/')">Rollup</a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
function push(href: string): void {
  history.pushState({}, '', href);
}
</script>

<style scoped>
ul {
  padding: 10px;
  padding-left: 20px;
  margin: 0;
  font-size: 0.8rem;
  display: flex;
  justify-content: center;
}

ul li {
  list-style: none;
  padding: 10px 30px;
  border: 1px solid #7d7a7a;
  margin-right: 10px;
}

ul li:hover {
  background-color: #1a1a1a;
}

ul li a {
  color: #fff;
}
</style>
