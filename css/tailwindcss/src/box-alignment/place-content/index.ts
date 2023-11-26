import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Place Content', true);
  book.append([
    new Story('Center', '将元素定位在容器的中心位置')
      .code(`\
<!--
  'place-content-center': 将元素定位在容器的中心位置
-->
<div class="grid grid-cols-3 gap-4 place-content-center h-48 text-white font-semibold text-lg">
  <div class="flex items-center justify-center bg-light-blue-400 py-3">1</div>
  <div class="flex items-center justify-center bg-light-blue-400 py-3">2</div>
  <div class="flex items-center justify-center bg-light-blue-400 py-3">3</div>
  <div class="flex items-center justify-center bg-light-blue-400 py-3">4</div>
  <div class="flex items-center justify-center bg-light-blue-400 py-3">5</div>
  <div class="flex items-center justify-center bg-light-blue-400 py-3">6</div>
</div>
`),
    new Story('Start')
      .code(`\
<!--
  'place-content-center': 将元素定位在容器的中心位置
-->
<div class="grid grid-cols-3 gap-4 place-content-start h-48 text-white font-semibold text-lg">
  <div class="flex items-center justify-center bg-purple-500 py-3">1</div>
  <div class="flex items-center justify-center bg-purple-500 py-3">2</div>
  <div class="flex items-center justify-center bg-purple-500 py-3">3</div>
  <div class="flex items-center justify-center bg-purple-500 py-3">4</div>
  <div class="flex items-center justify-center bg-purple-500 py-3">5</div>
  <div class="flex items-center justify-center bg-purple-500 py-3">6</div>
</div>
`),
    new Story('End')
      .code(`\
<!--
  'place-content-center': 将元素定位在容器的终点位置
-->
<div class="grid grid-cols-3 gap-4 place-content-end h-48 text-white font-semibold text-lg">
  <div class="flex items-center justify-center bg-rose-500 py-3">1</div>
  <div class="flex items-center justify-center bg-rose-500 py-3">2</div>
  <div class="flex items-center justify-center bg-rose-500 py-3">3</div>
  <div class="flex items-center justify-center bg-rose-500 py-3">4</div>
  <div class="flex items-center justify-center bg-rose-500 py-3">5</div>
  <div class="flex items-center justify-center bg-rose-500 py-3">6</div>
</div>
`),
    new Story('Space Between', '使每行元素周围都具有相同的空间')
      .code(`\
<!--
  'place-content-center': 使每行元素周围都具有相同的空间
-->
<div class="grid grid-cols-3 gap-4 place-content-between h-48 text-white font-semibold text-lg">
  <div class="flex items-center justify-center bg-amber-500 py-3">1</div>
  <div class="flex items-center justify-center bg-amber-500 py-3">2</div>
  <div class="flex items-center justify-center bg-amber-500 py-3">3</div>
  <div class="flex items-center justify-center bg-amber-500 py-3">4</div>
  <div class="flex items-center justify-center bg-amber-500 py-3">5</div>
  <div class="flex items-center justify-center bg-amber-500 py-3">6</div>
</div>
`),
    new Story('Space Around', '使每行元素周围都具有相同的空间')
      .code(`\
<!--
  'place-content-center': 使每行元素周围都具有相同的空间
-->
<div class="grid grid-cols-3 gap-4 place-content-around h-48 text-white font-semibold text-lg">
  <div class="flex items-center justify-center bg-fuchsia-500 py-3">1</div>
  <div class="flex items-center justify-center bg-fuchsia-500 py-3">2</div>
  <div class="flex items-center justify-center bg-fuchsia-500 py-3">3</div>
  <div class="flex items-center justify-center bg-fuchsia-500 py-3">4</div>
  <div class="flex items-center justify-center bg-fuchsia-500 py-3">5</div>
  <div class="flex items-center justify-center bg-fuchsia-500 py-3">6</div>
</div>
`),
    new Story('Space Evenly', '使元素相对于网格具备相同的间距')
      .code(`\
<!--
  'place-content-center': 使元素相对于网格具备相同的间距
-->
<div class="grid grid-cols-3 gap-4 place-content-evenly h-48 text-white font-semibold text-lg">
  <div class="flex items-center justify-center bg-emerald-500 py-3">1</div>
  <div class="flex items-center justify-center bg-emerald-500 py-3">2</div>
  <div class="flex items-center justify-center bg-emerald-500 py-3">3</div>
  <div class="flex items-center justify-center bg-emerald-500 py-3">4</div>
  <div class="flex items-center justify-center bg-emerald-500 py-3">5</div>
  <div class="flex items-center justify-center bg-emerald-500 py-3">6</div>
</div>
`),
    new Story('Stretch', '拉伸元素以填充网格')
      .code(`\
<!--
  'place-content-center': 拉伸元素以填充网格
-->
<div class="grid grid-cols-3 gap-4 place-content-stretch h-48 text-white font-semibold text-lg">
  <div class="flex items-center justify-center bg-indigo-500 py-3">1</div>
  <div class="flex items-center justify-center bg-indigo-500 py-3">2</div>
  <div class="flex items-center justify-center bg-indigo-500 py-3">3</div>
  <div class="flex items-center justify-center bg-indigo-500 py-3">4</div>
  <div class="flex items-center justify-center bg-indigo-500 py-3">5</div>
  <div class="flex items-center justify-center bg-indigo-500 py-3">6</div>
</div>
`),
    new Story('Responsive')
      .code(`\
<div class="grid grid-cols-3 gap-4 place-content-start md:place-content-center h-48 text-white font-semibold text-lg">
  <div class="flex items-center justify-center bg-yellow-500 py-3">1</div>
  <div class="flex items-center justify-center bg-yellow-500 py-3">2</div>
  <div class="flex items-center justify-center bg-yellow-500 py-3">3</div>
  <div class="flex items-center justify-center bg-yellow-500 py-3">4</div>
  <div class="flex items-center justify-center bg-yellow-500 py-3">5</div>
  <div class="flex items-center justify-center bg-yellow-500 py-3">6</div>
</div>
`)
  ])
    .render();
};
