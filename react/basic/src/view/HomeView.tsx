import type React from 'react';

import css from './Home.module.scss';

/**
 * 首页组件
 */
export const HomeView = (): React.ReactNode => (
  <div className={css.home}>
    <img src='/logo.svg' alt='logo' />
    <div className={css.links}>
      <a href='https://zh-hans.react.dev' target='_blank' rel="noreferrer">Home</a>
      <span>|</span>
      <a href='https://vitejs.cn/vite3-cn/guide' target='_blank' rel="noreferrer">Vite</a>
    </div>
  </div>
);
