<template>
  <div class="container-fluid">
    <div class="loading">Loading...</div>
  </div>
</template>

<script lang="ts">
export default {
  data(): Record<string, any> {
    return {
      title: 'Loading'
    };
  },
  created(): void {
    document.title = this.title;
  }
};
</script>

<style lang="less" scoped>
.loading {
  text-align: center;
  margin-top: 30px;
}
</style>
