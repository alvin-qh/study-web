# Vite Plugins

- [Vite Plugins](#vite-plugins)
  - [1. Code style check](#1-code-style-check)
    - [vite-plugin-eslint](#vite-plugin-eslint)
      - [附: 在 VSCode 中配置 ESLint 插件](#附-在-vscode-中配置-eslint-插件)
    - [@nabla/vite-plugin-eslint](#nablavite-plugin-eslint)

## 1. Code style check

### vite-plugin-eslint

创建 ESLint 配置文件, 参考 [eslintrc.cjs](../.eslintrc.cjs)

```bash
pnpm create @eslint/config
```

安装 ESLint for Typescript 插件

```bash
pnpm install -D @typescript-eslint/eslint-plugin
```

在 `vite.config.ts` 中配置 ESLint 插件

```ts
import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";

export default defineConfig({
  plugins: [
    {
      ...eslint(),
      fix: true,
    }
  ],
});
```

更多配置参考 [vite-plugin-eslint 官网](https://github.com/gxmari007/vite-plugin-eslint)

#### 附: 在 VSCode 中配置 ESLint 插件

安装 ESLint 插件

![inline](./assets/eslint.png)

全局安装 ESLint

```bash
npm install -g eslint
```

在当前项目的配置 ([.vscode/settings.json](../.vscode/settings.json)) 中增加如下内容:

```json
{
  "eslint.enable": true,
  "eslint.options": {
    "overrideConfigFile": ".eslintrc.cjs"
  }
}
```

### @nabla/vite-plugin-eslint

由上述 `vite-plugin-eslint` 插件修改而来, 支持异步方式的代码检测, 速度更快, 但无法在检测到错误时停止项目编译

参考: [官网说明](https://github.com/nabla/vite-plugin-eslint)
