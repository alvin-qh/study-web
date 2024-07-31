<!--插槽

在组件中使用简单插槽
-->
<template>
  <div class="slot-simple">
    <!--定义一个匿名插槽, 并指定其默认内容-->
    <slot>
      Here is slot
    </slot>
  </div>
</template>

<style scoped lang="scss">
.slot-simple {
  border: 1px solid #8a89895a;
  padding: 10px 20px;
  width: fit-content;
  animation: blink 5s infinite;
}

@keyframes blink {
  0% {
    color: #a8a7a731
  }
  50% {
    color: #a8a7a7
  }
  100% {
    color: #a8a7a731
  }
}
</style>
