/**
 * useCallback，缓存 callback 函数，防止因为 callback 函数变化导致子元素重新渲染
 */
import { Button, ButtonGroup, Card, Elevation, HotkeysProvider, Intent, ProgressBar, Switch } from "@blueprintjs/core";
import { Cell, Column, RenderMode, Table2 } from "@blueprintjs/table";
import '@blueprintjs/table/lib/css/table.css';
import { max, min, random } from "lodash";
import { memo, useCallback, useEffect, useState } from "react";
import css from './callback.module.css';

/**
 * 属性设置组件
 */
type SettingProps = {
  onChange: (value: boolean) => void;   // 设置项发送变化的事件通知
  howManyFuncs?: number;     // 记录产生过多少回调函数
}

/**
 * 属性设置组件
 */
const Setting = ({ onChange, howManyFuncs = 0 }: SettingProps): JSX.Element => (
  <Card elevation={Elevation.TWO}>
    <Switch
      large={true}
      label="useCallback?"
      onChange={e => onChange(e.currentTarget.checked)}
    />
    <p className="text-lg font-thin">How many callback function created: <b>{howManyFuncs}</b></p>
  </Card>
)


/**
 * 计数器组件属性类型
 */
type CounterProps = {
  initial: number;
  onChange: (value: number) => void
}

/**
 * 计数器组件，memo 用于减少该组件重回次数（通过比较组件值）
 */
const Counter = memo(({ initial, onChange }: CounterProps): JSX.Element => {
  // 计数器数值 state
  const [, setCounter] = useState<number>(parseInt((initial * 10).toFixed(0)));

  /**
   * 按钮点击事件，计算计数器数值并发起事件通知
   */
  const handleClick = (num: number) => {
    return () => {
      setCounter(counter => {
        const newCounter = max([min([counter + num, 10]), 0]) || 0;
        onChange(newCounter / 10);
        return newCounter;
      });
    }
  }

  // 通过 useCallback 缓存回调方法，避免每次调用 handleClick 产生新的回调方法，导致 Button 组件重绘
  const handleClickIncrement = useCallback(handleClick(1), []);    // eslint-disable-line react-hooks/exhaustive-deps
  const handleClickDecrement = useCallback(handleClick(-1), []);   // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <ButtonGroup>
        <Button onClick={handleClickIncrement} className="focus:outline-none">+</Button>
        <Button onClick={handleClickDecrement} className="focus:outline-none">-</Button>
      </ButtonGroup>
    </div>
  );
});


/**
 * Callback 组件
 */
const HookCallback = (): JSX.Element => {
  // 是否通过 useCallback 缓存回调函数的 state
  const [toUseCallback, setToUseCallback] = useState<boolean>(false);

  // 设置表格行数的 state
  const [rows, setRows] = useState<Array<number>>([...Array(10)].map(() => random(1, true)));

  // 非缓冲的 callback 函数
  const onChangeCallback1 = (rowIndex: number, value: number): void => {
    setRows(rows => {
      rows = [...rows];
      rows[rowIndex] = value;
      return rows;
    })
  };

  // 通过 useCallback 缓冲的 callback 函数
  const onChangeCallback2 = useCallback(onChangeCallback1, []);

  // 根据设置，选择一种 callback 函数
  const onChangeCallback = toUseCallback ? onChangeCallback2 : onChangeCallback1;

  // 定义保存 callback 函数产生次数的 Set 集合的 state
  const [funSet, setFunSet] = useState<Set<any>>(new Set<any>());

  // 当 toUseCallback 发生改变时，清理一次 Set 集合
  useEffect(() => setFunSet(funSet => {
    funSet.clear();
    return funSet;
  }), [toUseCallback]);  // eslint-disable-line

  // 当 onChangeCallback 函数发生变化时，记录一次函数的变化
  useEffect(() => setFunSet(funSet => {
    funSet.add(onChangeCallback);
    return funSet;
  }), [onChangeCallback]);  // eslint-disable-line

  /**
   * 渲染表格第一列单元格
   */
  const counterCellRenderer = (rowIndex: number): JSX.Element => {
    return (
      <Cell truncated={false} wrapText={true} className={css.tableCell}>
        <ProgressBar
          intent={Intent.PRIMARY}
          value={rows[rowIndex]}
          stripes={false}
        />
      </Cell>
    );
  };

  /**
   * 渲染表格第二列单元格
   */
  const operatorsCellRenderer = (rowIndex: number): JSX.Element => {
    return (
      <Cell className="py-1.5" truncated={false} wrapText={true} style={{ paddingTop: 7 }}>
        <Counter
          initial={rows[rowIndex]}
          onChange={value => onChangeCallback(rowIndex, value)} />
      </Cell>
    );
  };

  return (
    <div>
      <div className="py-4">
        <Setting onChange={value => { setToUseCallback(value) }} howManyFuncs={funSet.size} />
      </div>
      <div>
        <HotkeysProvider>
          <Table2
            numRows={rows.length}
            defaultRowHeight={45}
            defaultColumnWidth={200}
            enableRowResizing={false}
            enableColumnResizing={false}
            renderMode={RenderMode.BATCH_ON_UPDATE}
          >
            <Column name="Counter" cellRenderer={counterCellRenderer} />
            <Column name="Operators" cellRenderer={operatorsCellRenderer} />
          </Table2>
        </HotkeysProvider>
      </div>
    </div>
  );
}

export default HookCallback;
