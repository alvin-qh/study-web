# 使用 Tailwind CSS

## 1. 安装

- 安装 PostCSS 以及插件

    ```bash
    $ npm install --save-dev postcss@^7 tailwindcss@npm:@tailwindcss/postcss7-compat autoprefixer@^9 postcss-fixes postcss-pxtorem@^5
    # Or
    $ yarn add -D postcss@^7 tailwindcss@npm:@tailwindcss/postcss7-compat autoprefixer@^9 postcss-fixes postcss-pxtorem@^5
    ```

    > 目前 `customize-cra` 工具包包含的 `addPostcssPlugins` 插件暂时只支持到 PostCSS v7，所以需要安装稍低版本的 PostCSS 以及插件

- 配置 `addPostcssPlugins` 插件

  参加：[config-overrides.js 配置文件](../config-overrides.js)

    ```javascript
    module.exports = {
      webpack: override(
        // ...,
        addPostcssPlugins([
          require('postcss-fixes'),
          require('tailwindcss'),
          require('postcss-pxtorem')({
            rootValue: 75,
            propList: ['*'],
            minPixelValue: 2,
            selectorBlackList: ['am-']
          }),
          require('autoprefixer')
        ])
      )
    };
    ```

## 2. 配置 Tailwind

编辑 `tailwind.config.js`，设置 Tailwind CSS

参见：[tailwind.config.js 配置文件](../tailwind.config.js)

## 3. 使用 Tailwind

修改 [index.css](../src/index.css) 文件，包含 Tailwind 指令

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
