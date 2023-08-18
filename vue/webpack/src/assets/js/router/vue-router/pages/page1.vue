<template>
  <div>Hello, This is page 1</div>
</template>

<script lang="js">
export default {
  created() {
    document.title = this.$router.currentRoute.name;
  }
}
</script>
