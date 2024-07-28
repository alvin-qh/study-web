import type React from 'react';
import {
  type ForwardedRef,
  forwardRef,
  type ReactNode,
  useEffect,
  useImperativeHandle,
  useRef
} from 'react';

import css from './Modal.module.scss';

/**
 * `Modal` ("对话框") 组件的元素类型, 当通过 `ref` 对 Modal 组件进行引用时, 引用类型为该类型
 *
 * ```tsx
 * const modal = useRef<ModalElement>(null);
 * <Modal ref={modal} ... />
 * ```
 */
export interface ModalElement {
  show: () => void
  showModal: () => void
  close: () => void
}

/**
 * `Modal` ("对话框") 组件的属性类型
 */
interface ModalProps {
  /**
   * 是否显示对话框
   */
  show?: boolean

  /**
   * 对话框关闭事件
   */
  onClose: () => void

  /**
   * 对话框标题 JSX 组件
   */
  title?: React.ReactNode

  /**
   * 对话框内容 JSX 组件
   */
  children?: React.ReactNode

  /**
   * 对话框底部 JSX 组件
   */
  footer?: React.ReactNode
}

/**
 * 对话框组件, 用于显示一个"模态"对话框
 *
 * `forwardRef` 函数表示可以将一个父组件的 `ref` 引用进行传递, 其两个泛型参数表示:
 * - 父组件 `ref` 的类型为 `ModalElement` 类型;
 * - 父组件传递的组件属性为 `ModalProps` 类型
 *
 * 当父组件按如下方式引用该组件时, 会将父组件的引用变量传递到子组件参数中
 *
 * ```tsx
 * const modal = useRef<ModalElement>(null);
 * <Modal ref={modal} ... />
 * ```
 *
 * 对于组件的 `ref` 属性参数, 可以在组件函数内, 通过 `useImperativeHandle` 函数为其赋予实现对象
 *
 * ```tsx
 * const modal = useRef<ModalElement>(null);
 *
 * modal.current?.showModal();
 * setTimeout(() => modal.current?.close(), 5000);
 *
 * <Modal ref={modal} ... />
 *  ```
 */
export const Modal = forwardRef<ModalElement, ModalProps>(({
  show = true,
  onClose,
  title,
  children,
  footer
}: ModalProps, ref: ForwardedRef<ModalElement>): ReactNode => {
  // 引用 `<dialog>` 对话框元素
  const modal = useRef<HTMLDialogElement>(null);

  // 对 `Modal` 组件实现 `ModalElement` 类型
  useImperativeHandle(ref, (): ModalElement => (
    {
      show() {
        modal.current?.show();
      },
      showModal() {
        modal.current?.showModal();
      },
      close() {
        modal.current?.close();
      }
    }
  ));

  // 当 `show` 属性值变化后, 执行对话框显示或关闭操作
  useEffect(() => {
    if (modal.current) {
      if (show) {
        modal.current.showModal();
      } else {
        modal.current.close();
      }
    }
  }, [show]);

  // 当对话框加载后, 监听对话框关闭事件, 并调用 `onClose` 事件函数
  useEffect(() => {
    if (modal.current) {
      modal.current.addEventListener('close', () => {
        onClose();
      });
    }
  }, [onClose]);

  // 渲染对话框
  return (
    <dialog ref={modal} className={css.modal}>
      <header>
        <div className={css.title}>
          {title ?? (<div className={css['default-title']}>Modal</div>)}
        </div>
        <div className={css.close} onClick={() => { modal.current?.close(); }}>×</div>
      </header>
      <main>
        {children ?? (<div className={css['default-body']}></div>)}
      </main>
      <footer>
        {
          footer ?? (
            <div className={css['default-footer']}>
              <button onClick={() => modal.current?.close()}>Close</button>
            </div>
          )
        }
      </footer>
    </dialog>
  );
});
