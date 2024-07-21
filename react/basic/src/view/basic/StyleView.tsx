import classnames from 'classnames';
import React, { useState } from 'react';

import css from './Style.module.scss';

// 定义一个内联样式对象
const styles: React.CSSProperties = {
  color: 'red',
  fontSize: '20px',
  backgroundColor: '#3131315b',
  padding: '10px 20px',
  width: 'fit-content',
  borderRadius: '8px',
  border: '1px solid #313131',
  cursor: 'pointer'
};

// 使用内联样式的组件
const InlineStyleComponent = (): React.JSX.Element => {
  const [background, setBackground] = useState<string>('#3131315b');

  return (
    <div className="inline-styles">
      <div style={{ ...styles, backgroundColor: background }}
        onMouseEnter={() => { setBackground('#5858585b'); }}
        onMouseLeave={() => { setBackground('#3131315b'); }}
      >
        Inline Style
      </div>
    </div>
  );
};

// 通过 css 类选择器指定组件样式
//
// 本例的类选择器来源于 `@/index.scss` 文件, 在 `@/main.tsx` 中通过 `import './index.scss'` 引入
//
// React 未提供组合多个类选择器的具体方法, 本例中借助 `classnames` 库完成多个类选择器的组合
const CssStyleComponent = (): React.JSX.Element => {
  // 定义状态值表示一个 Key 为类选择器名称, Value 为 boolean 值的对象, 通过 `classnames` 库可以将
  // Value 为 `true` 的类选择器组合起来
  // 默认情况下, 类选择器为 `boxed pointer`
  const [classes, setClasses] = useState<Record<string, boolean>>({
    boxed: true,
    pointer: true
  });

  return (
    <div className="css-style">
      <div className={classnames(classes)}
        // 通过事件, 为当前类选择器添加或移除指定部分
        // 即: 当鼠标移入时为 `boxed pointer focus`, 当鼠标离开时为 `boxed pointer`
        onMouseEnter={() => { setClasses({ ...classes, focus: true }); }}
        onMouseLeave={() => { setClasses({ ...classes, focus: false }); }}
      >
        CSS Style
      </div>
    </div>
  );
};

// CSS Module 是一种将 CSS 模块化的方法, 当一个 CSS (或 Less, SCSS 等) 文件被命名为 `xxx.module.css`
// (或 `xxxx.module.scss`, `xxxx.module.less` 等), 当 import 这些文件时, 就意味着将以 CSS Module
// 方式引入, 例如:
//
// ```typescript
// import css from './JSX.module.scss`;
// ```
//
// 引入 CSS Module 后, 即可通过引入的模块访问定义的类选择器, 例如:
//
// ```typescript
// <div className={css['boxed-container']}>...</div>
// <div className={css.highlight}>...</div>
// ```
//
// 除了方便引入类选择器外, CSS Module 还为类选择器进行了唯一化命名, 以用于样式的隔离
const CSSModuleComponent = (): React.JSX.Element => {
  // 定义状态值表示一个 Key 为类选择器名称, Value 为 boolean 值的对象, 通过 `classnames` 库可以将
  // Value 为 `true` 的类选择器组合起来
  // 默认情况下, 类选择器为 `boxed pointer`
  const [classes, setClasses] = useState<Record<string, boolean>>({
    [css.boxed]: true,
    [css.pointer]: true
  });

  return (
    <div className="css-module">
      <div className={classnames(classes)}
        // 通过事件, 为当前类选择器添加或移除指定部分
        // 即: 当鼠标移入时为 `boxed pointer focus`, 当鼠标离开时为 `boxed pointer`
        onMouseEnter={() => { setClasses({ ...classes, [css.focus]: true }); }}
        onMouseLeave={() => { setClasses({ ...classes, [css.focus]: false }); }}
      >
        CSS Module
      </div>
    </div>
  );
};

// 在 React 中使用样式的方式包括: inline style, css, css module 等
export const StyleView = (): React.JSX.Element => (
  <div className={css.style}>
    <InlineStyleComponent />

    <hr />

    <CssStyleComponent />

    <hr />

    <CSSModuleComponent />
  </div>
);
