import type React from 'react';
import { useRef, useState } from 'react';

import css from './JSX.module.scss';

// 在 React 中, 一个组件即一个函数, 函数名首字母要求大写, 函数必须返回 `React.JSX.Element` 类型
const FunctionComponent = (): React.JSX.Element => (
  // 在组件函数的返回值是一个 `React.Component` 类型对象, 可以由 JSX 组成
  <div className={css['function-component']}>
    <span>Function Component</span>
  </div>
);

// 在组件中, 可以通过三元运算符进行条件渲染, 也可以通过 `if` / `else` 将符合条件的组件存入变量, 并放入 JSX 中渲染
const ConditionComponent = (): React.JSX.Element => {
  const [enable, setEnable] = useState<boolean>(true);

  return (
    <div className={css.condition}>
      <label>
        <input type='checkbox' checked={enable} onChange={() => { setEnable(!enable); }} />
        <div>
          {/* 条件渲染 */}
          {enable ? <span>Enabled</span> : <span>Disabled</span>}
        </div>
      </label>
    </div>
  );
};

// 组件中可以通过 `Array` 的 `map`, `filter` 等方法将数组元素转为 JSX, 从而实现列表渲染
const ListComponent = (): React.JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [items, setItems] = useState<string[]>([]);

  function handleButtonClick(): void {
    setItems([...items, inputRef.current!.value]);
  }

  return (
    <div className={css.list}>
      <label>
        <input type="text" ref={inputRef} />
        <button onClick={handleButtonClick}>Add</button>
      </label>
      <ul>
        {/* 列表渲染 */}
        {items.map((it) => (
          <li key={it}>{it}</li>
        ))}
      </ul>
    </div>
  );
};

export const JSXView = (): React.JSX.Element => {
  // 可以将一个 JSX 片段存储到变量中, 并在之后的 JSX 中引用
  const VariableElement = (
    <div className={css['variable-element']}>
      <span>Variable Element</span>
    </div>
  );


  return (
    <div className={css['basic-jsx']}>
      <FunctionComponent />

      <hr />

      {/* 引用变量中的 JSX 片段 */}
      {VariableElement}

      <hr />

      <ConditionComponent />

      <hr />

      <ListComponent />
    </div>
  );
};
