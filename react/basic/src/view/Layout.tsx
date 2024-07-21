import React, { type Key } from 'react';
import { Link, type LinkProps, Outlet, useMatch, useResolvedPath } from 'react-router-dom';

import avatar from '@/assets/avatar.jpg';
import { menuItems } from '@/router';
import { type MenuItem as MenuItemType } from '@/types/menu-item';

import css from './Layout.module.scss';

// 顶部导航栏
const NavBar = (): React.JSX.Element => (
  <nav className={css['layout-nav-bar']}>
    <Link className={css.logo} to="/" />

    <div className={css.title}>React 18</div>

    <div className={css.status}>
      <div className={css.avatar}>
        <img src={avatar} />
      </div>
      <div>Alvin</div>
    </div>
  </nav>
);

// 菜单链接组件
const MenuLink = (props: LinkProps): React.JSX.Element => {
  const { children, to, ...more } = props;

  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link to={to} className={match ? css.active : ''} {...more}>
      {children}
    </Link>
  );
};

// 菜单项
const MenuItem = (props: { item: MenuItemType, key: Key }): React.JSX.Element => {
  const { item } = props;

  return item.children
    ? (
      <>
        <div className={css['menu-group']}>{item.label}</div>
        <Menu items={item.children} />
      </>
    )
    : (
      <>
        <MenuLink to={item.link ?? '/'}>
          {item.label}
        </MenuLink>
      </>
    );
};

// 菜单
const Menu = (props: { items: MenuItemType[] }): React.JSX.Element => {
  const { items } = props;

  return (
    <div className={css.menu}>
      <ul>
        {
          items.map((item, index) => (
            <li key={index}>
              <MenuItem item={item} key={index} />
            </li>
          ))
        }
      </ul>
    </div>
  );
};

// 左侧导航面板
function LeftPane(): React.JSX.Element {
  return (
    <div className={css['layout-left-pane']}>
      <Menu items={menuItems} />
    </div>
  );
}

// 整体布局组件
export const Layout = (): React.JSX.Element => (
  <>
    {/* 顶部导航栏 */}
    <NavBar />

    <div className={css.wrapper}>

      {/* 左侧导航模板 */}
      <LeftPane />

      <div className={css.container}>
        {/* 路由更换后内容渲染区域 */}
        <Outlet />
      </div>
    </div>
  </>
);
