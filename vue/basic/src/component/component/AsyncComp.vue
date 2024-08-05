<template>
  <div class="async-comp">
    <div v-if="error" class="error">
      {{ error.message }}
    </div>
    <div v-else>
      <table>
        <thead>
          <tr>
            <th v-for="(_,name) in cars.columns" :key="name">
              {{ name }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, n) in cars.data" :key="n">
            <td v-for="(col) in cars.columns" :key="col">
              {{ row[col] }}
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <div>{{ cars.page.page }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { fetchData } from './AsyncComp';

interface Pagination {
  page: number
  perPage: number
  total: number
  totalPages: number
}

interface CarData {
  page: Pagination
  columns: Record<string, string>
  data: Array<Record<string, string | number | null>>
}

const error = ref<Error | null>(null);

const data = await fetchData();
console.log(data);
const cars = ref<CarData>(data);
</script>


<style lang="scss" scoped>
.async-comp {
  table {
    border-collapse: collapse;
    font-size: small;

    tr {
      th, td {
        border: 1px solid #8383836e;
        padding: 5px 8px;
      }
    }
  }
}
</style>
