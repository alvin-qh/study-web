import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Grid Row Start / End', true);
  book.append([
    new Story("Row Span", "使用'row-span-{n}'功能类使网格元素跨越n行")
      .code(`\
<!--
  'col-span-{n}': 使网格元素跨越n列
-->
<div class="grid grid-rows-3 grid-flow-col gap-4 h-48 text-white text-lg font-semibold">
  <div class="row-span-3 flex items-center justify-center bg-fuchsia-500">1</div>
  <div class="col-span-2 flex items-center justify-center bg-fuchsia-300">2</div>
  <div class="row-span-2 col-span-2 flex items-center justify-center bg-fuchsia-500">3</div>
</div>
`),
    new Story("Start / End", "使用'row-start-{n}'和'row-end-{n}'样式类，使元素以第n条网格线为起点或终点。这些功能类也可以与'row-span-{n}'样式类结合使用，来跨越特定数量的列")
      .code(`\
<!--
  'row-start-{n} / row-end-{n}': 注意，数字计算均是从1开始，rows+1结束
-->
<div class="grid grid-rows-3 grid-flow-col gap-4 h-48 text-white text-lg font-semibold">
  <div class="flex items-center justify-center bg-stripes bg-stripes-light-blue-500"></div>
  <div class="row-start-2 row-span-2 flex items-center justify-center bg-light-blue-500">1</div>
  <div class="row-end-3 row-span-2 flex items-center justify-center bg-light-blue-500">2</div>
  <div class="flex items-center justify-center bg-stripes bg-stripes-light-blue-500"></div>
  <div class="row-start-1 row-end-4 flex items-center justify-center bg-light-blue-500">2</div>
</div>
`),
    new Story("Responsive")
      .code(`\
<div class="grid grid-rows-3 grid-flow-col gap-4 h-48 overflow-y-auto text-white text-lg font-semibold">
  <div class="row-start-1 row-span-2 md:row-span-3 flex items-center justify-center bg-orange-500">1</div>
  <div class="row-start-1 row-span-2 md:row-span-3 flex items-center justify-center bg-orange-500">2</div>
  <div class="row-start-1 row-span-2 md:row-span-3 flex items-center justify-center bg-orange-500">3</div>
</div>
`),
    new Story("Customize", "可以通过修改tailwind配置，增加更多的样式类", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      // ...
      gridRow: {
        'span-16': 'span 16 / span 16',
      },
      gridRowStart: {
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
      },
      gridRowEnd: {
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
      }
    }
  }
}
`),
    new Story("Variants", "", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  variants: {
    extend: {
      // ...
      gridRow: ['hover', 'focus'],
      gridRowStart: ['hover', 'focus'],
      gridRowEnd: ['hover', 'focus']
    }
  }
}
`),
    new Story("Disabling", "", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  variants: {
    extend: {
      // ...
      gridRow: false,
      gridRowStart: false,
      gridRowEnd: false,
    }
  }
}`)
  ])
    .render();
};
