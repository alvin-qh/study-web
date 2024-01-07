/**
 * React Hook 使用概览
 */
import { Button, Intent } from '@blueprintjs/core';
import { type JSX, useEffect, useState } from 'react';


const CountState = (): JSX.Element => {
  // count 为只读变量，setCount 用于设置 count 的值，并刷新使用 count 值的部分
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <h1 className="font-bold text-lg px-2 py-1 bg-gradient-to-r from-yellow-100 to-yellow-50">useState:</h1>
      <div className="space-y-4 flex flex-col justify-center mt-4">
        <p className="text-center text-lg font-bold">You clicked
          <b className="text-blue-600 text-2xl px-1">{count}</b> times
        </p>
        <Button
          className="focus:outline-none place-self-center font-medium"
          onClick={() => { setCount((c) => c + 1); }}
          intent={Intent.PRIMARY}
          large={true}>
          Click me
        </Button>
      </div>
    </>
  );
};

const CountEffect = (): JSX.Element => {
  const [count, setCount] = useState<number>(0);

  // 通过 useEffect 处理 state 变量变换后执行的方法
  // 假设 count 变化后，需要更新页面标题，并且在组件销毁时恢复页面标题
  useEffect(() => {
    const oldTitle = document.title;
    document.title = `You clicked ${count} times`;

    // 返回函数，消除副作用
    return () => { document.title = oldTitle; };
  }, [count]);

  return (
    <>
      <h1 className="font-bold text-lg px-2 py-1 bg-gradient-to-r from-yellow-100 to-yellow-50">useEffect: </h1>
      <div className="space-y-4 flex flex-col justify-center mt-4">
        <p className="text-center text-lg font-bold">You clicked
          <b className="text-blue-600 text-2xl px-1">{count}</b> times
        </p>
        <Button
          className="focus:outline-none place-self-center font-medium"
          onClick={() => { setCount((c) => c + 1); }}
          intent={Intent.PRIMARY}
          large={true}>
          Click me
        </Button>
      </div>
    </>
  );
};

const HookPreview = (): JSX.Element => (
  <div className="w-1/3">
    <div className="px-4 py-6">
      <CountState />
    </div>
    <div className="px-4 py-6">
      <CountEffect />
    </div>
  </div>
);

export default HookPreview;
