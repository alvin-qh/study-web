/**
 * useRef 返回一个对象，该对象的 current 可以引用到任意值或对象
 * 
 * useRef 返回值具备不变性，即相同位置的 useRef 调用返回的值总是和上一次调用是相同的
 * useRef 的一般用法是通过 React 组件的 ref 属性对该组件进行引用，无论组件重新产生多少次，其 current 均引用到该组件
 */

import { InputGroup } from "@blueprintjs/core";
import { useEffect, useRef, useState } from "react";

type StateHistoryProp = {
  value: string;
}

/**
 * 设置一个自定义 Hook，用来返回一个变量的前一个值
 */
const usePrevious = function <T>(value: T): T {
  // 定义 lastValueRef 引用到传入的 value 属性上
  const previousRef = useRef<T>(value);

  // 当 value 属性发生变化，为 lastValueRef 的 current 设置新的 value 值，并在下次渲染时渲染
  useEffect(() => { previousRef.current = value; }, [value]);

  // 返回前一个值
  return previousRef.current;
}

const StateHistory = ({ value }: StateHistoryProp): JSX.Element => {
  const previousValue = usePrevious(value);

  return (
    <div className="text-lg">
      <p>The current state value is: <b>{value}</b></p>
      <p>The privious state value is: <b>{previousValue}</b></p>
    </div>
  );
}

type RefInvarianceProps = StateHistoryProp & {
}

/**
 * 验证 ref 不变性的组件
 */
const RefInvariance = ({ value }: RefInvarianceProps): JSX.Element => {
  // 定义应用到 value 属性的 ref
  const valueRef = useRef<string>(value);

  // 记录 ref.current 变化次数
  const [currentChangeCount, setCurrentChangeCount] = useState<number>(0);
  // 记录 ref 变化次数
  const [refChangeCount, setRefChangeCount] = useState<number>(0);

  // 保存 value 变化
  useEffect(() => setCurrentChangeCount(count => count + 1), [value]);
  // 保存 ref 变化
  useEffect(() => setRefChangeCount(count => count + 1), [valueRef]);

  // 当 value 发生变化时，将 value 存入 ref.current 中
  useEffect(() => { valueRef.current = value; }, [value]);

  return (
    <div className="text-lg">
      <p>The current state value is: <b>{currentChangeCount}</b></p>
      <p>The privious state value is: <b>{refChangeCount}</b></p>
    </div>
  );
}

const HookRef = (): JSX.Element => {
  const [state, setState] = useState<string>("");

  // 定义一个引用到组件的 ref
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="space-y-4 w-1/3">
      <div className="px-2 py-2">
        <p className="text-lg font-bold">输入内容改变变量值: </p>
        <InputGroup
          className="shadow-lg"
          large={true}
          onChange={e => setState(e.currentTarget.value)}
          inputRef={inputRef}   // ref 引用到组件
        />
      </div>
      <hr />
      <div className="px-2 py-4">
        <p className="text-lg font-bold">useRef 和值引用对象：<b className="font-normal">保存前一个状态值</b></p>
        <div className="border-2 mt-2 px-2 py-2 shadow-lg">
          <StateHistory
            value={state}
          />
        </div>
      </div>
      <hr />
      <div className="px-2 py-4">
        <p className="text-lg font-bold">useRef 返回值的不变性：<b className="font-normal">useRef 总是返回相同的引用</b></p>
        <div className="shadow-lg border-2 mt-2 px-2 py-2">
          <RefInvariance
            value={state}
          />
        </div>
      </div>
      <hr />
      <div className="px-2 py-4">
        <p className="text-lg font-bold">useRef 引用到组件：<b className="font-normal">同步组件的值</b></p>
        <div className="shadow-lg border-2 mt-2 px-2 py-2">
          <p>{inputRef.current?.value || "-"}</p>  {/* 通过引用同步组件的值 */}
        </div>
      </div>
    </div>
  );
}

export default HookRef;
