/**
 * useMemo，根据参数是否变化决定是否调用指定函数
 */
import { Button, InputGroup, Intent, Label, OverlayToaster, Position } from "@blueprintjs/core";
import React, { useContext, useMemo, useState } from "react";

type ContextType = {
  value: string;
};

const AppToaster = OverlayToaster.create({
  className: "recipe-toaster",
  position: Position.TOP,
  maxToasts: 1
});

const Context = React.createContext<ContextType>({ value: "" });


/**
 * Common 组件属性
 */
type CommonProps = {
  onValueChange: (value: string) => void;   // 文本框内容变化事件
}

/**
 * 公共的 Common 组件
 */
const Common = ({ onValueChange }: CommonProps) => {
  // 获取上下文 context 对象
  const context = useContext(Context);

  const [renderTimes, setRenderTimes] = useState<number>(0);

  return (
    <div className="w-1/3 px-4 py-2">
      <Label className="text-lg">
        Input a value:
        <div className="">
          <InputGroup
            placeholder="Please press any value"
            large={true}
            onChange={e => {
              onValueChange(e.currentTarget.value);     /* 发出事件，引发父组件进行一次渲染 */
              setRenderTimes(times => times + 1);       /* 记录重新渲染次数 */
            }}
            value={context.value}
          />
        </div>
        <div className="text-right">
          <Button
            className="px-6 mt-2"
            intent={Intent.PRIMARY}
            onClick={() => {
              onValueChange(context.value);             /* 发出事件，引发父组件进行一次渲染（将文本框内容重发一次） */
              setRenderTimes(times => times + 1);       /* 记录重新渲染次数 */
            }}
          >
            Run
          </Button>
        </div>
      </Label>
      <div className="border-t py-2 mt-2 text-lg">
        <p>
          The component was rendered <b className="text-red-400">{renderTimes}</b> times.
        </p>
      </div>
    </div >
  );
}


const MemoFunction = (): React.JSX.Element => {
  // 定义处理 context 的 state
  const [context, setContext] = useState<ContextType>({ value: "With useMemo" });

  // 使用 useMemo 包装函数
  // 被包装的函数只有在 context.value 值发生变化时才会执行一次
  // 其余情况下，不执行被包装函数，直接返回缓存的函数返回值
  const memoizedValue = useMemo(() => {
    AppToaster.show({
      message: (
        <>
          The value is: <b>{context.value}</b>
        </>
      ),
      icon: "notifications",
      intent: Intent.PRIMARY
    });
    return context.value;
  }, [context.value]);

  console.log(memoizedValue);

  return (
    <Context.Provider value={context}>
      <Common onValueChange={value => setContext({ value: value })} />
    </Context.Provider>
  );
};


const WithoutMemoFunction = (): React.JSX.Element => {
  // 定义处理 context 的 state
  const [context, setContext] = useState<ContextType>({ value: "Without useMemo" });

  // 使用 useMemo 包装函数
  // 被包装的函数只有在 context.value 值发生变化时才会执行一次
  // 其余情况下，不执行被包装函数，直接返回缓存的函数返回值
  const memoizedValue = (
    () => {
      AppToaster.show({
        message: (
          <>
            The value is: <b>{context.value}</b>
          </>
        ),
        icon: "notifications",
        intent: Intent.PRIMARY
      });
      return context.value;
    }
  )();

  console.log(memoizedValue);

  return (
    <Context.Provider value={context}>
      <Common onValueChange={value => setContext({ value: value })} />
    </Context.Provider>
  );
};

const HookMemo = () => {
  return (
    <div>
      <div className="px-2 py-6">
        <p className="text-xl font-medium">With useMemo to cache function and return value: </p>
        <MemoFunction />
      </div>
      <hr />
      <div className="px-2 py-6">
        <p className="text-xl font-medium">Without useMemo to cache function and return value: </p>
        <WithoutMemoFunction />
      </div>
    </div>
  );
}

export default HookMemo;
