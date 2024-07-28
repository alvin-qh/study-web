import type React from 'react';
import { useRef, useState } from 'react';

import { Modal, type ModalElement } from '@/component/Modal.tsx';

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
/**
 * 按钮组件属性类型
 *
 * 组件属性为一个 Object, 每个 Key 即为一个属性名
 *
 * JSX 的组件属性包括:
 * 1. 基本类型: `string`, `boolean`, `number`
 * 2. JSX 组件, 即 `JSX.Element` 类型, 表示一个通过 JSX 语法构建的子组件
 * 3. 函数类型, 表示一个事件调用
 *
 * 名称为 `children` 的 JSX.Element 类型属性可以通过类似 HTML 子标签的语法表示子组件, 即:
 *
 * ```tsx
 * <AdvanceButton>
 *   <div>Hello</div>
 * </AdvanceButton>
 * ```
 *
 * 其中的 `<div>Hello</div>` 即为 `AdvanceButton` 组件的 `children` 属性
 */
interface AdvanceButtonProps {
  /**
   * 类样式选择器名
   */
  readonly className?: string

  /**
   * 点击事件
   */
  readonly onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void

  /**
   * 子组件
   */
  readonly children?: string | React.ReactNode
}

// 定义组件并将属性对象作为参数
//
// 这样一来, 使用组件时, 即可通过类似 HTML 标签的语法为组件传递参数, 例如:
//
// ```html
// <AdvanceButton className="btn1" ...></AdvanceButton>
// ```
//
// 可以通过 ES6 的对象结构语法将属性对象直接结构为独立参数, 方便属性使用
/**
 * 按钮组件
 *
 * 定义组件并将属性对象作为参数, 由父组件传递
 *
 * 使用组件时, 即可通过类似 HTML 标签的语法为组件传递参数, 例如:
 *
 * ```tsx
 * <AdvanceButton className="btn1" ...>
 *   <div>...</div>
 * </AdvanceButton>
 * ```
 *
 * 可以通过 ES6 的参数解构, 方便函数内部使用
 */
const AdvanceButton = ({
  className,
  onClick,
  children
}: AdvanceButtonProps): React.ReactNode => {
  // 定义状态值表示按钮是否被按下, 此状态值会影响按钮的样式
  const [mouseDown, setMouseDown] = useState<boolean>(false);

  // 渲染按钮
  return (
    <div
      className={`${css.button} ${className ?? ''} ${mouseDown ? css['mouse-down'] : ''}`}
      // 监听鼠标按键点击事件
      onClick={(e) => { onClick && onClick(e); }}
      // 监听鼠标按键按下事件
      onMouseDown={() => { setMouseDown(true); }}
      // 监听鼠标按键释放事件
      onMouseUp={() => { setMouseDown(false); }}
      // 监听鼠标指针移出组件的事件
      onMouseOut={() => { setMouseDown(false); }}
    >
      {/* `children` 属性表示组件的子组件 */}
      {children}
    </div>
  );
};

/**
 * 导出页面组件
 */
export const PropsView = (): React.ReactNode => {
  // 定义一个引用, 类型为对话框组件类型
  const modal = useRef<ModalElement>(null);

  // 定义一组状态值, 保存对话框的标题, 内容和是否显示
  const [modalTitle, setModalTitle] = useState<string>('');
  const [modalContent, setModalContent] = useState<string>('');
  const [modalShow, setModalShow] = useState<boolean>(false);

  // 处理按钮点击事件, 显示对话框
  const handleBtn1Clicked = (): void => {
    setModalTitle('Notify1');
    setModalContent('Button "btn1" clicked');

    // 通过改变状态值, 导致对话框属性变化, 触发对话框显示
    setModalShow(true);
  };

  // 处理按钮点击事件, 显示对话框
  const handleBtn2Clicked = (): void => {
    setModalTitle('Notify2');
    setModalContent('Button "btn2" clicked');

    // 通过对话框组件引用, 调用 `ModalElement` 类型 (即对话框组件类型) 中定义的方法
    modal.current?.showModal();
  };

  // 渲染组件
  return (
    <>
      <div className={css.event}>
        <div className={css['adv-button']}>
          <AdvanceButton
            className='btn1'
            onClick={handleBtn1Clicked}>
            <div>Button1</div>
          </AdvanceButton>

          <AdvanceButton
            className='btn2'
            onClick={handleBtn2Clicked}>
            <div>Button2</div>
          </AdvanceButton>
        </div>
        <hr />

      </div >
      <Modal
        ref={modal}
        show={modalShow}
        title={<div>{modalTitle}</div>}
        onClose={() => { setModalShow(false); }}
      >
        <div>{modalContent}</div>
      </Modal>
    </>
  );
};
