import type React from 'react';
import { Link } from 'react-router-dom';

import css from './NavBar.module.scss';

/**
 * 导航栏组件属性类型
 */
interface NavBarProps {
  children?: React.ReactNode
  userName?: string
  avatar?: string
}

/**
 * 导航栏组件
 */
export const NavBar = ({ children, userName, avatar }: NavBarProps): React.ReactNode => (
  <nav className={css['nav-bar']}>
    <Link className={css.logo} to="/" />

    <div className={css.title}>
      {children ?? <div></div>}
    </div>

    <div className={css.status}>
      <div className={css.avatar}>
        <img src={avatar} />
      </div>
      <div>{userName ?? ''}</div>
    </div>
  </nav>
);
