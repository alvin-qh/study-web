import type React from 'react';
import { RouterProvider } from 'react-router-dom';

import { router } from './router';

/**
 * 定义 App 组件
 */
const App = (): React.ReactNode => (
  // 定义路由
  <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
);

export default App;
