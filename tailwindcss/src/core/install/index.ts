import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Install Tailwind', true);
  book.append([
    new Story("以 PostCSS 插件的形式安装 Tailwind CSS", "", "markdown")
      .code(`\
### 通过 npm 安装 Tailwind

对于大多数项目（并利用 Tailwind 的自定义功能），需要通过 npm 安装 Tailwind 及其依赖项

\`\`\`bash
$ npm install tailwindcss@latest postcss@latest autoprefixer@latest 
\`\`\`

由于 Tailwind 不会自动添加浏览器引擎前缀到生成的 CSS 中，建议同时安装 \`autoprefixer\` 去处理这个问题

### 作为 PostCSS 插件来添加 Tailwind

将 \`tailwindcss\` 和 \`autoprefixer\` 添加到项目的 PostCSS 配置中。 多数情况下是项目根目录下的 \`postcss.config.js\` 文件，但也可能是 \`.postcssrc\` 文件或是由 \`package.json\` 文件中的 \`postcss\` 项目所指定

\`\`\`javascript
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
}
\`\`\`

### 创建 Tailwind 配置文件

通过如下 npm 命令：

\`\`\`bash
$ npx tailwindcss init
\`\`\`

这将会在项目的根目录创建一个最小的 \`tailwind.config.js\` 文件

\`\`\`javascript
// tailwind.config.js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: []
}
\`\`\`
`),
   new Story("在 CSS 中引入 Tailwind", "", "markdown")
      .code(`\
### 通过 \`@指令\` 在 CSS 中注入 Tailwind 的 \`@base\`, \`@components\`, \`@utilities\`

\`\`\`css
/* ./your-css-folder/styles.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
\`\`\`

Tailwind 将在构建时将这些指令替换为实际的 CSS 样式类

如果使用 \`postcss-import\`，请使用 \`@import\` 指令引入 Tailwind CSS

\`\`\`javascript
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
\`\`\`

如果需要将 CSS 整合到 \`.js\` 文件中 (例如 React 这类支持在 \`.js\` 中书写 CSS 样式的框架)，可以将 Tailwind 直接引入到 \`.js\` 中，跳过 CSS

\`\`\`javascript
// app.js
import "tailwindcss/tailwind.css"
\`\`\`
`),
   new Story("使用自定义 CSS 文件", "基于 Tailwind 生成自定义的样式类", "markdown")
      .code(`\
\`\`\`css
/* ./src/tailwind.css */
@tailwind base;
@tailwind components;

.btn {
  @apply px-4 py-2 bg-blue-600 text-white rounded;
}

@tailwind utilities;
\`\`\`
`),
   new Story("自定义配置", "配置 Tailwind", "markdown")
      .code(`\
通过如下 npm 命令，在项目根路径下生成基本的 Tailwind 配置文件
\`\`\`bash
/* ./src/tailwind.css */
$ npx tailwindcss-cli@latest init
\`\`\`

生成的文件内容如下：
\`\`\`javascript
// tailwind.config.js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
\`\`\`
`),
  ])
    .render();
}
