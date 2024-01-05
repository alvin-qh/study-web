/**
 * 如何使用 Effect Hook
 */
import { type JSX, PureComponent, useEffect, useState } from 'react';

interface EffectProp { }

/**
 * 定义 EffectState 对象的类型，用于 EffectWithClass 类中
 */
interface EffectState {
  count: number
}

const { title } = document;

/**
 * 通过 "componentDidMount", "componentDidUpdate", "componentWillUnmount" 方法，在 Component 类中使用 state
 */
class EffectWithClass extends PureComponent<EffectProp, EffectState> {
  private timer: NodeJS.Timeout | null = null;

  constructor(props: EffectProp) {
    super(props);

    // 定义 state 属性
    this.state = {
      count: 0 // 在 state 中设置 count 值
    };
  }

  /**
   * 在组件第一次挂载时调用
   */
  componentDidMount(): void {
    this.timer = setInterval(() => {
      this.setState({ ...this.state, count: this.state.count + 1 });
    }, 1000);
  }

  /**
   * 在组件更新时调用
   */
  componentDidUpdate(): void {
    document.title = `The count value is: ${this.state.count}`;
  }

  /**
   * 在组件卸载时调用
   */
  componentWillUnmount(): void {
    document.title = title;
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  render(): JSX.Element {
    return (
      <div className="px-2 space-y-2 mt-2 flex flex-col items-start">
        <p className="text-lg">The count value is:
          <b className="text-2xl font-medium text-red-500">{this.state.count}</b>
        </p>
      </div>
    );
  }
}

/**
 * 通过 useEffect Hook 在 Component 函数中处理组件副作用
 */
const EffectHookWithFunc = ({ ...props }: EffectProp): JSX.Element => {
  // 通过 useState 设置一对值，count 用于读取值，setCount 函数用于设置值
  const [count, setCount] = useState<number>(0);

  /**
   * 相当于 "componentDidMount" + "componentWillUnmount" 方法，第二个参数传递 []，表示不会被任何 state 影响导致执行
   * 返回值用于组件卸载时消除副作用
   */
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  /**
   * 相当于 "componentDidUpdate" + "componentWillUnmount" 方法，第二个参数为空，表示对所有 state 值导致的影响进行处理
   * 返回值用于组件卸载时消除副作用
   */
  useEffect(() => {
    document.title = `The count value is: ${count}`;
    return () => { document.title = title; };
  });

  return (
    <div className="px-2 space-y-2 mt-2 flex flex-col items-start">
      <p className="text-lg">The count value is: <b className="text-2xl font-medium text-blue-500">{count}</b></p>
    </div>
  );
};

const HookEffect = (): JSX.Element => (
  <div className="px-4 py-6 space-y-6">
    <div>
      <h1 className="text-lg font-medium px-2 py-1 bg-gradient-to-r from-sky-100 to-sky-50">
        Effect In Component Class:
      </h1>
      <EffectWithClass />
    </div>
    <div>
      <h1 className="text-lg font-medium px-2 py-1 bg-gradient-to-r from-rose-100 to-rose-50">
        Effect Hook In Component Function:
      </h1>
      <EffectHookWithFunc />
    </div>
  </div>
);

export default HookEffect;
