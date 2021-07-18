# 使用 React Router 组件

> 参考：
> 
>   [React Router Quick start](https://reactrouter.com/web/guides/quick-start)
>
>   [React Code-Splitting](https://reactrouter.com/web/guides/quick-start)

- [使用 React Router 组件](#使用-react-router-组件)
  - [1. 安装依赖项](#1-安装依赖项)
  - [2. 使用 React Lazy Load 组件](#2-使用-react-lazy-load-组件)
    - [2.1. 设置 `babel-plugin-import` 插件](#21-设置-babel-plugin-import-插件)
    - [2.2. 使用 Lazy Load](#22-使用-lazy-load)
    - [2.3. 配合 React Router 使用](#23-配合-react-router-使用)

## 1. 安装依赖项

安装 Babel 插件

```bash
$ npm install --save-dev babel-plugin-import babel-plugin-syntax-dynamic-import
# 或者
$ yarn add -D babel-plugin-import babel-plugin-syntax-dynamic-import
```

## 2. 使用 React Lazy Load 组件

### 2.1. 设置 `babel-plugin-import` 插件

参考：[使用 babel-plugin-import](./create-react-app.md##use-plugin-babel-plugin-import)

### 2.2. 使用 Lazy Load

导入所需的组件

```javascript
import React, { lazy, Suspense } from 'react';
```

使用 Lazy Load

```javascript
const OtherComponent = lazy(() => import(/* webpackChunkName: "other" */ './components/OtherComponent.js'));

const ThisComponent = () => (
  <div>
    <Suspense fallback={ <div>Loading...</div> }>
      <OtherComponent />
    </Suspense>
  </div>
);
```

### 2.3. 配合 React Router 使用

参考：[App.js](../src/App.js)

```javascript
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Loading = (
  <div>Loading...</div>
);

// 异步加载组件
const Home = lazy(() => import(/* webpackChunkName: "home" */ "@pages/Home"));

const App = () => (
  <Router>
    <Suspense fallback={Loading}>
      <Switch>
        <Route exact path="/" component={Home}>
        </Route>
      </Switch>
    </Suspense>
  </Router>
);

export default App;
```
