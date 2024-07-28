import type React from 'react';
import { Outlet } from 'react-router-dom';

import avatar from '@/assets/avatar.jpg';
import { Menu, NavBar } from '@/component/common';
import { menuItems } from '@/router';

import css from './Layout.module.scss';

/**
 * 整体布局组件
 */
export const Layout = (): React.ReactNode => (
  <>
    {/* 顶部导航栏 */}
    <NavBar userName="Alvin" avatar={avatar}>
      <div>React 19</div>
    </NavBar>

    <div className={css.wrapper}>
      <div className={css['layout-left-pane']}>
        <Menu items={menuItems} />
      </div>

      <div className={css.container}>
        {/* 路由更换后内容渲染区域 */}
        <Outlet />
      </div>
    </div>
  </>
);
