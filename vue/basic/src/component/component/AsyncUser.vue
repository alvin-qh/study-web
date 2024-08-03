<!--组件中使用异步调用

如果需要在组件中使用异步调用 (例如 `fetch`), 则需注意:
1. 如果是在脚本的 `setup` 部分进行调用, 则不能直接使用 `await` 语法, 可以通过 `Promise` 的 `then`, `catch` 的方法进行回调;
2. 如果在 Hook 等回调函数中使用, 则 Vue 允许将回调函数声明为 `async`, 在函数内部可以直接使用 `await` 语法, 例如:

   ```vue
   onMounted(async () => {
      const resp = await fetch(...);
   });
   ```
-->
<template>
  <div class="user">
    <div v-if="user" class="info">
      <div class="avatar">
        <img :src="user?.avatar">
      </div>
      <div class="detail">
        <div>
          <label>Id</label>
          <span>{{ user?.id }}</span>
        </div>
        <div>
          <label>First Name</label>
          <span>{{ user?.firstName }}</span>
        </div>
        <div>
          <label>Last Name</label>
          <span>{{ user?.lastName }}</span>
        </div>
        <div>
          <label>Email</label>
          <span>{{ user?.email }}</span>
        </div>
      </div>
    </div>
    <div v-else-if="loading" class="loading">
      <p>Loading...</p>
    </div>
    <div v-else class="error">
      <p v-if="userId">
        User with id {{ userId }} not exist
      </p>
      <p v-else>
        Please input userId
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

// 定义组件属性, 组件接收 `userId` 作为属性值
const props = defineProps<{
  readonly userId?: number | ''
}>();

// 定义响应式变量, 用于切换读取状态
const loading = ref<boolean>(false);

// 定义用户类型
interface User {
  readonly id: number
  readonly firstName: string
  readonly lastName: string
  readonly email: string
  readonly avatar: string
}

// 定义响应式变量值, 用于接收读取的用户信息
const user = ref<User | null>();

// 监听 `userId` 属性值, 当其发生变化后, 执行查询操作
watch(
  () => props.userId,
  async (val) => {
    // 为 `watch` 函数设置异步回调
    loading.value = true;
    user.value = null;

    if (val) {
      try {
        // 这里可以直接使用 `await` 语法进行异步等待
        const resp = await fetch(`https://reqres.in/api/users/${val}`);

        if (resp && resp.status === 200) {
          // 读取响应结果
          const { data } = await resp.json();
          user.value = {
            id: data.id,
            avatar: data.avatar,
            firstName: data.first_name,
            lastName: data.last_name,
            email: data.email
          };
        } else {
          user.value = null;
        }
      } catch (e) {
        user.value = null;
      } finally {
        loading.value = false;
      }
    }
  },
  {
    immediate: true
  }
);
</script>

<style lang="scss" scoped>
.user {
  padding: 5px;
  width: fit-content;
  box-shadow: 0 0 5px 5px #5b5b5b48;
  font-size: small;
  width: 380px;

  .info {
    display: flex;
    flex-direction: row;
    gap: 0 5px;

    .avatar {
      img {
        width: 100px;
      }
    }

    .detail {
      display: flex;
      flex-direction: column;
      flex: 1;

      &>div{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0 5px;
        background-color: #1f1e1e48;

        label {
          display: block;
          width: 80px;
          text-align: right;
          padding: 3px 5px;

          &::after {
            content: ":"
          }
        }

        span {
          flex: 1;
        }

        &:nth-child(odd) {
          background-color: #4646467b;
        }
      }
    }
  }

  .loading {
    color: #8e8e8e7c;
    text-align: center;
  }

  .error {
    color: #ee0f0f77;
    text-align: center;
  }
}
</style>
