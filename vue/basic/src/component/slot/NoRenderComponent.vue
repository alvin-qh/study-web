<!--无实际渲染的组件

一般来说, 如果一个组件不做任何渲染, 则组件本身就无意义, 但如果一个组件可以通过插槽向外传递属性值,
则组件本身可以只作为一个功能容器, 即为父组件提供变量值, 并承载父组件传递给插槽的内容进行渲染
-->
<template>
  <!--组件中只包含一个插槽, 并不渲染任何 HTML 元素, 插槽向父组件传递两个属性值-->
  <slot :pointX="point.x" :pointY="point.y" />
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, reactive } from 'vue';

// 定义响应式对象, 保存鼠标在页面位置的坐标
const point = reactive<{ x: number, y: number }>({ x: 0, y: 0 });

// 更新鼠标基于页面的坐标位置
function update(e: MouseEvent) {
  point.x = e.pageX;
  point.y = e.pageY;
}

// 在组件被加载时, 启动事件监听获取鼠标在页面的位置
onMounted(() => window.addEventListener('mousemove', update));

// 在组件被卸载后, 停止监听鼠标事件
onUnmounted(() => window.removeEventListener('mousemove', update));
</script>
