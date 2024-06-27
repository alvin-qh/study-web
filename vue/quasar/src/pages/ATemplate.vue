<template>
  <div>
    <q-breadcrumbs>
      <q-breadcrumbs-el icon="home" to="/" />
      <q-breadcrumbs-el label="基础" />
      <q-breadcrumbs-el label="模板" />
    </q-breadcrumbs>
  </div>

  <div class="q-pa-md">
    <q-card class="q-pa-md card-md">
      <q-card-section>
        <div class="text-subtitle1">
          分支
        </div>
      </q-card-section>
      <q-card-section class="q-gutter-sm">
        <!-- 一组单选框, 被选中的值存储在 `color` 变量中 -->
        <q-radio v-model="color" val="teal" label="Teal" color="teal" />
        <q-radio v-model="color" val="orange" label="Orange" color="orange" />
        <q-radio v-model="color" val="red" label="Red" color="red" />
        <q-radio v-model="color" val="cyan" label="Cyan" color="cyan" />
      </q-card-section>
      <q-card-section class="q-gutter-sm color-result">
        <div :class="[`text-${color}-9`]">
          Selected Color is:
        </div>
        <!-- IF/ELSE 条件分支, 根据单选框选中的颜色执行不同分支, 显示不同结果 -->
        <div v-if="color === 'teal'" class="teal">
          Teal
        </div>
        <div v-else-if="color === 'orange'" class="orange">
          Orange
        </div>
        <div v-else-if="color === 'red'" class="red">
          Red
        </div>
        <div v-else-if="color === 'cyan'" class="cyan">
          Cyan
        </div>
        <div v-else>
          None
        </div>
      </q-card-section>
    </q-card>

    <q-card class="q-pa-md q-mt-md card-md">
      <q-card-section>
        <div class="text-subtitle1">
          循环
        </div>
      </q-card-section>
      <q-card-section>
        <!-- 内容输入文本框, 将输入内容存储到 `inputContent` 变量中 -->
        <q-input v-model="inputContent" dense>
          <template #append>
            <!-- 将文本框输入内容存储到 `items` 集合中的按钮 -->
            <q-btn color="primary" icon="add" @click="addItem">
              添加内容
            </q-btn>
          </template>
        </q-input>
      </q-card-section>
      <q-card-section>
        <q-list class="q-pa-md">
          <!-- FOR 循环 -->
          <template v-for="(item, index) in items" :key="index">
            <q-item clickable>
              <q-item-section>
                {{ item }}
              </q-item-section>
              <q-item-section side>
                <q-icon name="delete_forever" @click="deleteItem(index)" />
              </q-item-section>
            </q-item>
            <q-separator inset />
          </template>
        </q-list>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// 用于存储单选框选择结果颜色值
const color = ref<string>('teal');

// 用于存储列表输入文本框内容的变量
const inputContent = ref<string>('');

// 用于存储列表项目的数组集合
const items = ref<Array<string>>([]);

/**
 * 将 `inputContent` 的内容加入到 `items` 数组中, 会引发模板中的 `v-for` 进行列表渲染
 */
function addItem() {
  const s = inputContent.value.trim();
  if (s) {
    items.value.push(s);
    inputContent.value = '';
  }
}

/**
 * 从 `item` 数组中删除指定索引项, 会引发模板中的 `v-for` 进行列表渲染
 */
function deleteItem(index: number) {
  items.value.splice(index, 1);
}
</script>

<style lang="scss" scoped>
.color-box {
  font-weight: bold;
  color: #fff;
  padding: 5px 10px;
}

.color-result {
  display: flex;
  align-items: baseline;

  .teal {
    @extend .color-box;
    background-color: $teal-9;
  }

  .orange {
    @extend .color-box;
    background-color: $orange-9;
  }

  .red {
    @extend .color-box;
    background-color: $red-9;
  }

  .cyan {
    @extend .color-box;
    background-color: $cyan-9;
  }
}

.sep {
  margin: 20px auto;
}
</style>
