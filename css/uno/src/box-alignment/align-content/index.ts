import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Align Content', true);
  book.append([
    new Story('Start', '容器内元素对齐到容器的起点位置')
      .code(`\
<!--
  'content-start': 容器内元素对齐到容器的起点位置
-->
<div class="flex flex-wrap content-start h-48 text-white text-lg font-semibold">
  <div class="w-1/3 p-2">
    <div class="h-12 flex items-center justify-center bg-rose-400">1</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="h-12 flex items-center justify-center bg-rose-400">2</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="h-12 flex items-center justify-center bg-rose-400">3</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="h-12 flex items-center justify-center bg-rose-400">4</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="h-12 flex items-center justify-center bg-rose-400">5</div>
  </div>
</div>
`),
    new Story('Center', '容器内元素对齐到容器的中心位置')
      .code(`\
<!--
  'content-center': 容器内元素对齐到容器的中心位置
-->
<div class="flex flex-wrap content-center h-48 text-white text-lg font-semibold">
  <div class="w-1/3 p-2">
    <div class="h-12 flex items-center justify-center bg-blue-400">1</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="h-12 flex items-center justify-center bg-blue-400">2</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="h-12 flex items-center justify-center bg-blue-400">3</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="h-12 flex items-center justify-center bg-blue-400">4</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="h-12 flex items-center justify-center bg-blue-400">5</div>
  </div>
</div>
`),
    new Story('End', '容器内元素对齐到容器的终点位置')
      .code(`\
<!--
  'content-end': 容器内元素对齐到容器的终点位置
-->
<div class="flex flex-wrap content-end h-48 text-white text-lg font-semibold">
  <div class="w-1/3 p-2">
    <div class="h-12 flex items-center justify-center bg-green-400">1</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="h-12 flex items-center justify-center bg-green-400">2</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="h-12 flex items-center justify-center bg-green-400">3</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="h-12 flex items-center justify-center bg-green-400">4</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="h-12 flex items-center justify-center bg-green-400">5</div>
  </div>
</div>
`),
    new Story('Space Between', '平均分配容器的行, 使每行之间具有相同的间距')
      .code(`\
<!--
  'content-between': 平均分配容器的行, 使之具有相同的间距
-->
<div class="flex flex-wrap content-between h-48 text-white text-lg font-semibold">
  <div class="w-1/3 p-2">
    <div class="h-12 flex items-center justify-center bg-yellow-400">1</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="h-12 flex items-center justify-center bg-yellow-400">2</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="h-12 flex items-center justify-center bg-yellow-400">3</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="h-12 flex items-center justify-center bg-yellow-400">4</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="h-12 flex items-center justify-center bg-yellow-400">5</div>
  </div>
</div>
`),
    new Story('Space Around', '平均分配容器的行, 使每行的周围具有相同的空间')
      .code(`\
<!--
  'content-around': 平均分配容器的行, 使每行的周围具有相同的空间
-->
<div class="flex flex-wrap content-around h-48 text-white text-lg font-semibold">
  <div class="w-1/3 p-2">
    <div class="h-12 flex items-center justify-center bg-light-blue-400">1</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="h-12 flex items-center justify-center bg-light-blue-400">2</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="h-12 flex items-center justify-center bg-light-blue-400">3</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="h-12 flex items-center justify-center bg-light-blue-400">4</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="h-12 flex items-center justify-center bg-light-blue-400">5</div>
  </div>
</div>
`),
    new Story('Responsive')
      .code(`\
<div class="flex flex-wrap content-start md:content-around h-48 text-white text-lg font-semibold">
  <div class="w-1/3 p-2">
    <div class="h-12 flex items-center justify-center bg-violet-400">1</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="h-12 flex items-center justify-center bg-violet-400">2</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="h-12 flex items-center justify-center bg-violet-400">3</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="h-12 flex items-center justify-center bg-violet-400">4</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="h-12 flex items-center justify-center bg-violet-400df">5</div>
  </div>
</div>
`),
    new Story('Variants', '', 'javascript')
      .code(`\
// tailwind.config.js
module.exports = {
  variants: {
    extend: {
      alignContent: ['hover', 'focus'],
    }
  }
}
`),
    new Story('Disabling', '', 'javascript')
      .code(`\
// tailwind.config.js
module.exports = {
  corePlugins: {
    alignContent: false
  }
}`)
  ])
    .render();
};
