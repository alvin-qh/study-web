import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Justify Items', true);
  book.append([
    new Story('Auto', '自动对网格元素进行调整')
      .code(`\
<!--
  'justify-items-auto': 令子元素自动按网格进行对齐
-->
<div class="justify-items-auto grid grid-cols-3 gap-4 h-32 text-lg text-white font-semibold">
  <div class="flex items-center justify-center bg-green-400">1</div>
  <div class="flex items-center justify-center bg-green-400">2</div>
  <div class="flex items-center justify-center bg-green-400">3</div>
  <div class="flex items-center justify-center bg-green-400">4</div>
  <div class="flex items-center justify-center bg-green-400">5</div>
  <div class="flex items-center justify-center bg-green-400">6</div>
</div>
`),
    new Story('Start', '各元素对齐到其所在网格的起点')
      .code(`\
<!--
  'justify-items-start': 各元素对齐到其所在网格的起点
-->
<div class="justify-items-start grid grid-cols-3 gap-4 h-32 text-lg text-white font-semibold">
  <div class="flex w-16 items-center justify-center bg-blue-400">1</div>
  <div class="flex w-16 items-center justify-center bg-blue-400">2</div>
  <div class="flex w-16 items-center justify-center bg-blue-400">3</div>
  <div class="flex w-16 items-center justify-center bg-blue-400">4</div>
  <div class="flex w-16 items-center justify-center bg-blue-400">5</div>
  <div class="flex w-16 items-center justify-center bg-blue-400">6</div>
</div>
`),
    new Story('End', '各元素对齐到其所在网格的终点')
      .code(`\
<!--
  'justify-items-end': 各元素对齐到其所在网格的终点
-->
<div class="justify-items-end grid grid-cols-3 gap-4 h-32 text-lg text-white font-semibold">
  <div class="flex w-16 items-center justify-center bg-purple-400">1</div>
  <div class="flex w-16 items-center justify-center bg-purple-400">2</div>
  <div class="flex w-16 items-center justify-center bg-purple-400">3</div>
  <div class="flex w-16 items-center justify-center bg-purple-400">4</div>
  <div class="flex w-16 items-center justify-center bg-purple-400">5</div>
  <div class="flex w-16 items-center justify-center bg-purple-400">6</div>
</div>
`),
    new Story('Center', '各元素对齐到其所在网格的中央点')
      .code(`\
<!--
  'justify-items-center': 各元素对齐到其所在网格的中央点
-->
<div class="justify-items-center grid grid-cols-3 gap-4 h-32 text-lg text-white font-semibold">
  <div class="flex w-16 items-center justify-center bg-yellow-400">1</div>
  <div class="flex w-16 items-center justify-center bg-yellow-400">2</div>
  <div class="flex w-16 items-center justify-center bg-yellow-400">3</div>
  <div class="flex w-16 items-center justify-center bg-yellow-400">4</div>
  <div class="flex w-16 items-center justify-center bg-yellow-400">5</div>
  <div class="flex w-16 items-center justify-center bg-yellow-400">6</div>
</div>
`),
    new Story('Stretch', '各元素拉伸后填充其所在的网格')
      .code(`\
<!--
  ‘justify-items-stretch': 各元素拉伸后填充其所在的网格
-->
<div class="justify-items-stretch grid grid-cols-3 gap-4 h-32 text-lg text-white font-semibold">
  <div class="flex items-center justify-center bg-pink-400">1</div>
  <div class="flex items-center justify-center bg-pink-400">2</div>
  <div class="flex items-center justify-center bg-pink-400">3</div>
  <div class="flex items-center justify-center bg-pink-400">4</div>
  <div class="flex items-center justify-center bg-pink-400">5</div>
  <div class="flex items-center justify-center bg-pink-400">6</div>
</div>
`),
    new Story('Responsive')
      .code(`\
<div class="justify-items-center md:justify-items-stretch grid grid-cols-3 gap-4 h-32 text-lg text-white font-semibold">
  <div class="w-16 md:w-auto flex items-center justify-center bg-pink-400">1</div>
  <div class="w-16 md:w-auto flex items-center justify-center bg-pink-400">2</div>
  <div class="w-16 md:w-auto flex items-center justify-center bg-pink-400">3</div>
  <div class="w-16 md:w-auto flex items-center justify-center bg-pink-400">4</div>
  <div class="w-16 md:w-auto flex items-center justify-center bg-pink-400">5</div>
  <div class="w-16 md:w-auto flex items-center justify-center bg-pink-400">6</div>
</div>
`)
  ])
    .render();
};
