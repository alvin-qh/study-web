import image from '../../asset/image.jpg';
import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Scale', true);
  book.append([
    new Story('Set Scale Percent', '设置元素的缩放百分比')
      .code(`\
<!--
  'scale-{amount}': 设置元素的缩放百分比
  'scale-{x,y}-{amount}': 设置元素在x或y轴坐标上的缩放百分比
-->
<div class="flex flex-col space-y-8 items-center justify-center bg-gradient-to-r from-purple-50 to-purple-200 py-6">
  <div class="bg-purple-700 bg-stripes bg-stripes-white flex w-20 h-20">
    <img class="transform-gpu scale-75" src="${image}">
  </div>
  <div class="bg-purple-700 bg-stripes bg-stripes-white flex w-20 h-20">
    <img class="transform-gpu scale-100" src="${image}">
  </div>
  <div class="bg-purple-700 bg-stripes bg-stripes-white flex w-20 h-20">
    <img class="transform-gpu scale-150" src="${image}">
  </div>
  <div class="bg-purple-700 bg-stripes bg-stripes-white flex w-20 h-20">
    <img class="transform-gpu scale-x-125" src="${image}">
  </div>
</div>
`),
    new Story('Responsive')
      .code(`\
<div class="flex justify-center bg-gradient-to-r from-blue-50 to-blue-200 py-6">
  <div class="bg-blue-700 bg-stripes bg-stripes-white flex w-20 h-20">
    <img class="transform-gpu scale-75 md:scale-100" src="${image}">
  </div>
</div>
`),
    new Story('Customize', '通过Tailwind配置设置缩放比例样式类', 'javascript')
      .code(`\
// tailwind.config.js
module.exports = {
  theme: {
    scale: {
      '0': '0',
      '25': '.25',    // New
      '50': '.5',
      '75': '.75',
      '90': '.9',
//    '95': '.95',
      '100': '1',
//    '105': '1.05',
//    '110': '1.1',
      '125': '1.25',
      '150': '1.5',
      '200': '2'      // New
    }
  }
}
`),
    new Story('Variants', '', 'javascript')
      .code(`\
// tailwind.config.js
module.exports = {
  variants: {
    extend: {
      scale: ['active', 'group-hover']
    }
  }
}
`),
    new Story('Disabling', '', 'javascript')
      .code(`\
// tailwind.config.js
module.exports = {
  corePlugins: {
    scale: false
  }
}`)
  ])
    .render();
};
