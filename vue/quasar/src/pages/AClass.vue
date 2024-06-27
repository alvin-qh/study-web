<template>
  <div>
    <q-breadcrumbs>
      <q-breadcrumbs-el icon="home" to="/" />
      <q-breadcrumbs-el label="基础" />
      <q-breadcrumbs-el label="类与样式" />
    </q-breadcrumbs>
  </div>

  <div class="q-pa-md">
    <div class="row style-choose">
      <q-checkbox v-model="classes['with-color']" label="with-color" class="col-2" />
      <q-checkbox v-model="classes['with-radius']" label="with-radius" class="col-2" />
      <q-checkbox v-model="classes['with-moving']" label="with-moving" class="col-2" />
    </div>
    <div class="row q-mt-md">
      <!-- 定义样式类, 展开 `classes` 变量内容, 并追加固定样式 -->
      <div :class="{ ...classes, 'q-pa-md': true, 'style-test': true }">
        类测试
      </div>
    </div>
  </div>

  <div class="q-pa-md q-mt-md">
    <div class="row style-choose">
      <q-select v-model="styles.borderColor" :options="['#1976d2', '#1565c0', '#0d47a1']" label="边框颜色" class="col-2 q-px-sm" />
      <q-select v-model="styles.borderRadius" :options="['5px', '10px', '20px']" label="圆角边框" class="col-2 q-px-sm" />
      <q-select v-model="styles.backgroundColor" :options="['#1976d2', '#1565c0', '#0d47a1']" label="背景颜色" class="col-2 q-px-sm" />
    </div>
    <div class="row q-mt-md">
      <!-- 定义样式属性 -->
      <div :style="styles">
        样式测试
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type CSSProperties, ref } from 'vue';

// 定义元素使用的类对象
// 对象中每个 key 表示一个 class 名称, value 如果为 true, 则会为元素应用该 class
const classes = ref<Record<string, boolean>>({
  'with-color': false,
  'with-radius': false,
  'with-moving': false
});

// 定义元素使用的样式对象
// 对象中每个 key 表示一个样式名称, value 为样式值
const styles = ref<CSSProperties>({
  border: '5px solid',
  borderColor: '#1565c0',
  borderRadius: '10px',
  padding: '15px 20px',
  backgroundColor: '#2196f3',
  fontWeight: 600,
  color: '#fff'
});
</script>

<style scoped lang="scss">
.style-choose {
  width: calc(100%/2.2);
}

.style-test {
  border: .05rem solid $blue-9;
  font-weight: 600;
}

.with-color {
  background-color: $blue-6;
  color: #fff;
}

.with-radius {
  border-radius: .625rem;
}

.with-moving {
  position: relative;
  animation: moving 2s infinite alternate;
}

@keyframes moving {
  from {
    left: 0px;
  }

  to {
    left: 1000px;
  }
}
</style>
