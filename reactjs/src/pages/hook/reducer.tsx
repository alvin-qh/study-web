/**
 * useReducer hook 相当于 useState hook 的完整功能版
 * 
 * useReducer 函数定义为 (reduce, initializeState, initializer): [state, dispatch]，其中：
 * 参数:
 *  reduce: 函数类型，返回新的 state
 *  initializeState: 初始的 state 值
 *  initializer: 初始化 state 值的函数，参数为 initializeState
 * 返回值:
 *  state：经过 reduce 函数计算的新 state
 *  dispatch：调用 reduce 函数的代理函数
 * 
 * reduce 函数定义为 (state, action): newState，其中:
 * 参数：
 *  state: 当前的 state 值
 *  action: dispatch 函数调用传递的参数
 * 返回值:
 *  newState: 计算后的新 state 值
 */

import { Button, InputGroup, MenuItem, NumericInput, Switch } from "@blueprintjs/core";
import { ItemRendererProps, Select } from "@blueprintjs/select";
import { toString } from "lodash";
import { memo, useEffect, useMemo, useReducer, useState } from "react";

/**
 * 定义操作符常量群
 */
const Operator = {
  UNKNOWN: "unknown",
  ADD: "add",
  SUB: "subtract",
  MUL: "multiply",
  DIV: "divide"
}

/**
 * 定义操作符类型，为 Operator 所有值的组合
 */
type OperatorType = typeof Operator[keyof typeof Operator]

/**
 * 作为 useReducer 第一个返回值类型
 * 作为 reduce 函数的第一个参数类型以及返回值类型
 */
type StateType = {
  operator: OperatorType;
  result: number;
}

/**
 * 作为 reduce 函数的第二个参数类型 
 * 作为 dispatch 函数的第二个参数类型
 */
type ActionType = {
  firstNum: number;
  secondNum: number;
  operator: OperatorType;
}

/**
 * 将当前的 state 和 action 转化为新 state 的函数
 * @param state StateType 类型参数，表示当前的 state 状态
 * @param action ActionType 类型参数，表示调用 dispatch 函数传入的参数值
 * @returns StateType 类型的返回值，表示新的 state 状态
 */
const reduce = (state: StateType, action: ActionType): StateType => {
  let result = 0;
  switch (action.operator) {
    case Operator.ADD:
      result = action.firstNum + action.secondNum;
      break;
    case Operator.SUB:
      result = action.firstNum - action.secondNum;
      break;
    case Operator.MUL:
      result = action.firstNum * action.secondNum;
      break;
    case Operator.DIV:
      result = action.firstNum / action.secondNum;
      break;
  }
  return {
    operator: action.operator,
    result: result
  }
}

/**
 * state 初始值
 */
const initializeState: StateType = {
  operator: Operator.UNKNOWN,
  result: 0
}

/**
 * 初始化 state 值的函数
 */
const initializer = (initValue: StateType): StateType => initValue;

/**
 * 定义操作符选项的类型
 */
interface IOperator {
  operator: OperatorType;
  name: string;
}

/**
 * 操作符选择组件下拉选项
 */
const selectItems: Array<IOperator> = [
  { operator: Operator.ADD, name: '➕' },
  { operator: Operator.SUB, name: '➖' },
  { operator: Operator.MUL, name: '✖' },
  { operator: Operator.DIV, name: '➗' },
]

/**
 * 下拉选项
 */
const popoverProps = {
  minimal: true
}

/**
 * 简易计算器组件
 */
const Calculator = memo((): React.JSX.Element => {
  // useReducer，返回表示计算结果的 result state 和代理 reduce 函数调用 dispatch 函数
  //  result: 保存计算结果
  //  dispatch: 调用 reduce 函数的代理函数
  const [result, dispatch] = useReducer(reduce, initializeState, initializer);

  const [automate, setAutomate] = useState<boolean>(false);
  const [firstNum, setFirstNum] = useState<number>(0);
  const [secondNum, setSecondNum] = useState<number>(0);
  const [selectedOperator, setSelectedOperator] = useState<IOperator>({ operator: Operator.UNKNOWN, name: "" });

  /**
   * 渲染选择组件下列选项
   * 
   * 通过 useMemo 缓存函数，每当 selectedOperator 值发生变化时，产生新的函数
   */
  const selectItemRenderer = useMemo(() => {
    return (item: IOperator, { handleClick }: ItemRendererProps): React.JSX.Element => (
      <MenuItem
        label={item.operator}
        active={selectedOperator.operator === item.operator}
        key={item.operator}
        text={item.name}
        onClick={handleClick}
      />
    )
  }, [selectedOperator]);

  // 处理是否自动计算
  useEffect(() => {
    if (automate) {
      // 通过 dispatch 函数调用 reduce，计算结果
      dispatch({ firstNum, secondNum, operator: selectedOperator.operator })
    }
  }, [automate, firstNum, secondNum, selectedOperator]);

  return (
    <div>
      <div className="items-center flex flex-row">
        <div className="flex text-lg">简易计算器：</div>
        <div className="flex pt-2">
          <Switch
            large={true}
            label="自动计算"
            checked={automate}
            onChange={e => setAutomate(e.currentTarget.checked)}
          />
        </div>
      </div>
      <div className="flex flex-row space-x-2 items-center mt-2">
        <NumericInput
          onValueChange={(valueAsNumber: number) => setFirstNum(valueAsNumber)}
          value={toString(firstNum)}
        />
        <Select
          filterable={false}
          items={selectItems}
          popoverProps={popoverProps}
          itemRenderer={selectItemRenderer}
          onItemSelect={(item: IOperator) => setSelectedOperator(item)}
        >
          <Button text={selectedOperator.name} />
        </Select>
        <NumericInput
          onValueChange={(valueAsNumber: number) => setSecondNum(valueAsNumber)}
          value={toString(secondNum)}
        />
        <Button
          text="＝"
          onClick={() => dispatch({ firstNum, secondNum, operator: selectedOperator.operator })  /* 点击按钮，通过 dispatch 调用 reduce 计算结果 */}
        />
        <InputGroup
          value={toString(result.result) || "" /* 渲染计算结果 */}
          readOnly={true}
        />
      </div>
    </div>
  );
})

const HookReducer = (): React.JSX.Element => {
  return (
    <div>
      <Calculator />
    </div>
  );
}

export default HookReducer;
