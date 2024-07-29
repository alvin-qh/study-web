/* eslint-disable react/react-in-jsx-scope */

import { type Router } from '@remix-run/router';
import { createBrowserRouter } from 'react-router-dom';

import { type MenuItem } from '@/types/menu-item';
import { HomeView } from '@/view/HomeView.tsx';
import { Layout } from '@/view/Layout.tsx';

/**
 * 路由对象
 *
 * 通过 `react-router-dom` 的 `createBrowserRouter` 函数来创建一个路由对象
 *
 * React 的路由必须从根开始, 通过一个树结构组织, 每个路由节点都可以包含下一级子路由节点, 形如:
 * - `'/'`:      `['index', '/page1', '/page2', ...]`
 * - `'/page1'`: `['index', '/page1/one', '/page2/two', ...]`
 *
 * 子路由指定的内容, 将会渲染到父路由页面的 `<Outlet/>` 元素内
 */
export const router: Router = createBrowserRouter([
  {
    // 指定根路由信息, 根路由将对应 `<Layout/>` 组件
    path: '/',
    element: <Layout />,

    // 定义根路由的子路由信息, 其中:
    // - `index` 子路由的 path 和根路由一致, 会将 `element` 属性指定的组件渲染到 `<Layout/>` 组件的 `<Outlet/>` 元素内
    // - `lazy` 函数表示异步加载路由, 返回的内容将会渲染到 `<Layout/>` 组件的 `<Outlet/>` 元素内
    children: [
      {
        index: true,
        element: <HomeView />
      },
      {
        path: '/basic/jsx',
        async lazy() {
          const { JSXView } = await import('@/view/basic/JSXView.tsx');
          return { Component: JSXView };
        }
      },
      {
        path: '/basic/style',
        async lazy() {
          const { StyleView } = await import('@/view/basic/StyleView.tsx');
          return { Component: StyleView };
        }
      },
      {
        path: '/basic/ref',
        async lazy() {
          const { RefView } = await import('@/view/basic/RefView.tsx');
          return { Component: RefView };
        }
      },
      {
        path: '/component/props',
        async lazy() {
          const { PropsView } = await import('@/view/component/PropsView.tsx');
          return { Component: PropsView };
        }
      },
      {
        path: '/component/form',
        async lazy() {
          const { FormView } = await import('@/view/component/FormView.tsx');
          return { Component: FormView };
        }
      },
      {
        path: '/hooks/state',
        async lazy() {
          const { StateHookView } = await import('@/view/hook/StateHookView.tsx');
          return { Component: StateHookView };
        }
      },
      {
        path: '/hooks/effect',
        async lazy() {
          const { EffectHookView } = await import('@/view/hook/EffectHookView.tsx');
          return { Component: EffectHookView };
        }
      }
    ]
  }
]);

/**
 * 菜单项数组
 */
export const menuItems: MenuItem[] = [
  {
    label: 'Basic',
    children: [
      { label: 'JSX', link: '/basic/jsx' },
      { label: 'Style', link: '/basic/style' },
      { label: 'Ref', link: '/basic/ref' }
    ]
  },
  {
    label: 'Component',
    children: [
      { label: 'Properties', link: '/component/props' },
      { label: 'Form', link: '/component/form' }
    ]
  },
  {
    label: 'Hooks',
    children: [
      { label: 'State', link: '/hooks/state' },
      { label: 'Effect', link: '/hooks/effect' }
    ]
  }
];
