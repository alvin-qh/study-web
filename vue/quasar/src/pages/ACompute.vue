<template>
  <div>
    <QBreadcrumbs>
      <QBreadcrumbsEl icon="home" to="/" />
      <QBreadcrumbsEl label="基础" />
      <QBreadcrumbsEl label="计算属性" />
    </QBreadcrumbs>
  </div>

  <div class="q-pa-md">
    <QCard class="q-mt-md card-md">
      <QCardSection>
        <div class="row items-center">
          <div class="col-2 text-right q-pr-sm">
            计算公式:
          </div>
          <!-- 用于输入表达式的文本框, 输入的表达式响应到 express 变量 -->
          <QInput
            ref="expressInput"
            v-model="express"
            dense
            class="col"
            debounce="500"
            :rules="rules"
          />
        </div>
      </QCardSection>
      <QCardSection>
        <div class="row items-center">
          <div class="col-2 text-right q-pr-sm">
            计算结果:
          </div>
          <!-- 用于展示计算结果的文本框, 内容从 result 变量获取 -->
          <QInput :model-value="result" dense class="col" />
        </div>
      </QCardSection>
    </QCard>
  </div>
</template>

<script setup lang="ts">
import { QInput } from 'quasar';
import { computed, ref } from 'vue';

// 定义响应式变量, 用于接收表达式文本框的值
const express = ref<string>('');

// 定义响应式对象, 用于引用表达式文本框对象本身
const expressInput = ref<QInput | null>(null);

// 定义计算变量, 返回的结果值会被结果文本框引用
const result = computed<number | ''>(() => {
  // 如果表达式输入未通过验证, 则返回空白
  if (!expressInput?.value?.validate()) {
    return '';
  }

  // 定义表达式中可以使用的函数
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const sqrt = (x: number): number => Math.sqrt(x);

  try {
    // 计算表达式, 返回结果
    // eslint-disable-next-line no-eval
    const r = eval(express.value);
    // 如果计算结果不为数值, 则返回空白
    return typeof r === 'number' ? r : '';
  } catch (e) {
    // 表达式计算异常则返回空白
    return '';
  }
});

// 定义表达式输入组件的验证规则
const rules = [
  (val: string) => (/^([0-9+\-*/()\s]|sqrt)*$/).test(val) || '无效的公式'
];
</script>
