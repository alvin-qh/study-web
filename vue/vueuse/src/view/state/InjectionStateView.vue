<!-- 测试状态注入

状态注入即注入一个状态, 仅用于"父组件"向"子组件"传递状态值

创建注入状态的方式如下:

```typescript
const [useInjectionStateProvider, _useInjectionState] = createInjectionState(
  (initialValue: string) => {
    const text = ref<string>(initialValue);

    function setText(value: string) {
      text.value = value;
    }

    return { text, setText };
  },
  {
    injectionKey: 'injection-text'
  }
);
```

`createInjectionState` 函数的返回值为两个组合函数, 由范例中 `useInjectionStateProvider` 和
`_useInjectionState` 两个变量表示, 这两个函数调用后的返回值都为 `createInjectionState` 函数
回调参数的返回结果, 本例中为 `text` 响应式变量和 `setText` 函数

需要在父组件中调用 `useInjectionStateProvider` 函数, 并通过返回的 `setText` 函数设置状态值,
在子组件中, 调用 `_useInjectionState` 函数, 并通过 `text` 响应式变量接收状态值

注意, 如果父组件中未调用 `useInjectionStateProvider` 函数, 则子组件调用 `_useInjectionState`
函数的返回值为 `undefined`, 为了避免这种情况的发生, 可以将 `_useInjectionState` 函数做进一步包装:

```typescript
function useInjectionState(): Exclude<ReturnType<typeof _useInjectionState>, undefined> {
  const store = _useInjectionState();
  if (!store) {
    throw new Error('useTextStore must be used within a Provider');
  }

  return store;
}
```

即, 当 `_useInjectionState` 返回 `undefined` 时, 抛出异常提示父组件未调用 `useInjectionStateProvider`
函数
-->
<template>
  <div class="inject-state-view">
    <div class="state-provider">
      <div>
        <input type="text" v-model.trim="value">
      </div>
      <div>
        <button @click="handleSendButton">Send</button>
      </div>
    </div>
    <div class="state-injection">
      <injection-state-receiver />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import InjectionStateReceiver from '@/component/state/InjectionStateReceiver.vue';

import { useInjectionStateProvider } from '@/component/state/state';

const value = ref<string>('');

// 在父组件调用 `useInjectionStateProvider` 函数后, 子组件才能调用 `useInjectionState` 获取状态变量和函数
const { setText } = useInjectionStateProvider('Hello Vue');

function handleSendButton(): void {
  if (value.value) {
    setText(value.value);
  }
}
</script>

<style scoped lang="scss">
.inject-state-view {
  .state-provider {
    display: flex;
    flex-direction: row;
    padding: 10px 0;

    input,
    button {
      padding: 10px 8px;
    }

    input {
      width: 8vw;
      outline: none;
    }

    button {
      margin-left: -1px;
    }
  }
}
</style>
