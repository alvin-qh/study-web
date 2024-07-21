import React from 'react';
import { RouterProvider } from 'react-router-dom';

import { router } from './router';

// 路由加载完成前显示的组件
const Loading = (): React.JSX.Element => (
  <p>Loading...</p>
);

// 定义 App 组件
const App = (): React.JSX.Element => (
  // 定义路由
  <RouterProvider router={router} fallbackElement={<Loading />} />
);

export default App;
