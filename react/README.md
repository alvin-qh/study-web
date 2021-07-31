# 创建 React App

## 1. 使用 `create-react-app` 工具链

### 1.1. 创建 React 应用

- 通过 `npx` 工具

  ```bash
  $ npm install -g create-react-app   # Optional
  $ npx create-react-app my-react-app
  ```

- 通过 `npm` 工具

  ```bash
  $ npm install -g create-react-app  # Optional
  $ npm init react-app my-react-app
  ``` 

- 通过 `yarn` 工具

  ```bash
  $ yarn global add create-react-app  # Optional
  $ yarn create react-app my-react-app
  ```

### 1.2. 命令行

- 通过 `npm start` 或者 `yarn start` 命令

  该命令以 `dev` 模式启动应用，地址为 `http://localhost:3000`.
  如果代码发送变换，则应用会被浏览器自动重载

- `npm test` 或 `yarn test`

  运行测试

- `npm run build` 或 `yarn build`

  编译或打包应用

### 1.3. Create React App 详解

参考：[Create React App](./doc/create-react-app.md)

## 2. 使用 React Router 组件

参考：[React Router](doc/react-router.md)

## 3. 集成 Tailwind CSS

参考：[Tailwind CSS](doc/use-tailwindcss.md)

## 4. 集成 Typescript

参考：[Typescript](doc/typescript-integration.md)