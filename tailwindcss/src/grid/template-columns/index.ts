import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Grid Template Columns', true);
  book.append([
    new Story("Columns", "使用'grid-cols-{n}'样式类来创建有n个同等大小列的网格")
      .code(`\
<!--
  'grid-cols-{n}': 使用'grid-cols-{n}'样式类来创建有n个同等大小列的网格
-->
<div class="grid grid-cols-3 gap-4 h-48 text-white text-lg font-semibold">
  <div class="flex items-center justify-center bg-fuchsia-500">1</div>
  <div class="flex items-center justify-center bg-fuchsia-500">2</div>
  <div class="flex items-center justify-center bg-fuchsia-500">3</div>
  <div class="flex items-center justify-center bg-fuchsia-500">4</div>
  <div class="flex items-center justify-center bg-fuchsia-500">5</div>
  <div class="flex items-center justify-center bg-fuchsia-500">6</div>
  <div class="flex items-center justify-center bg-fuchsia-500">7</div>
  <div class="flex items-center justify-center bg-fuchsia-500">8</div>
  <div class="flex items-center justify-center bg-fuchsia-500">9</div>
</div>
`),
    new Story("Responsive")
      .code(`\
<div class="grid grid-cols-1 md:grid-cols-3 gap-4 h-48 overflow-y-auto text-white text-lg font-semibold">
  <div class="flex items-center justify-center bg-blue-500">1</div>
  <div class="flex items-center justify-center bg-blue-500">2</div>
  <div class="flex items-center justify-center bg-blue-500">3</div>
  <div class="flex items-center justify-center bg-blue-500">4</div>
  <div class="flex items-center justify-center bg-blue-500">5</div>
  <div class="flex items-center justify-center bg-blue-500">6</div>
  <div class="flex items-center justify-center bg-blue-500">7</div>
  <div class="flex items-center justify-center bg-blue-500">8</div>
  <div class="flex items-center justify-center bg-blue-500">9</div>
</div>
`),
    new Story("Customize", "默认的'grid-template-column'最多有12个等宽的列，可以通过定制主题配置的'gridTemplateColumns'部分来改变、添加或删除它们", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        '16': 'repeat(16, minmax(0, 1fr))',

        // Complex site-specific column configuration
        'footer': '200px minmax(900px, 1fr) 100px',
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
      gridTemplateColumns: ['hover', 'focus']
    }
  }
}
`),
    new Story("Disabling", "", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  corePlugins: {
    gridTemplateColumns: false
  }
}
`)
  ])
    .render();
};
