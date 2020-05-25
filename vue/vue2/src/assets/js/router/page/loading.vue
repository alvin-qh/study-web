<template>
  <div class="container-fluid">
    <div class="loading">Loading...</div>
  </div>
</template>

<script>
export default {
  title: "Loading",
  created() {
    document.title = this.title
  }
}
</script>

<style lang="less" scoped>
.loading {
  text-align: center;
  margin-top: 30px;
}
</style>
