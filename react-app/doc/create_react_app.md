# 使用 Create React App

> 参考: https://www.html.cn/create-react-app/docs/getting-started/

- [使用 Create React App](#使用-create-react-app)
  - [1. 创建应用](#1-创建应用)
    - [1.1. 安装 `create-react-app` 工具并创建应用](#11-安装-create-react-app-工具并创建应用)
    - [1.2. 启动 React 应用](#12-启动-react-应用)
  - [2. 开发设置](#2-开发设置)
    - [2.1. 添加 lint 支持](#21-添加-lint-支持)
    - [2.2. 配置 Chrome 浏览器调试](#22-配置-chrome-浏览器调试)
      - [2.2.1. Visual Studio Code](#221-visual-studio-code)
      - [2.2.2. WebStorm](#222-webstorm)
    - [2.3. Git hook](#23-git-hook)
    - [2.4. 集成常用组件](#24-集成常用组件)
      - [2.4.1. 集成 Storybook](#241-集成-storybook)
      - [2.4.2. 集成 Styleguidist](#242-集成-styleguidist)
      - [2.4.3 集成 Bundle analysis](#243-集成-bundle-analysis)
    - [2.5. 使用 HTTPS 进行调试](#25-使用-https-进行调试)

## 1. 创建应用

### 1.1. 安装 `create-react-app` 工具并创建应用

- 通过 `npx`

  ```bash
  $ npm install -g create-react-app   # Optional
  $ npx create-react-app my-react-app
  ```

- 通过 `npm`

  ```bash
  $ npm install -g create-react-app  # Optional
  $ npm init react-app my-react-app
  ``` 

- 通过 `yarn`

  ```bash
  $ yarn global add create-react-app  # Optional
  $ yarn create react-app my-react-app
  ```

### 1.2. 启动 React 应用

- `npm start` 或者 `yarn start`

  该命令以 `dev` 模式启动应用，地址为 `http://localhost:3000`.
  如果代码发送变换，则应用会被浏览器自动重载

- `npm test` 或者 `yarn test`

  运行测试

- `npm run build` 或者 `yarn build`

  编译或打包应用

## 2. 开发设置

### 2.1. 添加 lint 支持

在项目根路径增加 `.eslintrc.json` 文件，从 `react-app` 继承 lint 规则

```json
{
  "extends": "react-app"
}
```

### 2.2. 配置 Chrome 浏览器调试

#### 2.2.1. Visual Studio Code

1. 在 VSCode 中安装 "Debugger for Chrome" 插件

2. 将如下配置加入 `.vscode/launch.json` 文件中

    ```json
    {
      "version": "0.2.0",
      "configurations": [
        {
          "name": "Chrome",
          "type": "chrome",
          "request": "launch",
          "url": "http://localhost:3000",
          "webRoot": "${workspaceRoot}/src",
          "sourceMapPathOverrides": {
            "webpack:///src/*": "${webRoot}/*"
          }
        }
      ]
    }
    ```
    
3. 在 Chrome 中调试 (或运行) 应用

    运行 `yarn start` 命令行

    通过 'F5' 快捷键在 Chrome 中启动调试 (或者 'Shift + F9' 运行应用)

#### 2.2.2. WebStorm

1. 安装 "JetBrains IDE Support Chrome" 插件

2. 在 `Run` -> `Edit Configurations ...` 菜单项中, 点击 `+` 按钮并选择 `Javascript Debug`，在 URL 属性栏中填入 `http://localhost:3000`

3. 在 Chrome 中启动调试 (或运行) 应用

    执行 `yarn start` 命令行

    使用快捷键 `^D` (macOS) 或 `F9` (Windows) 启动调试

### 2.3. Git hook

使用 "prettier" 格式化代码

添加依赖项:

```bash
$ yarn add husky lint-staged prettier
```

在 `package.json` 文件中添加如下设置：

```json
"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
},
"lint-staged": {
  "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}": [
    "prettier --single-quote --write",
    "git add"
  ]
}
```

也可以直接通过命令行格式化代码

```bash
$ npx prettier --single-quote --write "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}"
```

### 2.4. 集成常用组件

#### 2.4.1. 集成 Storybook

1. 安装依赖

    ```bash
    $ yarn add storybook @storybook/react
    ```

2. 增加启动命令

    编辑 `package.json` 文件，增加如下启动项:

    ```json
    {
      "scripts": {
        "storybook": "start-storybook -p 9001 -c .storybook",
        "storybook:build": "build-storybook -c .storybook"
      }
    }
    ```

3. 创建配置文件

    在 `.storybook` 路径下增加 `config.js` 文件, 参考 [.storybook/config.js](../.storybook/config.js)

4. 添加 "Story" 文件

    在 `storybookds` 路径下增加 `.js` 文件. 参考 [storybooks/button-demo.js](../storybooks/button-demo.js)

5. 启动 "Storybook"

    ```bash
    $ yarn storybook
    ```

6. 为 "Storybook" 增加 `webpack.config.js` 配置 

    在 `.storybook` 路径下增加 `webpack.config.js`. 参考 [.storybook/webpack.config.js](../.storybook/webpack.config.js)

> 更多关于 "Storybook" 信息，参见 [Official Website](https://storybook.js.org/docs/react/get-started/introduction)

#### 2.4.2. 集成 Styleguidist

1. 安装依赖

    ```bash
    $ yarn add react-styleguidist
    ```

2. 设置启动命令

    编辑 `package.json` 文件, 增加如下配置:

    ```json
    {
      "scripts": {
        "styleguide": "styleguidist server",
        "styleguide:build": "styleguidist build"
      }
    }
    ```

3. 执行 styleguide

    ```bash
    $ yarn styleguide
    ```

#### 2.4.3 集成 Bundle analysis

1. 安装依赖

  ```bash
  $ yarn add source-map-explorer
  ```

2. 增加启动命令

    编辑 `package.json` 文件, 增加如下配置:

    ```json
    {
      "scripts": {
        "analyze": "source-map-explorer build/static/js/main.*"
      }
    }
    ```

3. 执行 bundle 分析工具

    ```bash
    $ yarn build
    $ yarn analyze
    ```

### 2.5. 使用 HTTPS 进行调试

1. 通过 `HTTP` 环境变量

    ```bash
    $ HTTP=true yarn start
    ```

2. 编辑 `.env` 文件，增加环境变量设置

    ```ini
    HTTP=true
    ```
