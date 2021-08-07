/**
 * useLayoutEffect 功能和 useEffect 类似，但它会在所有的 DOM 变更之后同步调用
 * 可以使用它来读取 DOM 布局并同步触发重渲染
 * 
 * 尽可能使用标准的 useEffect 以避免阻塞视觉更新
 */

import { InputGroup } from "@blueprintjs/core";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const usePrevious = function <T>(value: T): T {
  const ref = useRef<T>(value);
  useEffect(() => { ref.current = value }, [value]);
  return ref.current;
}

const useCurrent = function <T>(value: T): T {
  const ref = useRef<T>(value);
  useLayoutEffect(() => { ref.current = value }, [value]);
  return ref.current;
}

const HookLayoutEffect = (): JSX.Element => {
  const [value, setValue] = useState<string>();

  const previousValue = usePrevious(value);
  const currentValue = useCurrent(value);

  return (
    <div className="px-4 py-6 w-1/3">
      <div className="border p-2 shadow-md">
        <p>请输入任意字符串值: </p>
        <InputGroup
          onChange={e => { setValue(e.currentTarget.value) }}
        />
      </div>
      <div className="mt-2 border p-2 shadow-md space-y-3">
        <p>useEffect: <b className="p-1 border bg-rose-100">{previousValue}</b></p>
        <p>useLayoutEffect: <b className="p-1 border bg-green-100">{currentValue}</b></p>
      </div>
    </div>
  );
}

export default HookLayoutEffect;
