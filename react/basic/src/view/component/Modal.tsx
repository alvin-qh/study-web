import React, { useEffect, useRef } from 'react';

import css from './Modal.module.scss';

// 定义"对话框"组件的属性类型
interface ModalProps {
  // 是否显示对话框
  show?: boolean
  // 对话框关闭事件
  onClose: () => void
  // 对话框标题 JSX 组件
  title?: React.JSX.Element
  // 对话框内容 JSX 组件
  children?: React.JSX.Element
  // 对话框底部 JSX 组件
  footer?: React.JSX.Element
}

// 定义对话框组件, 用于显示一个"模态"对话框
export const Modal = ({
  show = true,
  onClose,
  title,
  children,
  footer
}: ModalProps): React.JSX.Element => {
  // 引用 `<dialog>` 对话框元素
  const modal = useRef<HTMLDialogElement>(null);

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
};
