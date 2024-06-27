<template>
  <nav>
    <div class="logo"></div>
    <div class="title">VUE 基础</div>
    <div class="status">ddd</div>
  </nav>
</template>

<script setup lang="ts">
</script>

<style scoped>
nav {
  width: 100%;
  display: flex;
  align-items: center;
}

nav .logo {
  width: 40px;
  height: 40px;
  justify-self: start;
  margin: 10px 20px;

  background: url(/vue.svg) no-repeat;
  background-size: cover;
}

nav .title {
  font-size: 30px;
  flex: 1;
}

nav .status {
  margin-right: 10px;
}
</style>
