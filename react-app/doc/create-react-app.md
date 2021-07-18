# 使用 Create React App

> 参考: [英文文档](https://reactjs.org/docs/create-a-new-react-app.html) | [中文文档](https://www.html.cn/create-react-app/docs/getting-started/)

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
    - [2.6. 使用 `customize-cra` 插件](#26-使用-customize-cra-插件)

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
$ npm install --save-dev husky lint-staged prettier
# 或者
$ yarn add -D husky lint-staged prettier
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
    $ npm install --save-dev storybook @storybook/react
    # 或者
    $ yarn add -D storybook @storybook/react
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
    $ npm install --save-dev react-styleguidist
    # 或者
    $ yarn add -D react-styleguidist
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
  $ npm install --save-dev source-map-explorer
  # 或者
  $ yarn add -D source-map-explorer
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

### 2.6. 使用 `customize-cra` 插件

`customize-cra` 插件用于设置自定义的 webpack 配置

1. 安装插件

    ```bash
    $ npm install --save-dev customize-cra
    # 或者
    $ yarn add -D customize-cra
    ```

2. 添加配置文件

    在项目根路径下增加 `config-overrides.js` 文件，参加 [config-overrides.js](../config-overrides.js)

    `config-overrides.js` 配置的基本格式如下：

    ```javascript
    module.exports = {
      webpack: override(
        config => {
          // 对 webpack config 对象进行操作
          return config;
        },
        addWebpackAlias({
          // 设置文件引用别名
        }),
        fixBabelImports('import', { 
          // 设置 import 引用配置
        }),
        addPostcssPlugins([
          // 设置 postcss 插件
        ])
      ),
      devServer: overrideDevServer(
        config => {
          // 设置开发服务器配置
          return config;
        }
      )
    };
    ```

3. 使用 `customize-cra` 插件

    - 安装依赖

      ```bash
      $ npm install --save-dev react-app-rewired
      # 或者
      $ yarn add -D react-app-rewired
      ```

    - 编辑 `package.json` 文件，设置启动命令

      ```json
      {
        "scripts": {
          // "start": "react-scripts start",
          "start": "react-app-rewired start"
        }
      }
      ```

      即将 `react-scripts <cmd>` 命令改为 `react-app-rewired <cmd>` 即可

4. 常用配置范例

   - 设置 GZIP 压缩选项

      安装依赖

      ```bash
      $ npm install --save-dev compression-webpack-plugin
      # 或者
      $ yarn add -D compression-webpack-plugin
      ```

      配置插件

      ```javascript
      config => {
        // ...
        if (process.env.COMPRESS_USE_GZIP === 'true') {
          config.plugins.push(
            new CompressionWebpackPlugin({
              test: /\.(js|css)$/,
              threshold: 1024
            })
          )
        }
        return config;
      }
      ```

   - 设置 devtools 配置

      ```javascript
      config => {
        // ...
        config.devtool = false;
        return config;
      }
      ```

   - 设置引用路径别名

      ```javascript
      addWebpackAlias({
        '@': path.join(__dirname, '.', 'src'),   // '__dirname/src' 的别名
        '@pages': path.join(__dirname, '.', 'src/pages'),   // '__dirname/src/pages' 的别名
        '@components': path.join(__dirname, '.', 'src/components')    // '__dirname/src/components' 的别名
      })
      ```

   - <span id="use-plugin-babel-plugin-import">使用 `babel-plugin-import` 插件</span>

      该插件的作用是：将 `import` 写法自动转换为按需引入的方式

      - 安装插件

        ```bash
        $ npm install --save-dev babel-plugin-import
        # 或者
        $ yarn add -D babel-plugin-import
        ```

      - 使用插件（以支持 Less 以及 antd 样式库为例）

        安装依赖

        ```bash
        $ npm install --save-dev less lessloader
        # 或者
        $ yarn add -D less lessloader
        ```

        配置插件

        ```javascript
        fixBabelImports('import', [
          { // support: 'import {...} from 'antd';
            libraryName: "antd",
            libraryDirectory: "lib",
            style: true
          }
        ]),
        addLessLoader(),      // 支持 less 文件
        addDecoratorLegacy()  // 支持修饰器写法
        ```

  - 配置 PostCSS 插件（以 `postcss-pxtorem` 插件为例）

    安装依赖

    ```bash
    $ npm install --save-dev postcss postcss-pxtorem
    # 或者
    $ yarn add -D postcss postcss-pxtorem
    ```

    ```javascript
    addPostcssPlugins([
      require('postcss-pxtorem')({
        rootValue: 75,
        propList: ['*'],
        minPixelValue: 2,
        selectorBlackList: ['am-']
      })
    ])
    ```
