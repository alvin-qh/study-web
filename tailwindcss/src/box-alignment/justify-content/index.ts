import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Jusitify Content', true);
  book.append([
    new Story("Start", "元素在水平方向对齐到容器的起点")
      .code(`\
<!-- 
  'flex-start': 元素在水平方向对齐到容器的起点
-->
<div class="flex justify-start gap-4 text-lg text-white font-semibold">
  <div class="w-16 h-16 flex items-center justify-center bg-pink-400">1</div>
  <div class="w-16 h-16 flex items-center justify-center bg-pink-400">2</div>
  <div class="w-16 h-16 flex items-center justify-center bg-pink-400">3</div>
</div>
`),
    new Story("Center", "元素在水平方向对齐到容器的中央")
      .code(`\
<!-- 
  'flex-center': 元素在水平方向对齐到容器的中央
-->
<div class="flex justify-center gap-4 text-lg text-white font-semibold">
  <div class="w-16 h-16 flex items-center justify-center bg-blue-400">1</div>
  <div class="w-16 h-16 flex items-center justify-center bg-blue-400">2</div>
  <div class="w-16 h-16 flex items-center justify-center bg-blue-400">3</div>
</div>
`),
    new Story("End", "元素在水平方向对齐到容器的终点")
      .code(`\
<!-- 
  'flex-end': 元素在水平方向对齐到容器的终点
-->
<div class="flex justify-end gap-4 text-lg text-white font-semibold">
  <div class="w-16 h-16 flex items-center justify-center bg-purple-400">1</div>
  <div class="w-16 h-16 flex items-center justify-center bg-purple-400">2</div>
  <div class="w-16 h-16 flex items-center justify-center bg-purple-400">3</div>
</div>
`),
    new Story("Space Between", "元素在水平位置平均放置，元素间距离相等")
      .code(`\
<!--
  'justify-betweenr': 元素在水平位置平均放置，元素间距离相等
-->
<div class="flex justify-between gap-4 text-lg text-white font-semibold">
  <div class="w-16 h-16 flex items-center justify-center bg-green-400">1</div>
  <div class="w-16 h-16 flex items-center justify-center bg-green-400">2</div>
  <div class="w-16 h-16 flex items-center justify-center bg-green-400">3</div>
</div>
`),
    new Story("Space Around", "元素在水平位置平均放置，各元素周围的距离相等")
      .code(`\
<!--
  'justify-around': 元素在水平位置平均放置，各元素周围的距离相等
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
