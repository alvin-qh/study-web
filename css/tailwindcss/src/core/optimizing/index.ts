import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Optimizing for Production', true);
  book.append([
    new Story('原理', '删除未使用的样式类', 'markdown')
      .code(`\
PurgeCSS 插件通过正则表达式 \`/[^<>"'ˋ\\s]*[^<>"'ˋ\\s:]/g\` 匹配所有的样式类名称, 并删除未在代码中使用的样式类

所以, 不能使用字符串拼接的方式产生 Tailwind 样式类名称, 这会导致 PurgeCSS 失效

\`\`\`html
<!-- 不要使用字符串拼接方式产生 Tailwind 类名 -->
<!--
<div class="text-{{ error ? 'red' : 'green' }}-600"></div>
-->

<!-- 使用完整的 Tailwind 类名 -->
<div class="{{ error ? 'text-red-600' : 'text-green-600' }}"></div>
\`\`\`
`),
    new Story('配置 Tailwind Purge 功能', '指定从那些文件中查找正在使用的 Tailwind 样式类', 'markdown')
      .code(`\
通过配置, 指定处理器扫描那些文件, 这些文件中使用到的 Tailwind 样式类会被保留, 其余的则会被删除, 以减少最终 css 文件的尺寸

\`\`\`javascript
// tailwind.config.js
module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
  theme: {},
  plugins: []
}
\`\`\`

当编译 CSS 时, 若 \`NODE_ENV\` 设置为 'production', Tailwind 将自动从生成的 CSS 中清除未使用的样式
`),
    new Story('手动启用 Purge 功能', '手动指定需要进行 Purge 处理的文件', 'markdown')
      .code(`\
若 \`purge.enabled\` 为 \`true\`, 则只对 \`purge.content\` 指定的文件进行样式类清理

\`\`\`javascript
// tailwind.config.js
module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.html'],
  },
}
\`\`\`
`),
    new Story('保留HTML元素', '默认情况下, Tailwind 将保留所有基本的 HTML 元素样式在您的 CSS 中, 如 html, body, p, h1 等标签的样式。', 'markdown')
      .code(`\
## 基本用途

要开始使用, 请使用 \`purge\` 选项为您所有的模板文件提供一个路径数组。

\`\`\`javascript
// tailwind.config.js
module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx'
  ],
  theme: {},
  plugins: []
}
\`\`\`
`),
    new Story('清理特定层', '指定 Purge 清理的 Tailwind 层', 'markdown')
      .code(`\
默认情况下, Tailwind 将清除 \`base\`, \`components\` 和 \`utilities\` 层中的所有样式

可以使用 \`layers\` 选项手动指定您想清除的层

\`\`\`javascript
// tailwind.config.js
module.exports = {
  purge: {
    layers: ['components', 'utilities'],
    content: ['./src/**/*.html']
  },
}
\`\`\`
`),
    new Story('移除所有未使用到的样式类', '清除包括 Tailwind 之外的所有样式类', 'markdown')
      .code(`\
默认情况下, Tailwind 将只删除它自己生成的未使用的类, 或者被明确地包裹在 \`@layer\` 指令中。它不会从第三方 CSS 中移除未使用的样式

\`\`\`css
/* These styles will all be purged */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* These styles will be purged */
@layer components {
  .btn { /* ... */ }
}

/* These styles will not be purged */
.flatpickr-innerContainer { /* ... */ }
.flatpickr-weekdayContainer { /* ... */ }
.flatpickr-weekday { /* ... */ }
\`\`\`

这是为了避免意外地删除那些您可能需要的但在模板中没有直接引用的样式, 比如那些只在 \`node_modules\` 文件夹深处引用的类, 它们是其他依赖关系的一部分

如果需要删除所有未使用的样式, 设置 \`mode: 'all'\` 和 \`preserveHtmlElements: false\`, 并且要非常小心地提供可能引用任何类或HTML元素的所有文件的路径

\`\`\`javascript
// tailwind.config.js
module.exports = {
  purge: {
    mode: 'all',
    preserveHtmlElements: false,
    content: [
      './src/**/*.js',
      './node_modules/flatpickr/**/*.js'
    ]
  }
}
\`\`\`

> 不推荐这样做, 一般来说, 坚持使用保守的默认方法可以获得 \`99%\` 的文件大小的好处
`),
    new Story('PurgeCSS 选项', '清除包括 Tailwind 之外的所有样式类', 'markdown')
      .code(`\
如果您需要直接向 PurgeCSS 传递任何选项, 您可以使用 \`options\` 来实现

\`\`\`javascript
// tailwind.config.js
module.exports = {
  purge: {
    content: ['./src/**/*.html'],

    // These options are passed through directly to PurgeCSS
    options: {
      safelist: ['bg-red-500', 'px-4']
    }
  }
}
\`\`\`

这是为了避免意外地删除那些您可能需要的但在模板中没有直接引用的样式, 比如那些只在 \`node_modules\` 文件夹深处引用的类, 它们是其他依赖关系的一部分

如果需要删除所有未使用的样式, 设置 \`mode: 'all'\` 和 \`preserveHtmlElements: false\`, 并且要非常小心地提供可能引用任何类或HTML元素的所有文件的路径

\`\`\`javascript
// tailwind.config.js
module.exports = {
  purge: {
    mode: 'all',
    preserveHtmlElements: false,
    content: [
      './src/**/*.js',
      './node_modules/flatpickr/**/*.js'
    ]
  }
}
\`\`\`

> 不推荐这样做, 一般来说, 坚持使用保守的默认方法可以获得 \`99%\` 的文件大小的好处
`)
  ])
    .render();
};
