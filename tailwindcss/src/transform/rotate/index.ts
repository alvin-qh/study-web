import { Story, StoryBook } from '../../common';
import image from '../../asset/image.jpg';

window.onload = () => {
  const book = new StoryBook('Rotate', true);
  book.append([
    new Story("Rotate", "设置元素的旋转角度")
      .code(`\
<!--
  'rotate-{degree}': 顺时针旋转元素到一个角度
  '-rotate-{degree}': 逆时针旋转元素到一个角度
-->
<div class="flex flex-col space-y-10 items-center bg-gradient-to-r from-light-blue-50 to-light-blue-200 py-6">
  <div class="flex bg-light-blue-600 bg-stripes bg-stripes-white w-20 h-20">
    <img src="${image}">
  </div>
  <div class="flex bg-light-blue-600 bg-stripes bg-stripes-white w-20 h-20">
    <img class="transform-gpu rotate-45" src="${image}">
  </div>
  <div class="flex bg-light-blue-600 bg-stripes bg-stripes-white w-20 h-20">
    <img class="transform-gpu rotate-90" src="${image}">
  </div>
  <div class="flex bg-light-blue-600 bg-stripes bg-stripes-white w-20 h-20">
    <img class="transform-gpu rotate-180" src="${image}">
  </div>
  <div class="flex bg-light-blue-600 bg-stripes bg-stripes-white w-20 h-20">
    <img class="transform-gpu -rotate-45" src="${image}">
  </div>
  <div class="flex bg-light-blue-600 bg-stripes bg-stripes-white w-20 h-20">
    <img class="transform-gpu -rotate-90" src="${image}">
  </div>
</div>
`),
    new Story("Responsive")
      .code(`\
<div class="flex flex-col space-y-10 items-center bg-gradient-to-r from-orange-50 to-orange-200 py-6">
  <div class="flex bg-orange-600 bg-stripes bg-stripes-white w-20 h-20">
    <img class="transform-gpu rotate-45 md:rotate-90" src="${image}">
  </div>
</div>
`),
    new Story("Customize", "通过Tailwind配置，定义元素旋转角度样式类", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  theme: {
    rotate: {
//    '-180': '-180deg',
//    '-90': '-90deg',
//    '-45': '-45deg',
      '0': '0',
      '45': '45deg',
      '90': '90deg',
      '135': '135deg',  // New
      '180': '180deg',
      '270': '270deg'   // New
    }
  }
}
`),
    new Story("Variants", "", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  variants: {
    extend: {
      rotate: ['active', 'group-hover']
    }
  }
}
`),
    new Story("Disabling", "", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  corePlugins: {
    rotate: false
  }
}`)
  ])
    .render();
}
