import { createGlobalState, createInjectionState } from "@vueuse/core";
import { ref } from "vue";

// 定义一个生成文本全局状态的组合函数
//
// 通过 `createGlobalState` 函数可以返回一个组合函数, 可以通过该组合函数返回定义的全局状态变量和函数
// 可以通过 `initialValue` 设置状态初始值
export const useGlobalState = createGlobalState((initialValue: string = '') => {
  // 产生一个响应式变量用于记录字符串
  const text = ref<string>(initialValue);

  // 定义一个函数用于改变字符串响应式变量的值
  function setText(value: string) {
    text.value = value;
  }

  // 返回定义的响应式变量和函数
  return { text, setText };
});


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

export { useInjectionStateProvider };

export function useInjectionState(): Exclude<ReturnType<typeof _useInjectionState>, undefined> {
  const store = _useInjectionState();
  if (!store) {
    throw new Error('useTextStore must be used within a Provider');
  }

  return store;
}
