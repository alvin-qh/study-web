import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Using with Preprocessors', true);
  book.append([
    new Story("Tailwind as PostCSS", "将Tailwind用于PostCSS插件", "markdown")
      .code(`\
## PostCSS 预处理器

Tailwind 本身即一个 PostCSS 插件，可以配置与其它 PostCSS 插件一同使用（例如：\`autoprefixer\` 插件）

\`\`\`javascript
// postcss.config.js
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}
\`\`\`

引入 Tailwind CSS

\`\`\`css
@tailwind base;
@tailwind components;
@tailwind utilities;
\`\`\`

### 与 \`postcss-import\` 插件一同使用

安装插件

\`\`\`bash
# npm
$ npm install postcss-import

# yarn
$ yarn add postcss-import
\`\`\`

配置作为 PostCSS 配置中的第一个插件：

\`\`\`javascript
// postcss.config.js
module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}
\`\`\`

> 注意，使用 \`postcss-import\` 插件， 则 \`@import\` 语句必须在 CSS 的文件的开头

\`\`\`css
@import "./custom-base-style.css";

@tailwind base;
@tailwind components;
@tailwind utilities;
\`\`\`

为了避免 Tailwind 定义的指令和 CSS 指令冲突，可以在文件开头仅通过 \'@import\' 指令引入 Tailwind

\`\`\`css
@import "tailwindcss/base";
@import "./custom-base-styles.css";

@import "tailwindcss/components";
@import "./custom-components.css";

@import "tailwindcss/utilities";
@import "./custom-utilities.css";
\`\`\`

### 与 CSS 嵌套插件一同使用

安装插件

\`\`\`bash
# npm
npm install postcss-nested  # or postcss-nesting

# yarn
yarn add postcss-nested  # or postcss-nesting
\`\`\`

配置添加在 Tailwind 插件之后，Autoprefixer 插件之前

\`\`\`javascript
// postcss.config.js
module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-nested'), // or require('postcss-nesting')
    require('autoprefixer'),
  ]
}
\`\`\`

### 与 CSS 变量插件一同使用

一般情况下，无需增加 CSS 变量插件（\`postcss-custom-properties\`），主流浏览器已经对 CSS 自定义属性（即 CSS 变量）有了良好的支持。除非要支持 IE11 等老式浏览器。

\`\`\`bash
# npm
npm install postcss-custom-properties

# yarn
yarn add postcss-custom-properties
\`\`\`

配置添加在 Tailwind 插件之后，Autoprefixer 插件之前

\`\`\`javascript
// postcss.config.js
module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-nested'),
    require('postcss-custom-properties'),
    require('autoprefixer'),
  ]
}
\`\`\`

### 支持未来的 CSS 功能

通过 \`postcss-preset-env\` 插件为您的项目添加对即将到来的 CSS 特性的支持。

\`\`\`bash
# npm
npm install postcss-preset-env

# yarn
yarn add postcss-preset-env
\`\`\`

配置添加在 Tailwind 插件之后，Autoprefixer 插件之前

\`\`\`javascript
// postcss.config.js
module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-preset-env')({ stage: 1 })
  ]
}
\`\`\`

> 需要注意的是，如果使用 \`postcss-reset-env\`，则无需再添加 \`postcss-import\`, \`postcss-nested\`, \`postcss-custom-properties\` 等插件
`),
    new Story("与其它预处理器共同使用", "配合 Tailwind 使用 Sass、Less 或 Stylus", "markdown")
      .code(`\
要使用 Tailwind 的预处理工具，如 Sass，Less，或 Stylus，需要添加一个额外的构建步骤。如果已经在项目中使用 Autoprefixer，则具备了类似的设置。

### 无法混用函数

例如，无法混用 Sass 和 Tailwind 函数，因为解析的时机不同

\`\`\`css
.alert {
  background-color: darken(theme('colors.red.500'), 10%);  /* 无法将 theme 函数与 darken 混用 */
}
\`\`\`

### Sass

Sass 无法和 \`!import\` 指令一同工作，需要使用**插值**方法绕过限制

\`\`\`css
/* !import 无法与 Sass 工作 */
/*
.alert {
  @apply bg-red-500 !important;
}
*/

/* 使用插值方法支持 !import */
.alert {
  @apply bg-red-500 #{!important};
}
\`\`\`

### Less

Less 无法和媒体查询指令一同使用，需要通过 \`theme()\` 函数或者避免嵌套的方式解决

\`\`\`css
/* @screen 指令无法和 Less 一同工作 */
/*
.card {
  @apply rounded-none;

  @screen sm {
    @apply rounded-lg;
  }
}
*/

/* 不使用 @screen，使用 theme() 函数常规媒体查询指令 */
.card {
  @apply rounded-none;

  @media (min-width: theme('screens.sm')) {
    @apply rounded-lg;
  }
}

/* 使用 @screen，并保证放在嵌套最外层 */
.card {
  @apply rounded-none;
}
@screen sm {
  .card {
    @apply rounded-lg;
  }
}
\`\`\`

### Stylus

Stylus 和 \`@apply\` 指令冲突，需要使用 \`@css\` 指令进行包裹

\`\`\`css
/* Stylus 无法和 @apply 指令一同工作 */
/*
.card {
  @apply rounded-lg bg-white p-4;
}
*/

/* 使用 @css 来避免被 Stylus 处理 */
/* 注意：不能在 @css 块中使用任何 Stylus 功能 */
@css {
  .card {
    @apply rounded-lg bg-white p-4;
  }
}

/* 也可以通过 theme() 代替 @apply */
.card {
  border-radius: theme('borderRadius.lg');
  background-color: theme('colors.white');
  padding: theme('spacing.4');
}
\`\`\`

和 Less 类似，Stylus 不支持嵌套媒体查询指令

\`\`\`css
/* Stylus 检查这是一个 Tailwind 媒体查询指令 */
/*
.card {
  border-radius: 0;

  @screen sm {
    border-radius: theme('borderRadius.lg');
  }
}
*/

/* 使用常规的媒体查询和 theme() */
.card {
  border-radius: 0;

  @media (min-width: theme('screens.sm')) {
    border-radius: theme('borderRadius.lg');
  }
}

/* 在顶层使用 @screen 指令 */
.card {
  border-radius: 0;
}
@screen sm {
  .card {
    border-radius: theme('borderRadius.lg');
  }
}
\`\`\`
`),
  ])
    .render();
}
