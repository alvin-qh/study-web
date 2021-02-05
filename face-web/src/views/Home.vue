<template>
  <div class="alv-home">
    <CameraPanel />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CameraPanel from "@/components/CameraPanel.vue"; // @ is an alias to /src

@Component({
  components: {
    CameraPanel,
  },
})
export default class Home extends Vue {}
</script>
