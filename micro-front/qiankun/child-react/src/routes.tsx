import { createBrowserRouter } from 'react-router-dom';
import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper';

import About from './components/About';
import Home from './components/Home';
import Root from './components/Root';

/**
 * 获取微应用的路由根路径
 *
 * @returns 路由根路径
 */
export function getBasePath(): string {
  const base = (qiankunWindow.__POWERED_BY_QIANKUN__ ?? false) ? '/vite-react' : '/';
  console.log(`The base path: "${base}"`);
  return base;
}

// 创建路由
export const routes = createBrowserRouter([
  {
    path: '/',
    loader: () => ({ message: 'Loading...' }),
    element: <Root />,
    children: [
      {
        path: '/',
        loader: () => ({ message: 'Loading...' }),
        element: <Home />
      },
      {
        path: '/about',
        loader: () => ({ message: 'Loading...' }),
        element: <About />
      }
    ]
  }
], {
  basename: getBasePath()
});
