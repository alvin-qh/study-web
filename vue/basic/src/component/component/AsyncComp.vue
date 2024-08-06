<!--异步组件--

如果在 VUE 组件的 `setup` 脚本中直接使用 `await` 语句 (而非在某个具备 `async` 修饰的钩子或事件函数中),
则意味着整个组件需要异步加载

需要异步加载的组件必须位于 `<Suspense>` 标签中, 否则无法正确加载
-->
<template>
  <div class="async-comp">
    <div v-if="error" class="error">
      {{ error.message }}
    </div>
    <div v-else>
      <!--数据表-->
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
      <!--分页-->
      <div class="pagination">
        <div class="total">
          Total <strong>{{ cars.page.total }}</strong> records
        </div>
        <div class="page-info">
          <ul>
            <li>
              <a v-if="cars.page.page > 1" href="#" @click.prevent="goPrev">&lt;</a>
              <span v-else>&lt;</span>
            </li>
            <li v-for="n of cars.page.totalPages" :key="n">
              <a v-if="n !== cars.page.page" href="#" @click="goPage(n)">{{ n }}</a>
              <span v-else>{{ n }}</span>
            </li>
            <li>
              <a v-if="cars.page.page < cars.page.totalPages" href="#" @click.prevent="goNext">&gt;</a>
              <span v-else>&gt;</span>
            </li>
          </ul>
          <div>
            <input
              v-model="currentPage"
              type="number"
              name="page-no"
              class="number-no-spin"
            > / {{ cars.page.totalPages }} Pages
          </div>
          <div>
            Rows per page
            <select v-model="pageSize">
              <option v-for="s in pageSizes" :key="s" :value="s">
                {{ s }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

import { fetchData } from './AsyncComp';

// 分页数据类型
interface Pagination {
  page: number
  perPage: number
  total: number
  totalPages: number
}

// 数据类型
interface CarData {
  page: Pagination
  columns: Record<string, string>
  data: Array<Record<string, string | number | null>>
}

// 保存请求错误信息的响应式变量
const error = ref<Error | null>(null);

// 在组件脚本执行过程中处理异步请求, 此语句会令整个组件异步化
const data = await fetchData(0, 10);

// 存储请求结果的响应式变量
const cars = ref<CarData>(data);

// 预设的每页数据行数量集合
const pageSizes = [10, 20, 30, 50];

// 存储每页数据行数量的响应式变量
const pageSize = ref<number>(data.page.perPage);

// 存储当前页码的响应式变量
const currentPage = ref<number>(data.page.page);

// 监听请求结果, 当请求结果变化后, 重新设置每页数据行数以及当前页码
watch(cars, (val) => {
  pageSize.value = val.page.perPage;
  currentPage.value = val.page.page;
});

// 监听每页行数变量, 当每页行数变化后, 重新请求数据
watch(pageSize, async (val) => {
  cars.value = await fetchData(cars.value.page.page, val);
});

// 监听当前页面, 当页码发生变化后, 重新请求数据
watch(currentPage, async (val) => {
  if (val) {
    cars.value = await fetchData(val, cars.value.page.perPage);
  }
});

// 处理上一页链接点击, 请求上一页数据
const goPrev = async (): Promise<void> => {
  cars.value = await fetchData(cars.value.page.page - 1, pageSize.value);
};

// 处理下一页链接点击, 请求下一页数据
const goNext = async (): Promise<void> => {
  cars.value = await fetchData(cars.value.page.page + 1, pageSize.value);
};

// 处理页码链接点击, 请求指定页数据
const goPage = async (n: number): Promise<void> => {
  cars.value = await fetchData(n, pageSize.value);
};
</script>

<style lang="scss" scoped>
.async-comp {
  font-size: small;

  &>div{
    display: flex;
    flex-direction: column;
    gap: 5px 0;

    table {
      border-collapse: collapse;

      tr {
        th, td {
          border: 1px solid #8383836e;
          padding: 5px 8px;
        }
      }
    }

    .pagination {
      display: flex;
      flex-direction: row;

      .total {
        font-size: 12px;
        flex: 1;
      }

      .page-info {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0 10px;

        ul {
          padding: 0;
          margin: 0;
          list-style: none;
          display: flex;
          gap: 0 3px;

          li {
            a, span {
              display: flex;
              border: 1px solid #7676767d;
              width: 1.8em;
              height: 1.8em;
              justify-content: center;
              align-items: center;
            }
          }
        }

        input[type=number] {
          width: 2em;
          text-align: right;
          outline: none;
        }

        select {
          padding: 4px 2px;
          outline: none;
        }

        .page-no {
          display: flex;
          flex-direction: row;
          align-items: center;
        }
      }
    }
  }
}
</style>
