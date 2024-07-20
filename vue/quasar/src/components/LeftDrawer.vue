<template>
  <q-drawer
    v-model="drawer"
    :mini="mini"
    :width="200"
    bordered
    class="bg-grey-2"
  >
    <q-scroll-area class="fit">
      <q-list>
        <menu-items :items="menuData" />
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<script setup lang="tsx">
import { computed, reactive } from 'vue';

import { menuData as _menuData } from '@/menu';

import { MenuItems } from './menu';

class Status {
  static ALL = ['none', 'display', 'mini'];

  index: number = 1;

  next() {
    if (++this.index >= Status.ALL.length) {
      this.index = 0;
    }
    console.log(`Menu status is "${this.value}"`);
  }

  get value() {
    return Status.ALL[this.index];
  }
}

const status = reactive(new Status());

const drawer = computed(() => status.value !== 'none');
const mini = computed(() => status.value === 'mini');

const menuData = _menuData;

defineExpose({
  toggleMenuState() {
    status.next();
  }
});
</script>
