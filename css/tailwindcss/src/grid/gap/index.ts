import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Gap', true);
  book.append([
    new Story('Auto Columns', '使用 `gap-{size}` 来设置网格的间隔')
      .code(`\
<!--
  'gap-{n}'
-->
<div class="grid grid-cols-2 grid-flow-row gap-4 h-32 text-white text-lg font-semibold">
  <div class="flex items-center justify-center bg-blue-500">1</div>
  <div class="flex items-center justify-center bg-blue-500">2</div>
  <div class="flex items-center justify-center bg-blue-500">3</div>
  <div class="flex items-center justify-center bg-blue-500">4</div>
</div>
<hr class="my-6">
<!--
  'gap-x-{n}'
-->
<div class="grid grid-cols-2 grid-flow-row gap-x-4 h-32 text-white text-lg font-semibold">
  <div class="flex items-center justify-center bg-purple-500">1</div>
  <div class="flex items-center justify-center bg-purple-500">2</div>
  <div class="flex items-center justify-center bg-purple-500">3</div>
  <div class="flex items-center justify-center bg-purple-500">4</div>
</div>
<hr class="my-6">
<!--
  'gap-y-{n}'
-->
<div class="grid grid-cols-2 grid-flow-row gap-y-4 h-32 text-white text-lg font-semibold">
  <div class="flex items-center justify-center bg-cyan-500">1</div>
  <div class="flex items-center justify-center bg-cyan-500">2</div>
  <div class="flex items-center justify-center bg-cyan-500">3</div>
  <div class="flex items-center justify-center bg-cyan-500">4</div>
</div>
`),
    new Story('Responsive')
      .code(`\
<div class="grid grid-cols-2 grid-flow-row gap-4 md:gap-6 h-32 text-white text-lg font-semibold">
  <div class="flex items-center justify-center bg-rose-500">1</div>
  <div class="flex items-center justify-center bg-rose-500">2</div>
  <div class="flex items-center justify-center bg-rose-500">3</div>
  <div class="flex items-center justify-center bg-rose-500">4</div>
</div>
`),
    new Story('Customize', '一次性自定义 \'padding\', \'margin\', \'width\' 和 \'height\' 的值', 'javascript')
      .code(`\
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem'
      }
    }
  }
}
`),
    new Story('Customize', '可以通过 tailwind 配置增加、删除或修改 \'gap\' 部分的样式类', 'javascript')
      .code(`\
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      gap: {
        '11': '2.75rem',
        '13': '3.25rem'
      }
    }
  }
}
`)
  ])
    .render();
};
