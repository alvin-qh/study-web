<template>
  <CommonAttributes title="Global" :attrs="globalInjectValue" />
</template>

<script setup lang="ts">
import { inject, ref } from 'vue';

import CommonAttributes from '@/component/common/CommonAttributes.vue';
import { factory } from '@/lib/execute';

const globalAttrs = ref<Record<string, string | number | undefined>>({
  globalValue: undefined
});

const localAttrs = ref<Record<string, string | number | undefined>>({

});

const globalInjectValue = factory((): Record<string, string> => {
  globalAttrs.value = Object.keys(globalAttrs.value, k => {
    
  });
});
</script>
