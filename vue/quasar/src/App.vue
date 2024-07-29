<template>
  <QLayout view="hHh Lpr lff" container class="container">
    <TopHeader @menu-toggled="onMenuToggled()" />
    <LeftDrawer ref="leftDrawer" />
    <QPageContainer>
      <QPage padding>
        <RouterView />
      </QPage>
    </QPageContainer>
  </QLayout>
</template>

<script setup lang="ts">
import { type ComponentPublicInstance, ref } from 'vue';

import LeftDrawer from '@/components/LeftDrawer.vue';
import TopHeader from '@/components/TopHeader.vue';

const leftDrawer = ref<ComponentPublicInstance<typeof LeftDrawer> | null>(null);

const onMenuToggled = (): void => {
  leftDrawer.value?.toggleMenuState();
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 2000px;
}
</style>
