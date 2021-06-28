import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Grid Template Rows', true);
  book.append([
    new Story("Rows", "使用'grid-rows-{n}'样式类来创建有n个同等大小行的网格")
      .code(`\
<!--
  'grid-rows-{n}': 使用'grid-rows-{n}'样式类来创建有n个同等大小行的网格
  'grid-flow-col': 根据设定的行数('grid-rows-{n}')自动产生对应的列
-->
<div class="grid grid-rows-3 grid-flow-col gap-4 h-48 text-white text-lg font-semibold">
  <div class="flex items-center justify-center bg-light-blue-500">1</div>
  <div class="flex items-center justify-center bg-light-blue-500">2</div>
  <div class="flex items-center justify-center bg-light-blue-500">3</div>
  <div class="flex items-center justify-center bg-light-blue-500">4</div>
  <div class="flex items-center justify-center bg-light-blue-500">5</div>
  <div class="flex items-center justify-center bg-light-blue-500">6</div>
  <div class="flex items-center justify-center bg-light-blue-500">7</div>
  <div class="flex items-center justify-center bg-light-blue-500">8</div>
  <div class="flex items-center justify-center bg-light-blue-500">9</div>
</div>
`),
    new Story("Responsive")
      .code(`\
<div class="grid grid-rows-3 md:grid-rows-4 grid-flow-col gap-4 h-48 text-white text-lg font-semibold">
  <div class="flex items-center justify-center bg-green-500">1</div>
  <div class="flex items-center justify-center bg-green-500">2</div>
  <div class="flex items-center justify-center bg-green-500">3</div>
  <div class="flex items-center justify-center bg-green-500">4</div>
  <div class="flex items-center justify-center bg-green-500">5</div>
  <div class="flex items-center justify-center bg-green-500">6</div>
  <div class="flex items-center justify-center bg-green-500">7</div>
  <div class="flex items-center justify-center bg-green-500">8</div>
  <div class="flex items-center justify-center bg-green-500">9</div>
</div>
`),
    new Story("Customize", "默认的'grid-template-rows'最多有6个等宽的行，可以通过定制主题配置的'gridTemplateRows'部分来改变、添加或删除它们", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      gridTemplateRows: {
        // Simple 8 row grid
        '8': 'repeat(8, minmax(0, 1fr))',

        // Complex site-specific row configuration
        'layout': '200px minmax(900px, 1fr) 100px'
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
      gridTemplateRows: ['hover', 'focus']
    }
  }
}
`),
    new Story("Disabling", "", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  corePlugins: {
    gridTemplateRows: false
  }
}
`)
  ])
    .render();
}
