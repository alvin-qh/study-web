<template>
  <div>
    <q-breadcrumbs>
      <q-breadcrumbs-el icon="home" to="/" />
      <q-breadcrumbs-el label="基础" />
      <q-breadcrumbs-el label="响应式" />
    </q-breadcrumbs>
  </div>

  <div class="q-pa-md">
    <q-card class="q-pa-md card-md">
      <q-card-section>
        <div class="text-subtitle1">
          <code>REF</code>
          响应式 (单值)
        </div>
      </q-card-section>
      <q-card-section>
        <!-- 显示 `number` 响应式变量的文本框 -->
        <q-input v-model="number" dense readonly class="number-text">
          <template #before>
            <!-- 将 `number` 变量减 `1` 的按钮 -->
            <q-btn color="primary" icon="remove" @click="number > 0 && number--" />
          </template>
          <template #after>
            <!-- 将 `number` 变量加 `1` 的按钮 -->
            <q-btn color="primary" icon="add" @click="number++" />
          </template>
        </q-input>
      </q-card-section>
    </q-card>

    <q-card class="q-mt-md card-md">
      <q-card-section>
        <div class="text-subtitle1">
          <code>REF</code>
          响应式 (对象)
        </div>
      </q-card-section>
      <q-card-section>
        <div class="reactive-section">
          <div class="before">
            <!-- 对 `refValues` 对象进行 "减" 操作的按钮 -->
            <q-btn color="primary" icon="remove" @click="refSub" />
          </div>
          <div class="content number-text">
            <!-- 显示 `refValues.number1` 响应式变量的文本框 -->
            <q-input v-model="refValues.number1" />
            <!-- 显示 `refValues.number2` 响应式变量的文本框 -->
            <q-input v-model="refValues.number2" />
            <!-- 显示 `refValues.faces` 响应式变量的文本框 -->
            <q-input v-model="refValues.faces" />
          </div>
          <div class="after">
            <!-- 对 `refValues` 对象内容加操作的按钮 -->
            <q-btn color="primary" icon="add" @click="refAdd" />
          </div>
        </div>
      </q-card-section>
    </q-card>

    <div class="q-my-md card-md center-button">
      <q-btn color="secondary" round icon="arrow_circle_up" @click="copy" />
    </div>

    <q-card class="q-mt-md card-md">
      <q-card-section>
        <div class="text-subtitle1">
          <code>REACTIVE</code>
          响应式
        </div>
      </q-card-section>
      <q-card-section>
        <div class="reactive-section">
          <div class="before">
            <!-- 对 `reactiveValues` 对象进行 "减" 操作的按钮 -->
            <q-btn color="primary" icon="remove" @click="reactiveSub" />
          </div>
          <div class="content number-text">
            <!-- 显示 `reactiveValues.number1` 响应式变量的文本框 -->
            <q-input v-model="reactiveValues.number1" />
            <!-- 显示 `reactiveValues.number2` 响应式变量的文本框 -->
            <q-input v-model="reactiveValues.number2" />
            <!-- 显示 `reactiveValues.faces` 响应式变量的文本框 -->
            <q-input v-model="reactiveValues.faces" />
          </div>
          <div class="after">
            <!-- 对 `reactiveValues` 对象内容加操作的按钮 -->
            <q-btn color="primary" icon="add" @click="reactiveAdd" />
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { cloneDeep } from 'lodash-es';
import { reactive, ref } from 'vue';

import { type Values } from '@/libs/types';

// 通过 `ref` 函数可以得到一个值的响应式引用, 此时可以通过 `value` 属性访问响应式变量值
const number = ref<number>(0);

// 通过 `ref` 函数也可以得到一个对象的响应式引用, 此时可以通过 `value` 属性访问响应式对象
const refValues = ref<Values>({
  number1: 0,
  number2: 0,
  faces: '😄'
});

// 通过 `reactive` 函数可以得到一个响应式对象
// 此时无须通过 `value` 属性获取响应式对象, 因为返回的对象本身具备响应式能力
// 注意: `reactive` 只能用于对象和数组, 不能用于简单对象类型; 不能替换该响应式对象; 不支持解构操作, 即 `const {a, b} = reactiveObj`, 解构后的结果会失去响应性
const reactiveValues = reactive<Values>({
  number1: 0,
  number2: 0,
  faces: '😄'
});

/**
 * 对 `refValues` 对象进行减操作
 */
function refSub(): void {
  // 获取响应式对象引用的对象值
  const values = refValues.value;

  // 对响应式对象的属性进行变更操作
  values.number1 > 0 && values.number1--;
  values.number2 > 0 && (values.number2 -= 2);
  values.faces.length > 2 && (values.faces = values.faces.substring(0, values.faces.length - 2));
}

/**
 * 对 `refValues` 对象进行加操作
 */
function refAdd(): void {
  // 获取响应式对象引用的对象值
  const values = refValues.value;

  // 对响应式对象的属性进行变更操作
  values.number1++;
  values.number2 += 2;
  values.faces += '😄';
}

/**
 * 对 `reactiveValues` 对象进行减操作
 */
function reactiveSub() {
  reactiveValues.number1 > 0 && reactiveValues.number1--;
  reactiveValues.number2 > 0 && (reactiveValues.number2 -= 2);
  reactiveValues.faces.length > 2 && (reactiveValues.faces = reactiveValues.faces.substring(0, reactiveValues.faces.length - 2));
}

/**
 * 对 `reactiveValues` 对象进行加操作
 */
function reactiveAdd() {
  reactiveValues.number1++;
  reactiveValues.number2 += 2;
  reactiveValues.faces += '😄';
}

/**
 * 将 `reactiveValues` 对象复制一份, 传递给 `refValues` 响应对象的 `value` 属性
 *
 * 通过 `ref` 函数返回地响应式对象, 可以通过为其 `value` 属性赋值来重新定义对象的内容, 而通过 `reactive` 函数定义的响应式对象则不行,
 * 如果为其赋值, 则会破坏该对象的响应性
 */
function copy() {
  // 通过 `value` 属性为响应式对象重新赋值
  refValues.value = cloneDeep(reactiveValues);
}
</script>

<style scoped lang="scss">
.reactive-section {
  display: flex;
  align-items: center;

  .content {
    display: flex;
    flex-direction: column;
    width: calc(100% / 1.22);
    padding: 0 20px;
  }
}

.center-button {
  display: flex;
  justify-content: center;
}
</style>

<style lang="scss">
.number-text {
  input {
    font-size: 30px !important;
    text-align: center;
    color: $red-3;
  }
}
</style>
