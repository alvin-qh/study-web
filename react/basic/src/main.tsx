import './index.scss';

import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';

// 创建 React 根元素
createRoot(document.getElementById('root')!)
  .render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
