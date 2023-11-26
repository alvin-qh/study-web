import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Align Self', true);
  book.append([
    new Story('Auto', '根据容器的 `item-{*}` 样式类定义元素的对齐方式')
      .code(`\
<!--
  'self-auto': 根据容器的'item-{start,end,center,baseline,stretch}'
               样式类来对齐一个项目
-->
<div class="flex items-stretch gap-4 h-20 text-lg text-white font-semibold">
  <div class="flex-1 flex items-center justify-center bg-green-400">1</div>
  <div class="flex-1 self-auto flex items-center justify-center bg-green-600">2</div>
  <div class="flex-1 flex items-center justify-center bg-green-400">3</div>
</div>
`),
    new Story('Start', '忽略容器的 `item-{*}` 样式类, 将元素在垂直方向定位到容器的起点')
      .code(`\
<!--
  'self-start': 忽略容器的'item-{start,end,center,baseline,stretch}'
                样式类, 将元素在垂直位置对齐到容器的起点
-->
<div class="flex items-stretch h-20 gap-4 text-lg text-white font-semibold">
  <div class="flex-1 flex items-center justify-center bg-amber-300">1</div>
  <div class="flex-1 self-start flex items-center justify-center h-1/2 bg-amber-500">2</div>
  <div class="flex-1 flex items-center justify-center bg-amber-300">3</div>
</div>
`),
    new Story('Center', '忽略容器的 `item-{*}` 样式类, 将元素在垂直方向定位到容器的中间点')
      .code(`\
<!--
  'self-center': 忽略容器的'item-{start,end,center,baseline,stretch}'
                样式类, 将元素在垂直位置对齐到容器的中间点
-->
<div class="flex items-stretch h-20 gap-4 text-lg text-white font-semibold">
  <div class="flex-1 flex items-center justify-center bg-purple-300">1</div>
  <div class="flex-1 self-center flex items-center justify-center h-1/2 bg-purple-500">2</div>
  <div class="flex-1 flex items-center justify-center bg-purple-300">3</div>
</div>
`),
    new Story('End', '忽略容器的 `item-{*}` 样式类, 将元素在垂直方向定位到容器终点')
      .code(`\
<!--
  'self-end': 忽略容器的'item-{start,end,center,baseline,stretch}'
                样式类, 将元素在垂直位置对齐到容器的终点
-->
<div class="flex items-stretch h-20 gap-4 text-lg text-white font-semibold">
  <div class="flex-1 flex items-center justify-center bg-rose-300">1</div>
  <div class="flex-1 self-end flex items-center justify-center h-1/2 bg-rose-500">2</div>
  <div class="flex-1 flex items-center justify-center bg-rose-300">3</div>
</div>
`),
    new Story('Stretch', '忽略容器的 `item-{*}` 样式类, 将元素在垂直方向拉伸')
      .code(`\
<!--
  'self-stretch': 忽略容器的'item-{start,end,center,baseline,stretch}'
                  样式类, 将元素在垂直位置对齐到容器的终点
-->
<div class="flex items-stretch h-20 gap-4 text-lg text-white font-semibold">
  <div class="flex-1 flex items-center justify-center bg-fuchsia-300">1</div>
  <div class="flex-1 self-stretch flex items-center justify-center bg-fuchsia-500">2</div>
  <div class="flex-1 flex items-center justify-center bg-fuchsia-300">3</div>
</div>
`),
    new Story('Responsive')
      .code(`\
<div class="flex items-stretch h-20 gap-4 text-lg text-white font-semibold">
  <div class="flex-1 flex items-center justify-center bg-fuchsia-300">1</div>
  <div class="flex-1 self-auto md:self-end md:h-1/2 flex items-center justify-center bg-fuchsia-500">2</div>
  <div class="flex-1 flex items-center justify-center bg-fuchsia-300">3</div>
</div>
`),
    new Story('Variants', '', 'javascript')
      .code(`\
// tailwind.config.js
module.exports = {
  variants: {
    extend: {
      alignSelf: ['hover', 'focus']
    }
  }
}
`),
    new Story('Disabling', '', 'javascript')
      .code(`\
// tailwind.config.js
module.exports = {
  corePlugins: {
    alignSelf: false
  }
}`)
  ])
    .render();
};
