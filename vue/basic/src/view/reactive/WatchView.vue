<!-- eslint-disable vue/no-v-html -->
<!--监控响应式数据变更-->
<template>
  <div class="reactive">
    <!--监听响应式变量-->
    <div class="watch-reactive">
      <input v-model="name" name="name" placeholder="Please input your name">
      <div class="database">
        <ul>
          <li v-for="marker in markers" :key="marker.name" v-html="markName(marker)" />
        </ul>
      </div>
    </div>

    <div class="watch-obj-field" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

// 定义姓名标记类型
interface NameMarker {
  name: string
  end: number
}

// 将姓名数组映射为姓名标记数组
const markers = [
  'Roberta Hammes',
  'Samuel Jackson',
  'Tyler Armstrong',
  'Tom Thomson',
  'Max Anderson',
  'Aidan Atkinson',
  'Kayson Horn',
  'Taylor Hunt',
  'Marquis Newton',
  'Deegan Carney',
  'Rogelio Ashley',
  'Jacob Wells',
  'Blake Young'
].map((val): NameMarker => ({
  name: val,
  end: 0
}));

// 定义响应式变量, 从文本输入框中获取姓名
const name = ref<string>('');

// 监听 `name` 变量, 在已有名称中找寻匹配结果
watch(name, (val) => {
  // 遍历标记数组
  markers.forEach((m) => {
    // 如果 `name` 变量和某个姓名的前部分匹配, 则在标记中设置其匹配的长度值
    const index = m.name.indexOf(val);
    if (index === 0) {
      m.end = val.length;
    } else {
      m.end = 0;
    }
  });
});

// 为每个标记项产生 HTML 内容
// 1. 如果标记没有被匹配, 则正常输出标记中的姓名
// 2. 如果标记被部分匹配, 则将匹配部分的姓名标记, 剩余部分正常输出
// 3. 如果标记被全部匹配, 则输出匹配后的全部姓名
const markName = (marker: NameMarker): string => {
  if (marker.end === 0) {
    return marker.name;
  }

  if (marker.end === marker.name.length) {
    return `<strong class="found">${marker.name}</strong>`;
  }

  const strong = marker.name.substring(0, marker.end);
  const normal = marker.name.substring(marker.end);
  return `<strong class="matching">${strong}</strong>${normal}`;
};
</script>

<style scooped lang="scss">
.reactive {
  display: flex;
  flex-direction: column;
  gap: 20px 0;
  padding: 10px 0;

  .watch-reactive {
    input[name=name] {
      padding: 8px 10px;
    }

    .database {
      padding: 15px 0;

      ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 0 10px;

        li {
          padding: 8px 10px;
          background-color: #4a4a4a58;
          font-size: small;

          .matching {
            color: #98b30491;
          }

          .found {
            color: #04b31891;
          }
        }
      }
    }
  }
}
</style>
