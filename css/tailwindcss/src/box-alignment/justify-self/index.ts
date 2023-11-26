import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Justify Self', true);
  book.append([
    new Story('Auto', '元素根据容器的 `justify-items-{*}` 样式类与网格进行对齐')
      .code(`\
<!--
  'justify-self-auto': 元素根据容器的'justify-items-{start, end, center, stretch}'
                       样式类与网格进行对齐
-->
<div class="grid grid-cols-3 gap-4 justify-items-stretch auto-rows-fr h-32 text-white text-lg font-semibold">
  <div class="bg-stripes bg-stripes-purple-400"></div>
  <div class="justify-self-auto flex items-center justify-center bg-purple-400">1</div>
  <div class="bg-stripes bg-stripes-purple-400"></div>
  <div class="bg-stripes bg-stripes-purple-400"></div>
  <div class="bg-stripes bg-stripes-purple-400"></div>
  <div class="bg-stripes bg-stripes-purple-400"></div>
</div>
`),
    new Story('Start', '覆盖容器定义的 `justify-items-{*}` 样式类, 令元素对齐到网格起点')
      .code(`\
<!--
  'justify-self-start': 元素覆盖容器的
                        'justify-items-{start, end, center, stretch}'样式类,
                        与网格起点进行对齐
-->
<div class="grid grid-cols-3 gap-4 justify-items-stretch auto-rows-fr h-32 text-white text-lg font-semibold">
  <div class="bg-stripes bg-stripes-green-400"></div>
  <div class="justify-self-start flex items-center justify-center bg-green-400 px-4">1</div>
  <div class="bg-stripes bg-stripes-green-400"></div>
  <div class="bg-stripes bg-stripes-green-400"></div>
  <div class="bg-stripes bg-stripes-green-400"></div>
  <div class="bg-stripes bg-stripes-green-400"></div>
</div>
`),
    new Story('Center', '覆盖容器定义的 `justify-items-{*}` 样式类, 令元素对齐到网格中央')
      .code(`\
<!--
  'justify-self-center': 覆盖容器定义的
                         'justify-items-{start, end, center, stretch}'样式类,
                         令元素对齐到网格中央
-->
<div class="grid grid-cols-3 gap-4 justify-items-stretch auto-rows-fr h-32 text-white text-lg font-semibold">
  <div class="bg-stripes bg-stripes-yellow-400"></div>
  <div class="justify-self-center flex items-center justify-center bg-yellow-400 px-4">1</div>
  <div class="bg-stripes bg-stripes-yellow-400"></div>
  <div class="bg-stripes bg-stripes-yellow-400"></div>
  <div class="bg-stripes bg-stripes-yellow-400"></div>
  <div class="bg-stripes bg-stripes-yellow-400"></div>
</div>
`),
    new Story('End', '覆盖容器定义的 `justify-items-{*}` 样式类, 令元素对齐到网格末尾')
      .code(`\
<!--
  'justify-self-end': 覆盖容器定义的
                      'justify-items-{start, end, center, stretch}'样式类,
                      令元素对齐到网格末尾
-->
<div class="grid grid-cols-3 gap-4 justify-items-stretch auto-rows-fr h-32 text-white text-lg font-semibold">
  <div class="bg-stripes bg-stripes-pink-400"></div>
  <div class="justify-self-end flex items-center justify-center bg-pink-400 px-4">1</div>
  <div class="bg-stripes bg-stripes-pink-400"></div>
  <div class="bg-stripes bg-stripes-pink-400"></div>
  <div class="bg-stripes bg-stripes-pink-400"></div>
  <div class="bg-stripes bg-stripes-pink-400"></div>
</div>
`),
    new Story('Stretch', '覆盖容器定义的 `justify-items-{*}` 样式类, 令元素拉伸到整个网格')
      .code(`\
<!--
  'justify-self-stretch': 覆盖容器定义的
                          'justify-items-{start, end, center, stretch}'样式类,
                          令元素拉伸到整个网格
-->
<div class="grid grid-cols-3 gap-4 justify-items-start auto-rows-fr h-32 text-white text-lg font-semibold">
  <div class="bg-stripes px-4 bg-stripes-purple-400"></div>
  <div class="justify-self-stretch flex items-center justify-center bg-purple-400 px-4">1</div>
  <div class="bg-stripes px-4 bg-stripes-purple-400"></div>
  <div class="bg-stripes px-4 bg-stripes-purple-400"></div>
  <div class="bg-stripes px-4 bg-stripes-purple-400"></div>
  <div class="bg-stripes px-4 bg-stripes-purple-400"></div>
</div>
`),
    new Story('Responsive')
      .code(`\
<div class="grid grid-cols-3 gap-4 justify-items-stretch auto-rows-fr h-32 font-semibold text-white text-lg">
  <div class="bg-stripes px-4 bg-stripes-purple-400"></div>
  <div class="justify-self-stretch md:justify-self-start flex items-center justify-center bg-purple-400 px-4">1</div>
  <div class="bg-stripes px-4 bg-stripes-purple-400"></div>
  <div class="bg-stripes px-4 bg-stripes-purple-400"></div>
  <div class="bg-stripes px-4 bg-stripes-purple-400"></div>
  <div class="bg-stripes px-4 bg-stripes-purple-400"></div>
</div>
`)
  ])
    .render();
};
