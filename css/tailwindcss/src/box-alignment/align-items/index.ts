import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Align Items', true);
  book.append([
    new Story('Stretch', '拉伸容器内的元素以填充垂直方向, 使一行内的元素具备相同的高度和对齐')
      .code(`\
<!--
  'item-stretch': 拉伸容器内的元素以填充垂直空间
-->
<div class="flex items-stretch h-24 gap-4 font-semibold text-white text-lg">
  <div class="w-32 flex items-center justify-center bg-purple-400">
    1
  </div>
  <div class="w-64 flex items-center justify-center bg-purple-400">
    2
  </div>
  <div class="w-32 flex items-center justify-center bg-purple-400">
    3
  </div>
</div>
`),
    new Story('Start', '元素对齐到容器的顶点')
      .code(`\
<!--
  'item-start': 元素在垂直方向对齐到容器的顶点
-->
<div class="flex items-start h-24 gap-4 font-semibold text-white text-lg">
  <div class="w-32 h-12 flex items-center justify-center  bg-rose-400">
    1
  </div>
  <div class="w-64 h-24 flex items-center justify-center bg-rose-400">
    2
  </div>
  <div class="w-32 h-12 flex items-center justify-center bg-rose-400">
    3
  </div>
</div>
`),
    new Story('Center', '元素在垂直方向对齐到容器的中央点')
      .code(`\
<!--
  'item-center': 元素在垂直方向对齐到容器的中央点
-->
<div class="flex items-center h-24 gap-4 font-semibold text-white text-lg">
  <div class="w-32 h-12 flex items-center justify-center  bg-indigo-400">
    1
  </div>
  <div class="w-64 h-24 flex items-center justify-center bg-indigo-400">
    2
  </div>
  <div class="w-32 h-12 flex items-center justify-center bg-indigo-400">
    3
  </div>
</div>
`),
    new Story('End', '元素在垂直方向对齐到容器的终点')
      .code(`\
<!--
  'item-end': 元素在垂直方向对齐到容器的终点
-->
<div class="flex items-end h-24 gap-4 font-semibold text-white text-lg">
  <div class="w-32 h-12 flex items-center justify-center  bg-violet-400">
    1
  </div>
  <div class="w-64 h-24 flex items-center justify-center bg-violet-400">
    2
  </div>
  <div class="w-32 h-12 flex items-center justify-center bg-violet-400">
    3
  </div>
</div>
`),
    new Story('Baseline', '元素在垂直方向对齐到容器的基准线')
      .code(`\
<!--
  'item-end': 元素在垂直方向对齐到容器的基准线
-->
<div class="flex items-baseline h-24 gap-4 font-semibold text-white text-lg">
  <div class="w-32 h-12 flex items-center justify-center  bg-violet-400">
    1
  </div>
  <div class="w-64 h-24 flex items-center justify-center bg-violet-400">
    2
  </div>
  <div class="w-32 h-12 flex items-center justify-center bg-violet-400">
    3
  </div>
</div>
`),
    new Story('Responsive')
      .code(`\
<div class="flex items-stretch md:items-center h-24 gap-4 font-semibold text-white text-lg">
  <div class="w-32 h-12 flex items-center justify-center  bg-violet-400">
    1
  </div>
  <div class="w-64 h-24 flex items-center justify-center bg-violet-400">
    2
  </div>
  <div class="w-32 h-12 flex items-center justify-center bg-violet-400">
    3
  </div>
</div>
</div>
`)
  ])
    .render();
};
