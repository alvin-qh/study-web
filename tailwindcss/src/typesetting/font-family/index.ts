import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Font Family', true);
  book.append([
    new Story("Sans-Serif", "使用网络安全的无衬线字体")
      .code(`\
<!--
  'font-sans': 使用网络安全的无衬线字体
-->
<p class="font-sans text-xl px-4 py-6 bg-light-blue-200">
  The quick brown fox jumps over the lazy dog.
</p>
`),
    new Story("Serif", "使用网络安全的衬线字体")
      .code(`\
<!--
  'font-serif': 使用网络安全的衬线字体
-->
<p class="font-serif text-xl px-4 py-6 bg-green-200">
  The quick brown fox jumps over the lazy dog.
</p>
`),
    new Story("Monospaced", "使用网络安全的等宽字体")
      .code(`\
<!--
  'font-mono': 使用网络安全的等宽字体
-->
<p class="font-mono text-xl px-4 py-6 bg-indigo-200">
  The quick brown fox jumps over the lazy dog.
</p>
`),
    new Story("Responsive")
      .code(`\
<p class="font-sans md:font-serif text-xl px-4 py-6 bg-rose-200">
  The quick brown fox jumps over the lazy dog.
</p>
`),
    new Story("Customize", "通过编辑您的Tailwind配置中的'theme.fontFamily'部分来改变、添加或删除字体样式类", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  theme: {
    fontFamily: {
//    'sans': ['ui-sans-serif', 'system-ui', ...],
//    'serif': ['ui-serif', 'Georgia', ...],
//    'mono': ['ui-monospace', 'SFMono-Regular', ...],
      'display': ['Oswald', ...],
      'body': ['Open Sans', ...]
    }
  }
}
`),
   new Story("Format of Font Family", "字体序列可以指定为一个数组或一个简单的逗号分隔的字符串", "javascript")
      .code(`\
{
  // Array format:
  'sans': ['Helvetica', 'Arial', 'sans-serif'],

  // Comma-delimited format:
  'sans': 'Helvetica, Arial, sans-serif',

  // Won't work:
  'sans': ['Exo 2', ...],

  // Add quotes:
  'sans': ['"Exo 2"', ...],

  // ...or escape the space:
  'sans': ['Exo\\ 2', ...]
}
`),
    new Story("Variants", "", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  variants: {
    extend: {
      fontFamily: ['hover', 'focus']
    }
  }
}`),
    new Story("Disabling", "", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  corePlugins: {
    fontFamily: false
  }
}`)
  ])
    .render();
}
