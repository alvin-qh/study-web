import type React from 'react';
import { Link, type LinkProps, useMatch, useResolvedPath } from 'react-router-dom';

import { type MenuItem as MenuItemType } from '@/types/menu-item';

import css from './Menu.module.scss';

/**
 * 菜单链接组件
 *
 * 用于在菜单中展示一个导航超链接
 */
const MenuLink = ({ to, children, ...more }: LinkProps): React.ReactNode => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link to={to} className={match ? css.active : ''} {...more}>
      {children}
    </Link>
  );
};

/**
 * 定义菜单项组件属性类型
 */
interface MenuItemProps {
  item: MenuItemType
  key?: React.Key
}

/**
 * 菜单项组件
 *
 * 用于在菜单中展示一个菜单项目
 */
const MenuItem = ({ item }: MenuItemProps): React.ReactNode => (
  item.children
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
    )
);

/**
 * 菜单组件属性类型
 */
interface MenuProps {
  items: MenuItemType[]
}

/**
 * 菜单组件
 */
export const Menu = ({ items }: MenuProps): React.ReactNode => (
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
