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
    <div v-else-if="loading">
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

import { type User } from './AsyncUser';

const props = defineProps<{
  userId: number
}>();

const loading = ref<boolean>(false);
const user = ref<User | null>();

watch(
  props,
  async (val) => {
    loading.value = true;
    user.value = null;

    if (val.userId) {
      try {
        const resp = await fetch(`https://reqres.in/api/users/${val.userId}`);
        if (resp && resp.status === 200) {
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

      &>div{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0 5px;
        background-color: #1f1e1e48;

        label {
          display: block;
          width: 6em;
          text-align: right;
          padding: 3px 5px;

          &::after {
            content: ":"
          }
        }

        &:nth-child(odd) {
          background-color: #4646467b;
        }
      }
    }
  }

  .Loading {
    font-size: small;
  }

  .error {
    color: #ee0f0f77;
    padding: 5px 10px;
  }
}
</style>
