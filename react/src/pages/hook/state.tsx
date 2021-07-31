/**
 * 如何使用 State Hook
 */
import { Button, Intent } from "@blueprintjs/core";
import { PureComponent, useState } from "react";

type StateProp = {
}

/**
 * 定义 State 对象的类型，用于 StateWithClass 类中
 */
type State = {
  count: number;
}

/**
 * 通过 state 属性，在 Component 类中使用 state
 */
class StateWithClass extends PureComponent<StateProp, State> {
  constructor(props: StateProp) {
    super(props);

    // 定义 state 属性
    this.state = {
      count: 0    // 在 state 中设置 count 值
    }
  }

  render(): JSX.Element {
    return (
      <div className="px-2 space-y-2 mt-2 flex flex-col items-start">
        <p className="text-lg">You clicked <b className="text-2xl text-red-500">{this.state.count /* 读取 state 中的 count 值 */}</b> times</p>
        <Button
          onClick={() => this.setState({ ...this.state, count: this.state.count + 1 }) /* 设置 state 值 */}
          className="font-medium"
          large={true}
          intent={Intent.PRIMARY}
        >
          Click me
        </Button>
      </div>
    );
  }
}

/**
 * 通过 useState Hook 在 Component 函数中使用 state
 */
const StateHookWithFunc = ({ ...props }: StateProp): JSX.Element => {

  // 通过 useState 设置一对值，count 用于读取值，setCount 函数用于设置值
  const [count, setCount] = useState<number>(0);

  return (
    <div className="px-2 space-y-2 mt-2 flex flex-col items-start">
      <p className="text-lg">You clicked <b className="text-2xl text-blue-500">{count /* 读取 state 值 */}</b> times</p>
      <Button
        onClick={() => setCount(count => count + 1) /* 通过 setCount 设置 state 值 */}
        className="font-medium"
        large={true}
        intent={Intent.SUCCESS}
      >
        Click me
      </Button>
    </div>
  )
}


const HookState = (): JSX.Element => {
  return (
    <div className="px-4 py-6 space-y-6">
      <div>
        <h1 className="text-lg font-medium px-2 py-1 bg-gradient-to-r from-sky-100 to-sky-50">State Hook In Component Class: </h1>
        <StateWithClass />
      </div>
      <div>
        <h1 className="text-lg font-medium px-2 py-1 bg-gradient-to-r from-rose-100 to-rose-50">State Hook In Component Function: </h1>
        <StateHookWithFunc />
      </div>
    </div>
  );
}

export default HookState;
