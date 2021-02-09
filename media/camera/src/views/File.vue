<template>
  <div class="alv-file">
    <h1>Use &lt;file&gt; tag to open video</h1>
    <form class="alv-video-form">
      <input type="file" accept="video/*" capture="camcorder">
    </form>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class File extends Vue {
}
</script>

<style lang="css" scoped>
.alv-video-form {
  margin-top: 50px;
}
</style>
