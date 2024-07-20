import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Install UnoCSS', true);
  book.append([
    new Story('以 PostCSS 插件的形式安装 UnoCSS', '', 'markdown')
      .code(`\
### 通过 pnpm 安装 UnoCSS

对于大多数项目 (并利用 UnoCSS 的自定义功能), 需要通过 pnpm 安装 UnoCSS 及其依赖项

\`\`\`bash
$ pnpm add -D @unocss/postcss postcss@latest autoprefixer@latest
\`\`\`

由于 UnoCSS 不会自动添加浏览器引擎前缀到生成的 CSS 中, 建议同时安装 \`autoprefixer\` 去处理这个问题

### 作为 PostCSS 插件来添加 UnoCSS

将 \`unocss\` 和 \`autoprefixer\` 添加到项目的 PostCSS 配置中。 多数情况下是项目根目录下的 \`postcss.config.js\` 文件, 但也可能是 \`.postcssrc\` 文件或是由 \`package.json\` 文件中的 \`postcss\` 项目所指定

\`\`\`javascript
// postcss.config.cjs
module.exports = {
  plugins: [
    '@unocss/postcss',
    'postcss-fixes',
    'autoprefixer'
  ]
};
\`\`\`

### 创建 UnoCSS 配置文件

这将会在项目的根目录创建一个最小的 \`uno.config.ts\` 文件

\`\`\`javascript
// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss';

export default defineConfig({
  shortcuts: [
  ],
  theme: {
    colors: {
    }
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      fonts: {
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  content: {
    filesystem: [
      '**/*.{html,js,ts,jsx,tsx}'
    ]
  },
})

\`\`\`
`),
    new Story('在 CSS 中引入 UnoCSS', '', 'markdown')
      .code(`\
### 通过 \`@指令\` 在 CSS 中注入 UnoCSS 的 \`@unocss\` 指令

\`\`\`css
/* Style css */
@unocss preflights;
@unocss default;

/*
  Fallback layer. It's always recommended to include.
  Only unused layers will be injected here.
*/
@unocss;
\`\`\`


如果需要将 CSS 整合到 \`.ts\` 文件中 (例如 React 这类支持在 \`.ts\` 中书写 CSS 样式的框架), 可以将 UnoCSS 直接引入到 \`.ts\` 中, 跳过 CSS

\`\`\`javascript
// app.ts
import 'uno.css'
\`\`\`
`),
    new Story('使用自定义 CSS 文件', '基于 UnoCSS 生成自定义的样式类', 'markdown')
      .code(`\
\`\`\`css
/* ./src/common.css */
@unocss preflights;
@unocss default;

.btn {
  @apply py-2 px-4 font-semibold rounded-lg shadow-md;
}

@unocss
\`\`\`
`),
    new Story('自定义配置', '配置 UnoCSS', 'markdown')
      .code(`\
通过如下 npm 命令, 在项目根路径下生成基本的 UnoCSS 配置文件

安装 UnoCSS 工具链

\`\`\`bash
# install unocss toolchain
$ pnpm add -D unocss
\`\`\`

或者仅安装 UnoCSS 命令行工具

\`\`\`bash
# install unocss cli
$ pnpm add -D @unocss/cli
\`\`\`

通过如下命令, 可对目标文件进行处理, 并生成对应的 \`.css\` 文件

\`\`\`bash
$ unocss 'src/pages/**/*.ts' 'site/components/**/*.ts'
\`\`\`

可以添加监控, 在目标文件变化时自动进行处理

\`\`\`bash
$ unocss 'src/pages/**/*.ts' 'site/components/**/*.ts' --watch
\`\`\`

通过 UnoCSS cli 工具, 可以快速创建 \`uno.config.ts\` 配置文件

\`\`\`bash
$ unocss -c <file>
\`\`\`

其它命令行参数如下:

| Options                      |                                                                                                             |
|:-----------------------------|-------------------------------------------------------------------------------------------------------------|
| \`-v, --version\`            | Display the current version of UnoCSS                                                                       |
| \`-c, --config-file <file>\` | Config file                                                                                                 |
| \`-o, --out-file <file>\`    | The output filename for the generated UnoCSS file. Defaults to \`uno.css\` in the current working directory |
| \`--stdout\`                 | Write the generated UnoCSS file to STDOUT. Will cause the \`--watch\` and \`--out-file\` being ignored      |
| \`-w, --watch\`              | Indicates if the files found by the glob pattern should be watched                                          |
| \`--preflights\`             | Enable preflight styles                                                                                     |
| \`--write-transformed\`      | Update source files with transformed utilities                                                              |
| \`-m, --minify\`             | Minify generated CSS                                                                                        |
| \`-h, --help\`               | Display available CLI options                                                                               |
`)
  ])
    .render();
};
