# Vue 基础

## 1. 创建工程

首先执行如下命令创建工程

```bash
npm init vite basic --template vue
```

该操作会创建 `basic` 目录, 并在其中初始化一个 nodejs 工程, 内容如下:

```plaintext
├── node_modules        <d>
├── package.json        <d>
├── pnpm-lock.yaml      <d>
├── public              <d>
├── src                 <d>
├── README.md           <f>
├── index.html          <f>
├── tsconfig.app.json   <f>
├── tsconfig.json       <f>
├── tsconfig.node.json  <f>
└── vite.config.ts      <f>
```

进入 `basic` 目录后, 执行如下命令即可启动开发服务器

```bash
pnpm install
pnpm dev
```
