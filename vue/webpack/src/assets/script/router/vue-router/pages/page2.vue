<template>
  <div>Hello, This is page 2</div>
</template>

<script lang="js">
export default {
  created() {
    document.title = this.$router.currentRoute.name;
  }
}
</script>
