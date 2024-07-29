<!-- 测试全局状态

所谓全局状态, 即一旦状态被创建, 则在整个 Vue App 实例中全局有效, 可以在任何组件中访问状态变量和函数

创建全局状态的方式如下:

```typescript
const useGlobalState = createGlobalState((initialValue: string = '') => {
  const variable = ref<string>(initialValue);

  function setVariable(v: string): void {
    variable.value = v;
  }

  return { variable, setVariable };
});
```

`createGlobalState` 函数的返回值为另一个组合函数, 由范例中 `useGlobalState` 变量表示, 调用
`useGlobalState` 函数将返回 `createGlobalState` 函数回调函数参数的调用结果, 本例中会返回:
- `variable` 响应式变量, 通过该变量可以得到设置的状态值;
- `setVariable` 函数, 通过该函数可以改变设置的状态值;

再次调用 `useGlobalState` 函数后, 得到的返回值和之前的调用返回值一致
-->
<template>
  <div class="global-state-view">
    <div>
      <!--引入组件, 向全局状态发送数据-->
      <GlobalStateSender />
    </div>
    <div>
      <!--引入组件, 从全局状态接收变化的数据-->
      <GlobalStateReceiver />
    </div>
  </div>
</template>

<script setup lang="ts">
import GlobalStateSender from '@/component/state/GlobalStateSender.vue';
import GlobalStateReceiver from '@/component/state/GlobalStateReceiver.vue';
</script>
