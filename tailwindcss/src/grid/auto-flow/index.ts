import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Grid Auto Flow', true);
  book.append([
    new Story("Rows", "使用'grid-flow-{keyword}'样式类来设置网格布局的自动放置算法")
      .code(`\
<!--
  'grid-flow-row': 根据网格设置的列数，自动计算行数并进行布局
-->
<div class="grid grid-cols-4 grid-flow-row gap-4 h-48 text-white text-lg font-semibold">
  <div class="flex items-center justify-center bg-purple-500">1</div>
  <div class="flex items-center justify-center bg-purple-500">2</div>
  <div class="flex items-center justify-center bg-purple-500">3</div>
  <div class="flex items-center justify-center bg-purple-500">4</div>
  <div class="flex items-center justify-center bg-purple-500">5</div>
  <div class="flex items-center justify-center bg-purple-500">6</div>
  <div class="flex items-center justify-center bg-purple-500">7</div>
  <div class="flex items-center justify-center bg-purple-500">8</div>
</div>
<hr class="my-6">
<!--
  'grid-flow-col': 根据网格设置的行数，自动计算列数并进行布局
-->
<div class="grid grid-rows-3 grid-flow-col gap-4 h-48 text-white text-lg font-semibold">
  <div class="flex items-center justify-center bg-cyan-500">1</div>
  <div class="flex items-center justify-center bg-cyan-500">2</div>
  <div class="flex items-center justify-center bg-cyan-500">3</div>
  <div class="flex items-center justify-center bg-cyan-500">4</div>
  <div class="flex items-center justify-center bg-cyan-500">5</div>
  <div class="flex items-center justify-center bg-cyan-500">6</div>
  <div class="flex items-center justify-center bg-cyan-500">7</div>
  <div class="flex items-center justify-center bg-cyan-500">8</div>
  <div class="flex items-center justify-center bg-cyan-500">9</div>
</div>
`),
    new Story("Responsive")
      .code(`\
<div class="grid md:grid-flow-col grid-flow-row overflow-y-auto gap-4 h-48 text-white text-lg font-semibold">
  <div class="flex items-center justify-center bg-green-500">1</div>
  <div class="flex items-center justify-center bg-green-500">2</div>
  <div class="flex items-center justify-center bg-green-500">3</div>
  <div class="flex items-center justify-center bg-green-500">4</div>
  <div class="flex items-center justify-center bg-green-500">5</div>
  <div class="flex items-center justify-center bg-green-500">6</div>
  <div class="flex items-center justify-center bg-green-500">7</div>
  <div class="flex items-center justify-center bg-green-500">8</div>
</div>
`),
    new Story("Variants", "", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  variants: {
    extend: {
      gridAutoFlow: ['hover', 'focus']
    }
  }
}
`),
    new Story("Disabling", "", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  corePlugins: {
    gridAutoFlow: false
  }
}
`)
  ])
    .render();
};
