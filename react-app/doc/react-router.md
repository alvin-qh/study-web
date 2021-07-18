# 使用 React Router 组件

## 1. 安装依赖项

安装 Babel 插件

```bash
$ npm install --save babel-plugin-import babel-plugin-syntax-dynamic-import
# 或者
$ yarn add babel-plugin-import babel-plugin-syntax-dynamic-import
```

安装 React Router 组件

```bash
$ npm install --save react-router-dom
# 或者
$ yarn add react-router-dom
```

## 2. 使用 React Router 组件

### 2.1. 设置 `babel-plugin-import` 插件

参考：[使用 babel-plugin-import](./create-react-app.md##use-plugin-babel-plugin-import)

### 2.2. 定义 Load Component

参考：[Load.js](../src/components/Load.js)

- 定义异步读取`.js`模块的组件

  ```javascript
  const LoadingComponent = ({ isLoading, error }) => {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    if (error) {
      return <div>Sorry, there was a problem loading the page.</div>;
    }
    return null;
  };
  ```

- 定义异步加载模块的方法

  ```javascript
  const loadModule = (module) => {
    return Loadable({
      loader: () => module,
      loading: LoadingComponent
    });
  };
  ```

### 2.3. 使用异步加载

参考：[App.js](../src/App.js)

```javascript
import loadModule from './components/Load';

// ...

<Router>
  <Route path="/" component={loadModule(import(/* webpackChunkName: "home" */ "@pages/Home"))}>
  </Route>
</Router>
```
