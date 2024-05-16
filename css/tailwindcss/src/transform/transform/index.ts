import image from '../../asset/image.jpg';
import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Transform', true);
  book.append([
    new Story('Element Transform', '启用元素变换控制')
      .code(`\
<!--
  'transform': 启用元素变换控制
  'transform-gpu': 启用GPU硬件支持
  'rotate-{degree}': 元素旋转
  'skew-{x,y}-{amount}': 元素沿X或Y轴变形
  'scale-{amount}': 元素缩放
  'translate-{x,y}-{amount}': 元素平移
-->
<div class="flex flex-col space-y-20 items-center justify-center bg-gradient-to-r from-yellow-50 to-yellow-200 px-4 py-6">
  <div class="flex w-32 h-32 bg-yellow-400 bg-stripes bg-stripes-white">
    <img class="transform rotate-45" src="${image}">
  </div>
  <div class="flex w-32 h-32 bg-yellow-400 bg-stripes bg-stripes-white">
    <img class="transform skew-y-12" src="${image}">
  </div>
  <div class="flex w-32 h-32 bg-yellow-400 bg-stripes bg-stripes-white">
    <img class="transform-gpu scale-75" src="${image}">
  </div>
  <div class="flex w-32 h-32 bg-yellow-400 bg-stripes bg-stripes-white">
    <img class="transform-gpu translate-x-4 translate-y-4" src="${image}">
  </div>
</div>
`),
    new Story('Disable Transform', '禁用元素变换')
      .code(`\
<div class="flex justify-center bg-gradient-to-r from-red-50 to-red-200 px-4 py-6">
  <div class="flex w-32 h-32 bg-red-400 bg-stripes bg-stripes-white">
    <img class="transform scale-75 md:transform-none" src="${image}">
  </div>
</div>
`),
    new Story('Responsive')
      .code(`\
<div class="flex justify-center bg-gradient-to-r from-green-50 to-green-200 px-4 py-6">
  <div class="flex w-32 h-32 bg-green-400 bg-stripes bg-stripes-white">
    <img class="transform scale-75 md:transform-none" src="${image}">
  </div>
</div>
`),
    new Story('Variants', '', 'javascript')
      .code(`\
// tailwind.config.js
module.exports = {
  variants: {
    extend: {
      transform: ['hover', 'focus']
    }
  }
}
`),
    new Story('Disabling', '', 'javascript')
      .code(`\
// tailwind.config.js
module.exports = {
  corePlugins: {
    transform: false
  }
}`)
  ])
    .render();
};
