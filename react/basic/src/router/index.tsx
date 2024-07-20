/* eslint-disable react/react-in-jsx-scope */

import { type Router } from '@remix-run/router';
import { createBrowserRouter } from 'react-router-dom';

import { type MenuItem } from '@/types/menu-item';
import { HomeView } from '@/view/HomeView.tsx';
import { Layout } from '@/view/Layout.tsx';

export const router: Router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
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
      }
    ]
  }
]);

export const menuItems: MenuItem[] = [
  {
    label: 'Basic',
    children: [
      { label: 'JSX', link: '/basic/jsx' }
    ]
  },
  {
    label: 'Component',
    children: [
      { label: 'Properties', link: '/component/props' },
      { label: 'Event', link: '/component/event' },
      { label: 'Children', link: '/component/children' }
    ]
  }
];
