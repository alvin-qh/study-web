import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Grid Template Columns', true);
  book.append([
    new Story('Column Span', '使用 `col-span-{n}` 功能类使网格元素跨越n列')
      .code(`\
<!--
  'col-span-{n}': 使网格元素跨越n列
-->
<div class="grid grid-cols-3 gap-4 h-48 text-white text-lg font-semibold">
  <div class="flex items-center justify-center bg-purple-300">1</div>
  <div class="flex items-center justify-center bg-purple-300">2</div>
  <div class="flex items-center justify-center bg-purple-300">3</div>
  <div class="col-span-2 flex items-center justify-center bg-purple-500">4</div>
  <div class="flex items-center justify-center bg-purple-300">5</div>
  <div class="flex items-center justify-center bg-purple-300">6</div>
  <div class="col-span-2 flex items-center justify-center bg-purple-500">7</div>
</div>
`),
    new Story('Start / End', '使用 `col-start-{n}` 和 `col-end-{n}` 样式类, 使元素以第 `n` 条网格线为起点或终点。这些功能类也可以与 `col-span-{n}` 样式类结合使用, 来跨越特定数量的列')
      .code(`\
<!--
  'col-start-{n} / col-end-{n}': 注意, 数字计算均是从1开始, cols+1结束
-->
<div class="grid grid-cols-6 gap-4 h-48 overflow-y-auto text-white text-lg font-semibold">
  <div class="flex items-center justify-center bg-stripes bg-stripes-light-blue-500"></div>
  <div class="col-start-2 col-span-4 flex items-center justify-center bg-light-blue-500">1</div>
  <div class="flex items-center justify-center bg-stripes bg-stripes-light-blue-500"></div>
  <div class="col-start-1 col-end-3 flex items-center justify-center bg-light-blue-500">2</div>
  <div class="flex items-center justify-center bg-stripes bg-stripes-light-blue-500"></div>
  <div class="flex items-center justify-center bg-stripes bg-stripes-light-blue-500"></div>
  <div class="col-end-7 col-span-2 flex items-center justify-center bg-light-blue-500">3</div>
  <div class="col-start-1 col-end-7 flex items-center justify-center bg-light-blue-500">3</div>
</div>
`),
    new Story('Responsive')
      .code(`\
<div class="grid grid-cols-6 gap-4 h-48 overflow-y-auto text-white text-lg font-semibold">
  <div class="col-start-1 col-span-2 md:col-span-6 flex items-center justify-center bg-orange-500">1</div>
  <div class="col-start-1 col-span-2 md:col-span-6 flex items-center justify-center bg-orange-500">2</div>
  <div class="col-start-1 col-span-2 md:col-span-6 flex items-center justify-center bg-orange-500">3</div>
</div>
`),
    new Story('Customize', '可以通过修改tailwind配置, 增加更多的样式类', 'javascript')
      .code(`\
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      gridColumn: {
        'span-16': 'span 16 / span 16'
      },
      gridColumnStart: {
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17'
      },
      gridColumnEnd: {
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17'
      }
    }
  }
}
`)
  ])
    .render();
};
