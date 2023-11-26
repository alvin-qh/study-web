import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Text Decoration', true);
  book.append([
    new Story('Underline', '设置文本下划线')
      .code(`\
<!--
  'underline': 设置文本下划线
-->
<div class="bg-purple-100 px-4 py-6">
  <p class="underline text-lg font-medium text-purple-600">
    The quick brown fox jumped over the lazy dog.
  </p>
</div>
`),
    new Story('Line Through', '设置文本贯穿线')
      .code(`\
<!--
  'line-through': 设置文本贯穿线
-->
<div class="bg-rose-100 px-4 py-6">
  <p class="line-through text-lg font-medium text-rose-600">
    The quick brown fox jumped over the lazy dog.
  </p>
</div>
`),
    new Story('No Underline', '移除 `Underline` 或 `Line Through` 样式')
      .code(`\
<!--
  'no-underline': 移除'underline'或者'line-through'样式
-->
<div class="bg-yellow-100 text-lg font-medium px-4 py-6">
  <a class="no-underline text-yellow-600" href="javascript:;">Link with no underline</a>
</div>
`),
    new Story('Responsive', '使用屏幕尺寸前缀进行屏幕自适应设置')
      .code(`\
<p class="no-underline md:underline bg-green-100 text-green-800 text-lg font-medium px-4 py-6">
  The quick brown fox jumped over the lazy dog.
</p>
`),
    new Story('Hover', '设置鼠标指针悬停时的样式')
      .code(`\
<!--
  'hover:': 设定鼠标悬停时的样式, 可以结合'screen:'同时设置自适应
-->
<p class="bg-blue-100 text-lg font-medium px-4 py-6">
  <a href="#" class="no-underline hover:underline text-blue-800">
    Link with underline when mouse hover
  </a>
</p>
`),
    new Story('Focus', '设置具备焦点时的样式')
      .code(`\
<div class="bg-cyan-100 px-4 py-6">
  <input class="focus:underline border-cyan-400 focus:border-cyan-600 focus:outline-none text-lg border rounded-md p-2 w-1/2" value="Focus Me">
</div>
`),
    new Story('Variants', '', 'javascript')
      .code(`\
/* tailwind.config.js */
module.exports = {
  variants: {
    extend: {
      textDecoration: ['active']
    }
  }
}
`),
    new Story('Disabling', '', 'javascript')
      .code(`\
/* tailwind.config.js */
module.exports = {
  corePlugins: {
    textDecoration: false
  }
}
`)
  ])
    .render();
};
