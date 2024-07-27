import React, { useState } from 'react';

import { Modal } from './Modal.tsx';
import css from './Props.module.css';

// 定义组件属性类型
//
// 组件属性及一个 Object, 每个 Key 即为一个属性名
// JSX 的组件属性包括:
// 1. 基本类型: string, boolean, number
// 2. JSX 组件, 即 JSX.Element 类型, 表示一个子组件, 特殊的
// 3. 函数类型, 表示一个事件调用
//
// 名称为 `children` 的 JSX.Element 类型属性可以通过类似 HTML 子标签的语法表示子组件, 即
//
// ```html
// <AdvanceButton>
//   <div>Hello</div>
// </AdvanceButton>
// ```
// 其中的 `<div>Hello</div>` 即为 `<AdvanceButton>` 组件的 `children` 属性
interface AdvanceButtonProps {
  identity?: string
  onClick?: (identity: string) => void
  children?: string | React.JSX.Element
  className?: string
}

// 定义组件并将属性对象作为参数
//
// 这样一来, 使用组件时, 即可通过类似 HTML 标签的语法为组件传递参数, 例如:
//
// ```html
// <AdvanceButton identity="btn1" ...></AdvanceButton>
// ```
//
// 可以通过 ES6 的对象结构语法将属性对象直接结构为独立参数, 方便属性使用
const AdvanceButton = ({
  identity = '',
  onClick,
  children,
  className
}: AdvanceButtonProps): React.JSX.Element => {
  const [clicked, setClicked] = useState<boolean>(false);

  return (
    <div
      className={`${css.button} ${className ?? ''} ${clicked ? css.clicked : ''}`}
      onClick={() => { onClick && onClick(identity); }}
      onMouseDown={() => { setClicked(true); }}
      onMouseUp={() => { setClicked(false); }}
      onMouseOut={() => { setClicked(false); }}
    >
      {children}
    </div>
  );
};

export const PropsView = (): React.JSX.Element => {
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [modalTitle, setModalTitle] = useState<string>('');
  const [modalContent, setModalContent] = useState<string>('');

  const handleBtn1Clicked = (): void => {
    setModalTitle('Notify');
    setModalContent('Button "btn1" clicked');
    setModalShow(true);
  };

  return (
    <>
      <div className={css.event}>
        <AdvanceButton className='btn1' identity='btn1' onClick={handleBtn1Clicked}>
          <div>Button1</div>
        </AdvanceButton>
      </div>
      <Modal
        show={modalShow}
        title={<div>{modalTitle}</div>}
        onClose={() => { setModalShow(false); }}
      >
        <div>{modalContent}</div>
      </Modal>
    </>
  );
};
