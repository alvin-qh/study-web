import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Display', true);
  book.append([
    new Story('Block', '定义块状元素, 块状元素独立占据一行, 允许定义元素的宽度和高度')
      .code(`\
<!--
  'block': 定义块元素
-->
<div class="space-y-4 text-center text-lg text-white font-semibold">
  <span class="block bg-blue-400 py-2">1</span>
  <span class="block bg-blue-400 py-2">2</span>
  <span class="block bg-blue-400 py-2">3</span>
</div>
`),
    new Story('Flow-Root', '定义有自己的 <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context" target="_blank">Block Formatting Context</a> 的块级元素')
      .code(`\
<!--
  'flow-root': 令元素具备 Block Formatting Context
-->
<div class="space-y-4 text-lg text-white font-semibold">
  <div class="flow-root text-center">
    <div class="my-2 bg-red-400 py-2">1</div>
  </div>
  <div class="flow-root text-center">
    <div class="my-2 bg-red-400 py-2">2</div>
  </div>
</div>
`),
    new Story('Inline Block', '定义内联块级元素, 元素自适应宽度, 多个内联快元素合并在一行, 自动换行, 允许定义高度和宽度')
      .code(`\
<!--
  'inline-block': 定义一个内联块级元素
-->
<div class="space-x-4 text-lg text-white font-semibold">
  <div class="inline-block px-4 py-2 bg-green-400">1</div>
  <div class="inline-block px-4 py-2 bg-green-400">2</div>
  <div class="inline-block px-4 py-2 bg-green-400">3</div>
</div>
`),
    new Story('Inline', '定义内联元素, 元素自适应宽度和高度, 多个内联快元素合并在一行, 自动换行')
      .code(`\
<!--
  'inline': 定义一个内联元素
-->
<div class="space-x-4 text-lg text-white font-semibold">
  <div class="inline text-center px-4 py-2 bg-yellow-400">1</div>
  <div class="inline text-center px-4 py-2 bg-yellow-400"">2</div>
  <div class="inline text-center px-4 py-2 bg-yellow-400"">3</div>
</div>
`),
    new Story('Flex', '定义弹性布局的容器元素')
      .code(`\
<!--
  'flex': 定义一个具备“弹性布局”样式的元素
--> 
<div class="flex space-x-4 text-lg text-white font-semibold">
  <div class="flex-1 py-4 text-center bg-purple-400">1</div>
  <div class="flex-1 py-4 text-center bg-purple-400">2</div>
  <div class="flex-1 py-4 text-center bg-purple-400">3</div>
</div>
`),
    new Story('Inline Flex', '定义内联弹性布局的容器元素')
      .code(`\
<!--
  'inline-flex': 定义内联弹性布局容器
--> 
<div class="inline-flex space-x-4 text-lg text-white font-semibold">
  <div class="flex-1 px-6 py-4 text-center bg-rose-400">1</div>
  <div class="flex-1 px-6 py-4 text-center bg-rose-400">2</div>
  <div class="flex-1 px-6 py-4 text-center bg-rose-400">3</div>
</div>
`),
    new Story('Grid', '定义网格布局的容器元素')
      .code(`\
<!--
  'grid': 定义网格布局容器元素
  'gap-{n}': 定义网格内元素间的间隔
  'grid-cols-{n}': 定义网格布局的列数
--> 
<div class="grid gap-4 grid-cols-3 text-center text-lg text-white font-semibold">
  <div class="bg-green-400 py-4">1</div>
  <div class="bg-green-400 py-4">2</div>
  <div class="bg-green-400 py-4">3</div>
  <div class="bg-green-400 py-4">4</div>
  <div class="bg-green-400 py-4">5</div>
  <div class="bg-green-400 py-4">6</div>
  <div class="bg-green-400 py-4">7</div>
  <div class="bg-green-400 py-4">8</div>
  <div class="bg-green-400 py-4">9</div>
</div>
`),
    new Story('Inline Grid', '定义内联网格布局的容器元素, 容器不独立成行, 根据宽度自动换行')
      .code(`\
<!-- 
  'inline-grid': 定义内联网格布局的容器元素
  'gap-x-{n}': 网格内元素间的水平间距
  'grid-cols-{n}': 容器内网格布局的列数
--> 
<span class="inline-grid grid-cols-4 gap-x-4 my-4 text-center text-lg text-white font-semibold">
  <span class="bg-blue-400 py-4 px-8">1</span>
  <span class="bg-blue-400 py-4 px-8">1</span>
  <span class="bg-blue-400 py-4 px-8">1</span>
  <span class="bg-blue-400 py-4 px-8">1</span>
</span>
<span class="inline-grid grid-cols-4 gap-x-4 text-center text-lg text-white font-semibold">
  <span class="bg-blue-400 py-4 px-8">2</span>
  <span class="bg-blue-400 py-4 px-8">2</span>
  <span class="bg-blue-400 py-4 px-8">2</span>
  <span class="bg-blue-400 py-4 px-8">2</span>
</span>
`),
    new Story('Contents', '定义 "phantom" 容器, 即相当于当前容器内的元素直接隶属于当前容器的父级容器')
      .code(`\
<!--
  'content': 定义该样式的容器内元素, 相当于隶属于其父一级容器
  可以认为 3 个 'flex-1' 元素在同一级
-->
<div class="flex text-center text-lg text-white font-semibold">
  <div class="flex-1 bg-purple-400 mx-4 py-4">1</div>
  <div class="contents">
    <div class="flex-1 bg-purple-400 mx-4 py-4">2</div>
    <div class="flex-1 bg-purple-400 mx-4 py-4">3</div>
  </div>
  <div class="flex-1 bg-purple-400 mx-4 py-4">4</div>
</div>
`),
    new Story('Table', '定义表格布局的容器元素, 通过一组类来模拟 table, tbody, tr, td 元素')
      .code(`\
<!--
  'table': 定义表格布局元素
  'table-caption': 定义表标题
  'table-header-group', 'table-row-group', 'table-column-group' and 'table-footer-group': 模拟 thead, tbody 和 tfoot 标签
  'table-row', 'table-column', 'table-cell': 模拟 tr, th, td 元素
-->
<div class="table w-full text-lg text-white font-semibold">
  <div class="table-row-group">
    <div class="table-row">
      <div class="table-cell bg-yellow-400 py-4 px-2">A cell with more content</div>
      <div class="table-cell bg-yellow-600 py-4 px-2">Cell 2</div>
      <div class="table-cell bg-yellow-400 py-4 px-2">Cell 3</div>
    </div>
    <div class="table-row">
      <div class="table-cell bg-yellow-600 py-4 px-2">Cell 4</div>
      <div class="table-cell bg-yellow-400 py-4 px-2">A cell with more content</div>
      <div class="table-cell bg-yellow-600 py-4 px-2">Cell 6</div>
    </div>
  </div>
</div>
`),
    new Story('Hidden', '设置元素不显示, 且从 HTML 文档结构中删除')
      .code(`\
<!-- 
  'hidden': 相当于在元素上定义了 'display:none' 样式
-->
<div class="flex text-center text-lg text-white font-semibold">
  <div class="hidden flex-1 bg-red-400 mx-2 py-4">1</div>
  <div class="flex-1 bg-red-400 mx-2 py-4">2</div>
  <div class="flex-1 bg-red-400 mx-2 py-4">3</div>
</div>
`),
    new Story('Responsive')
      .code(`\
<div class="md:space-x-4 space-y-4 text-lg text-white font-semibold">
  <div class="bg-blue-400 py-4 px-6 md:inline-block block">1</div>
  <div class="bg-blue-400 py-4 px-6 md:inline-block block">2</div>
  <div class="bg-blue-400 py-4 px-6 md:inline-block block">3</div>
</div>
`),
    new Story('Variants', '', 'javascript')
      .code(`\
// tailwind.config.js
module.exports = {
  variants: {
    extend: {
      display: ['hover', 'focus']
    }
  }
}
`),
    new Story('Disabling', '', 'javascript')
      .code(`\
// tailwind.config.js
module.exports = {
  corePlugins: {
    display: false,
  }
}
`)
  ])
    .render();
};
