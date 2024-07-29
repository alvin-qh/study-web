import type React from 'react';
import { useState } from 'react';

import css from './StateHook.module.scss';

/**
 * 通过 `+`/`-` 按钮改变状态值的组件
 */
const StateCount = (): React.ReactNode => {
  // 创建数值类型状态值
  const [count, setCount] = useState<number>(0);

  return (
    <div className={css['state-count']}>
      {/* `+` 按钮点击, 增加 `count` 状态值 */}
      <button onClick={() => { setCount((c) => c + 1); }}>+</button>
      {/* 输出 `count` 状态值 */}
      <input type='number' value={count} readOnly />
      {/* `-` 按钮点击, 减少 `count` 状态值 */}
      <button onClick={() => { setCount((c) => (c - 1 > 0 ? c - 1 : 0)); }}>-</button>
    </div>
  );
};

const Calculator = (): React.ReactNode => {
  const keys = [
    'CE', 'C', '⬅', '÷',
    '7', '8', '9', '×',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '±', '0', '.', '='
  ];

  const [number, setNumber] = useState<number>(0);
  const [opt, setOpt] = useState<string>('');

  const handleKeyClicked = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    const key = e.target as HTMLDivElement;

    switch (key.dataset.key) {
    case 'CE':
      break;
    case 'C':
      break;
    case '⬅':
      break;
    case '±':
      break;
    default:
      setNumber((n) => n * 10 + parseInt(key.dataset.key ?? '0', 10));
      break;
    }
  };

  return (
    <div className={css.calculator}>
      <input type='number' readOnly value={number} />
      <div className={css.keyboard}>
        {
          keys.map((key) => (
            <div
              className={css.key}
              key={key}
              data-key={key}
              onClick={handleKeyClicked}
            >
              {key}
            </div>
          ))
        }
      </div>
    </div>
  );
};

export const StateHookView = (): React.ReactNode => (
  <div className={css['state-hook']}>
    <StateCount />

    <hr />

    <Calculator />
  </div>
);
