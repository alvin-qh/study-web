<template>
  <div class="alv-camera">
    <template v-if="!videoLoaded">
      <div class="alv-video-loadding">Loadding...</div>
    </template>

    <div class="alv-video-mask" ref="videoMask"></div>

    <video
      class="alv-video"
      playsinline
      autoplay
      x5-video-player-type="h5"
      ref="video"
      @loadeddata="onVideoLoaded"
    ></video>

    <div class="error">{{ error }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { startTrack, stopTrack, createMediaDevices } from "./camera";

const _constraints = {
  audio: false,
  video: {
    sourceId: "default",
    facingMode: "environment"
  }
};

@Component
export default class CameraPanel extends Vue {
  error = '';
  videoLoaded = false;

  created(): void {
    stopTrack();

    createMediaDevices()
      .getUserMedia(_constraints)
      .then((stream) => {
        startTrack(stream);

        const video = this.$refs.video as any;
        video.srcObject = stream;
      })
      .catch((e) => {
        this.error = e.toString();
      });
  }

  onVideoLoaded(): void {
    const bodySize = {
      width: document.body.clientWidth,
      height: document.body.clientHeight
    };

    const $video = this.$refs.video as HTMLElement;
    $video.style.top = '0px';
    $video.style.left = `${(bodySize.width - $video.clientWidth) / 2}px`;

    const $mask = this.$refs.videoMask as HTMLElement;
    $mask.style.width = `${$video.clientWidth * 0.75}px`;
    $mask.style.height = `${$video.clientHeight}px`;

    this.videoLoaded = true;
  }
}
</script>

<style type="css" scoped>

.alv-camera {
  position: relative;
}

.alv-camera .alv-video-loadding {
  font-size: 50px;
  color: rgb(74, 57, 228);
  text-shadow: 5px 5px #ccc;
  margin: 10% auto;
}

.alv-camera .alv-video-mask {
  margin: 0 auto;
  background-color: rgb(158, 77, 233);
  box-shadow: 10px 10px rgba(197, 151, 193, 0.356);
}

.alv-camera .alv-video {
  object-fit: fill;
  position: absolute;
  width: 400px;
  margin: 0 auto;
  clip-path: circle(40% at 50% 50%);
}
</style>
