<template>
  <div class="component">
    <div v-if="error">
      {{ error.message }}
    </div>
    <div v-else>
      <table>
        <thead>
          <tr>
            <td v-for="" />
          </tr>
        </thead>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { objectMap } from '@/lib/execute';

interface Pagination {
  page: number
  perPage: number
  total: number
  totalPages: number
}

interface CarData {
  page: Pagination
  columns: string[]
  data: Record<string, string | number | null>
}

const error = ref<Error | null>(null);

try {
  const resp = await fetch('https://reqres.in/api/cars');
  const data = await resp.json();
} catch (e) {
  error.value = e as Error;
}
</script>
