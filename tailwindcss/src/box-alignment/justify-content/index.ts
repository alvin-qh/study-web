import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Jusitify Content', true);
  book.append([
    new Story("Start", "令元素沿着容器主轴的起点对齐")
      .code(`\
<!-- 
  'flex-start': 令元素按容器主轴的起点对齐
-->
<div class="flex justify-start gap-4 text-lg text-white font-semibold">
  <div class="w-16 h-16 flex items-center justify-center bg-pink-400">1</div>
  <div class="w-16 h-16 flex items-center justify-center bg-pink-400">2</div>
  <div class="w-16 h-16 flex items-center justify-center bg-pink-400">3</div>
</div>
`),
    new Story("Center", "令元素沿着容器主轴的中心点对齐")
      .code(`\
<!-- 
  'flex-center': 令元素沿着容器主轴的中心点对齐
-->
<div class="flex justify-center gap-4 text-lg text-white font-semibold">
  <div class="w-16 h-16 flex items-center justify-center bg-blue-400">1</div>
  <div class="w-16 h-16 flex items-center justify-center bg-blue-400">2</div>
  <div class="w-16 h-16 flex items-center justify-center bg-blue-400">3</div>
</div>
`),
    new Story("End", "令元素沿着容器主轴的终点对齐")
      .code(`\
<!-- 
  'flex-end': 令元素沿着容器主轴的终点对齐
-->
<div class="flex justify-end gap-4 text-lg text-white font-semibold">
  <div class="w-16 h-16 flex items-center justify-center bg-purple-400">1</div>
  <div class="w-16 h-16 flex items-center justify-center bg-purple-400">2</div>
  <div class="w-16 h-16 flex items-center justify-center bg-purple-400">3</div>
</div>
`),
    new Story("Space Between", "令元素沿着容器主轴的进行排列，元素间的距离相等")
      .code(`\
<!--
  'justify-betweenr': 让项目沿着容器主轴排列，并使每个项目之间的距离相等
-->
<div class="flex justify-between gap-4 text-lg text-white font-semibold">
  <div class="w-16 h-16 flex items-center justify-center bg-green-400">1</div>
  <div class="w-16 h-16 flex items-center justify-center bg-green-400">2</div>
  <div class="w-16 h-16 flex items-center justify-center bg-green-400">3</div>
</div>
`),
    new Story("Space Around", "令元素沿着容器主轴的进行排列，且元素两侧的距离相等")
      .code(`\
<!--
  'justify-around': 令元素沿着容器主轴的进行排列，且元素两侧的距离相等
-->
<div class="flex justify-around gap-4 text-lg text-white font-semibold">
  <div class="w-16 h-16 flex items-center justify-center bg-indigo-400">1</div>
  <div class="w-16 h-16 flex items-center justify-center bg-indigo-400">2</div>
  <div class="w-16 h-16 flex items-center justify-center bg-indigo-400">3</div>
</div>
`),
    new Story("Space Evenly", "让项目沿着容器主轴排列，并使每个项目周围的距离相等")
      .code(`\
<!--
  'justify-evenly': 让项目沿着容器主轴排列，并使每个项目周围的距离相等
                    和'justify-around'不同，项目之间的距离不一定是双倍的距离
-->
<div class="flex justify-evenly space-x-2 text-lg text-white font-semibold">
  <div class="w-16 h-16 flex items-center justify-center bg-yellow-400">1</div>
  <div class="w-16 h-16 flex items-center justify-center bg-yellow-400">2</div>
  <div class="w-16 h-16 flex items-center justify-center bg-yellow-400">3</div>
</div>
`),
    new Story("Responsive")
      .code(`\
<div class="flex md:justify-around justify-center space-x-2 text-lg text-white font-semibold">
  <div class="w-16 h-16 flex items-center justify-center bg-blue-400">1</div>
  <div class="w-16 h-16 flex items-center justify-center bg-blue-400">2</div>
  <div class="w-16 h-16 flex items-center justify-center bg-blue-400">3</div>
</div>
`),
    new Story("Variants", "", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  variants: {
    extend: {
      // ...
      justifyContent: ['hover', 'focus']
    }
  }
}`),
    new Story("Disabling", "", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  variants: {
    extend: {
      // ...
      justifyContent: false
    }
  }
}`)
  ])
    .render();
};
