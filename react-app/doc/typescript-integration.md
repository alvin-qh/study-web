# 集成 Typescript

## 1. 安装 Typescript

```bash
$ npm install --save-dev typescript
# Or
$ yarn add -D typescript
```

## 2. 配置 Typescript

- 增加 `tsconfig.json`

  参见：[tsconfig.json 配置文件](../tsconfig.json)

  ```json
  {
    "compilerOptions": {
      // ...
      "allowJs": true,    // 支持 js 文件
      "target": "es5",    // 编辑为 es5
      "module": "esnext", // 支持 es 草案语法
      "jsx": "react-jsx", // 使用 jsx 模板语法
      "lib": [
        "dom",
        "dom.iterable",
        "scripthost",
        "esnext"
      ]
    },
    "include": [      // 需要编译的文件列表
      "src/**/*.ts",
      "src/**/*.tsx"
    ],
    "exclude": [      // 无需编译的文件列表
      "node_modules",
      "**/*.spec.ts"
    ]
  }
  ```

- 增加 `.prettierrc.js`

  用于规范 Typescript 语法格式，参见：[.prettierrc.js 配置文件](../.prettierrc.js)

- 增加 `.eslintrc.json`

  用于 Typescript 和 JS（ES6）文件的语法、类型检查，参见：[.eslintrc.json 配置文件](../.eslintrc.json)

## 3. 使用 Typescript

- 修改包含 JSX 模板语法的 `.js` 文件为 `.tsx` 文件

- 修改普通 `.js` 文件为 `.ts` 文件
 

## 4. 其它配置

### 4.1. 修改 `resolve.extension`，增加 `.ts`, `.tsx` 后缀名为 `import` 默认后缀名

编辑 `config-overrides.js`，增加 `resolve` 配置：

```javascript
module.exports = {
  webpack: override(
    config => {
      //...
      config.resolve = {
        ...config.resolve,
        extensions: [".js", ".json", ".ts", ".tsx"]
      }
      return config;
    },
    // ...
  ),
  // ...
};
```

此时，可以通过 `import Foo from './Foo'` 导入 `./Foo.tsx` 文件，通过 `import { foo, bar } from 'foobar'` 导入 `foobar.ts` 文件

### 4.2. 设置路径 Alias

增加 `tsconfig.paths.json` 配置文件，参见：[tsconfig.paths.json](../tsconfig.paths.json)，配置常用路径的别名

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": [              // 设置'@'表示'src'路径，即'@index'表示'src/index.ts'文件
        "src/*"
      ],
      "@pages/*": [         // 设置'@pages'表示'src/pages'路径，即'@pages/Home'表示'src/pages/Home.tsx'文件
        "src/pages/*"
      ],
      "@components/*": [    // 设置'@components'表示'src/components'路径，即'@components/Loading'表示'src/components/Loading.tsx'文件
        "src/components/*"
      ]
    }
  }
}
```

修改 `config-overrides.js`，增加 Alias 配置

- 安装插件

    ```bash
    $ npm install --save-dev react-app-rewire-alias
    # Or
    $ yarn add -D react-app-rewire-alias
    ```

- 在 Webpack 中配置插件

    ```javascript
    // config-overrides.js
    const {alias, configPaths} = require('react-app-rewire-alias');

    module.exports = {
      webpack: override(
        config => {
          // ...
          return alias(configPaths('./tsconfig.paths.json'))(config);
        },
        // ...
      ),
      // ...
    };
    ```

- 在 tsconfig 中配置 Alias

  修改 `tsconfig.json` 文件

  ```json
  {
    "compilerOptions": {  
      // ...
    },
    "include": [
      // ...
    ],
    "exclude": [
      // ...
    ],
    "extends": "./tsconfig.paths.json"
  }
  ```
