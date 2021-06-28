import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Place Self', true);
  book.append([
    new Story("Auto", "根据容器的'place-item-{*}'样式类对元素进行对齐")
      .code(`\
<!--
  'place-self-auto': 根据容器的'place-item-{start,center,end,stretch}'样式类
                     对元素进行对齐
-->
<div class="grid grid-cols-3 gap-4 place-items-stretch h-32 text-white text-lg font-semibold">
  <div class="flex items-center justify-center bg-emerald-300">1</div>
  <div class="place-self-auto flex items-center justify-center bg-emerald-500">2</div>
  <div class="flex items-center justify-center bg-emerald-300">3</div>
  <div class="flex items-center justify-center bg-emerald-300">4</div>
  <div class="flex items-center justify-center bg-emerald-300">5</div>
  <div class="flex items-center justify-center bg-emerald-300">6</div>
</div>
`),
    new Story("Start", "忽略容器的'place-item-{*}'样式类，对齐到网格的起始位置")
      .code(`\
<!--
  'place-self-auto': 根据容器的'place-item-{start,center,end,stretch}'样式类，
                     对齐到网格的起始位置
-->
<div class="grid grid-cols-3 gap-4 place-items-stretch h-32 auto-rows-fr text-white text-lg font-semibold">
  <div class="flex items-center justify-center bg-fuchsia-300">1</div>
  <div class="place-self-start w-10 h-10 flex items-center justify-center bg-fuchsia-500">2</div>
  <div class="flex items-center justify-center bg-fuchsia-300">3</div>
  <div class="flex items-center justify-center bg-fuchsia-300">4</div>
  <div class="flex items-center justify-center bg-fuchsia-300">5</div>
  <div class="flex items-center justify-center bg-fuchsia-300">6</div>
</div>
`),
    new Story("Center", "忽略容器的'place-item-{*}'样式类，对齐到网格的中央位置")
      .code(`\
<!--
  'place-self-center': 根据容器的'place-item-{start,center,end,stretch}'样式类，
                       对齐到网格的中央位置
-->
<div class="grid grid-cols-3 gap-4 place-items-stretch h-32 auto-rows-fr text-white text-lg font-semibold">
  <div class="flex items-center justify-center bg-amber-300">1</div>
  <div class="place-self-center w-10 h-10 flex items-center justify-center bg-amber-500">2</div>
  <div class="flex items-center justify-center bg-amber-300">3</div>
  <div class="flex items-center justify-center bg-amber-300">4</div>
  <div class="flex items-center justify-center bg-amber-300">5</div>
  <div class="flex items-center justify-center bg-amber-300">6</div>
</div>
`),
    new Story("End", "忽略容器的'place-item-{*}'样式类，对齐到网格的终点位置")
      .code(`\
<!--
  'place-self-end': 根据容器的'place-item-{start,center,end,stretch}'样式类，
                       对齐到网格的终点位置
-->
<div class="grid grid-cols-3 gap-4 place-items-stretch h-32 auto-rows-fr text-white text-lg font-semibold">
  <div class="flex items-center justify-center bg-violet-300">1</div>
  <div class="place-self-end w-10 h-10 flex items-center justify-center bg-violet-500">2</div>
  <div class="flex items-center justify-center bg-violet-300">3</div>
  <div class="flex items-center justify-center bg-violet-300">4</div>
  <div class="flex items-center justify-center bg-violet-300">5</div>
  <div class="flex items-center justify-center bg-violet-300">6</div>
</div>
`),
    new Story("Stretch", "忽略容器的'place-item-{*}'样式类，对元素进行拉伸以适应网格")
      .code(`\
<!--
  'place-self-stretch': 根据容器的'place-item-{start,center,end,stretch}'样式类，
                        对齐到网格的终点位置
-->
<div class="grid grid-cols-3 gap-4 place-items-stretch h-32 auto-rows-fr text-white text-lg font-semibold">
  <div class="flex items-center justify-center bg-light-blue-300">1</div>
  <div class="place-self-stretch flex items-center justify-center bg-light-blue-500">2</div>
  <div class="flex items-center justify-center bg-light-blue-300">3</div>
  <div class="flex items-center justify-center bg-light-blue-300">4</div>
  <div class="flex items-center justify-center bg-light-blue-300">5</div>
  <div class="flex items-center justify-center bg-light-blue-300">6</div>
</div>
`),
    new Story("Responsive")
      .code(`\
<div class="grid grid-cols-3 gap-4 place-items-stretch h-32 auto-rows-fr text-white text-lg font-semibold">
  <div class="flex items-center justify-center bg-rose-300">1</div>
  <div class="place-self-start md:place-self-end w-10 h-10 flex items-center justify-center bg-rose-500">2</div>
  <div class="flex items-center justify-center bg-rose-300">3</div>
  <div class="flex items-center justify-center bg-rose-300">4</div>
  <div class="flex items-center justify-center bg-rose-300">5</div>
  <div class="flex items-center justify-center bg-rose-300">6</div>
</div>
`),
    new Story("Variants", "", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  variants: {
    extend: {
      placeSelf: ['hover', 'focus']
    }
  }
}
`),
    new Story("Disabling", "", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  corePlugins: {
    placeSelf: false
  }
}`)
  ])
    .render();
}
