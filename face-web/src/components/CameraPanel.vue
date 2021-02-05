<template>
  <div class="alv-camera">
    <video
      class="alv-video"
      playsinline
      autoplay
      x5-video-player-type="h5"
      ref="video"
    ></video>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { startTrack, stopTrack, createMediaDevices } from "./camera";

const _constraints = {
  audio: false,
  video: {
    sourceId: "default",
    facingMode: "environment",
  },
};

@Component({})
export default class CameraPanel extends Vue {
  created() {
    stopTrack();

    createMediaDevices()
      .getUserMedia(_constraints)
      .then((stream) => {
        startTrack(stream);

        const video = this.$refs["video"] as any;
        video.srcObject = stream;
      })
      .catch((e) => {
        console.log(e);
      });
  }
}
</script>

<style type="css" scoped>
.alv-video {
  object-fit: fill;
}
</style>
