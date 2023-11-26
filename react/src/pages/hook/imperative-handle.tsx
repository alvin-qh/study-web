/**
 * useImperativeHandle 用于给指定的 ref 引用设置 current，配合 forwardRef 函数使用
 * 
 * 对于通过函数实现的 React 组件，不能直接添加 ref 属性，如果需要对该组件进行变量引用，则需要按如下操作：
 *  1. 通过 forwardRef 包装组件
 *      const Comp = (props, ref): React.JSX.Element => {...};
 *      const ForwardRefComp = forwardRef(Comp);
 *    其中：
 *      Comp 函数需要具备两个参数: props 和 ref，props 是该组件的属性，ref 是一个对该组件的引用
 * 
 *  2. 在组件函数内部，通过 useImperativeHandle 函数，为传入的 ref 设置 current 值
 * 
 * 完成上两步操作后，即可为 Comp 组件设置 ref 属性，并调用由 useImperativeHandle 设置的 ref current 对象
 */

import { ForwardedRef, forwardRef, useCallback, useImperativeHandle, useRef } from "react";

/**
 * 定义组件 ref.current 应用的对象类型
 */
interface FancyInputRef {
  focus(): void;
}

type FancyInputProps = {
  label?: string;
};


const FancyInput = forwardRef((
  { label = "" }: FancyInputProps,
  ref: ForwardedRef<FancyInputRef>    // 由第二个参数传入外部的 ref 引用对象
): React.JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);

  // 为 ref 设置 current 引用的对象, useCallback 可以对对象进行缓存
  useImperativeHandle(ref, useCallback(() => ({
    focus() {
      if (inputRef.current) {
        inputRef.current.select();
        inputRef.current.focus();
      }
    }
  }), []));

  return (
    <div className="flex w-full items-center">
      <label className="font-bold text-lg flex-0">
        {label}:
      </label>
      <input
        type="text"
        className="border text-lg px-2 py-1 rounded-md shadow-sm ml-2 flex-grow focus:outline-none focus:shadow-md"
        ref={inputRef}
      />
    </div>
  );
});

const HookImperativeHandle = (): React.JSX.Element => {
  // 定义对 FancyInput 组件的引用
  const inputRef = useRef<FancyInputRef>(null);

  return (
    <div className="w-1/3 px-4 py-6">
      <FancyInput
        label="输入"
        ref={inputRef}    // 设置引用属性
      />
      <button
        type="button"
        className="mt-4 ml-12 border px-4 py-2 rounded-md bg-sky-400 text-white font-medium shadow-md focus:outline-none active:bg-sky-500 active:shadow-none"
        onClick={() => { inputRef.current?.focus(); }}    // 通过引用执行组件内部提供的引用对象方法
      >
        Focus
      </button>
    </div>
  );
}

export default HookImperativeHandle;
