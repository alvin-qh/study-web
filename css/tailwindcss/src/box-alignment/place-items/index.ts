import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Place Items', true);
  book.append([
    new Story('Auto', '将网格元素自动放置在其网格区域')
      .code(`\
<!--
  'place-items-auto': 将网格元素自动放置在其网格区域
-->
<div class="grid grid-cols-3 gap-4 place-items-auto h-40 text-white font-semibold text-lg">
  <div class="flex items-center justify-center bg-indigo-400">1</div>
  <div class="flex items-center justify-center bg-indigo-400">2</div>
  <div class="flex items-center justify-center bg-indigo-400">3</div>
  <div class="flex items-center justify-center bg-indigo-400">4</div>
  <div class="flex items-center justify-center bg-indigo-400">5</div>
  <div class="flex items-center justify-center bg-indigo-400">6</div>
</div>
`),
    new Story('Start', '将元素放置在网格的起始位置')
      .code(`\
<!--
  'place-items-start': 将元素放置在网格的起始位置
-->
<div class="grid grid-cols-3 gap-4 place-items-start h-40 text-white font-semibold text-lg">
  <div class="flex w-16 h-16 items-center justify-center bg-green-500">1</div>
  <div class="flex w-16 h-16 items-center justify-center bg-green-500">2</div>
  <div class="flex w-16 h-16 items-center justify-center bg-green-500">3</div>
  <div class="flex w-16 h-16 items-center justify-center bg-green-500">4</div>
  <div class="flex w-16 h-16 items-center justify-center bg-green-500">5</div>
  <div class="flex w-16 h-16 items-center justify-center bg-green-500">6</div>
</div>
`),
    new Story('Start', '将元素放置在网格的终点位置')
      .code(`\
<!--
  'place-items-end': 将元素放置在网格的终点位置
-->
<div class="grid grid-cols-3 gap-4 place-items-end h-40 text-white font-semibold text-lg">
  <div class="flex w-16 h-16 items-center justify-center bg-amber-500">1</div>
  <div class="flex w-16 h-16 items-center justify-center bg-amber-500">2</div>
  <div class="flex w-16 h-16 items-center justify-center bg-amber-500">3</div>
  <div class="flex w-16 h-16 items-center justify-center bg-amber-500">4</div>
  <div class="flex w-16 h-16 items-center justify-center bg-amber-500">5</div>
  <div class="flex w-16 h-16 items-center justify-center bg-amber-500">6</div>
</div>
`),
    new Story('Center', '将元素放置在网格的中央位置')
      .code(`\
<!--
  'place-items-center': 将元素放置在网格的中央位置
-->
<div class="grid grid-cols-3 gap-4 place-items-center h-40 text-white font-semibold text-lg">
  <div class="flex w-16 h-16 items-center justify-center bg-violet-500">1</div>
  <div class="flex w-16 h-16 items-center justify-center bg-violet-500">2</div>
  <div class="flex w-16 h-16 items-center justify-center bg-violet-500">3</div>
  <div class="flex w-16 h-16 items-center justify-center bg-violet-500">4</div>
  <div class="flex w-16 h-16 items-center justify-center bg-violet-500">5</div>
  <div class="flex w-16 h-16 items-center justify-center bg-violet-500">6</div>
</div>
`),
    new Story('Stretch', '拉伸元素以充满网格')
      .code(`\
<!--
  'place-items-stretch': 拉伸元素以充满网格
-->
<div class="grid grid-cols-3 gap-4 place-items-stretch h-40 text-white font-semibold text-lg">
  <div class="flex items-center justify-center bg-light-blue-500">1</div>
  <div class="flex items-center justify-center bg-light-blue-500">2</div>
  <div class="flex items-center justify-center bg-light-blue-500">3</div>
  <div class="flex items-center justify-center bg-light-blue-500">4</div>
  <div class="flex items-center justify-center bg-light-blue-500">5</div>
  <div class="flex items-center justify-center bg-light-blue-500">6</div>
</div>
`),
    new Story('Responsive')
      .code(`\
<div class="grid grid-cols-3 gap-4 place-items-start md:place-content-center h-40 text-white font-semibold text-lg">
  <div class="flex w-16 h-16 items-center justify-center bg-rose-500">1</div>
  <div class="flex w-16 h-16 items-center justify-center bg-rose-500">2</div>
  <div class="flex w-16 h-16 items-center justify-center bg-rose-500">3</div>
  <div class="flex w-16 h-16 items-center justify-center bg-rose-500">4</div>
  <div class="flex w-16 h-16 items-center justify-center bg-rose-500">5</div>
  <div class="flex w-16 h-16 items-center justify-center bg-rose-500">6</div>
</div>
`)
  ])
    .render();
};
