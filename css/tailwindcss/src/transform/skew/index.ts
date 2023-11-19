import image from '../../asset/image.jpg';
import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Skew', true);
  book.append([
    new Story('Set Skew', '设置元素的倾斜度')
      .code(`\
<!--
  'skew-{x,y}-{amount}': 设置元素相对x轴或y轴的倾斜度
-->
<div class="flex flex-col items-center space-y-10 bg-gradient-to-r from-blue-50 to-blue-200 py-6">
  <div class="flex flex-row space-x-10">
    <div class="flex bg-blue-700 bg-stripes bg-stripes-white w-20 h-20">
      <img class="transform-gpu skew-y-0" src="${image}">
    </div>
    <div class="flex bg-blue-700 bg-stripes bg-stripes-white w-20 h-20">
      <img class="transform-gpu skew-y-3" src="${image}">
    </div>
    <div class="flex bg-blue-700 bg-stripes bg-stripes-white w-20 h-20">
      <img class="transform-gpu skew-y-6" src="${image}">
    </div>
    <div class="flex bg-blue-700 bg-stripes bg-stripes-white w-20 h-20">
      <img class="transform-gpu skew-y-12" src="${image}">
    </div>
  </div>
  <div class="flex flex-row space-x-10">
    <div class="flex bg-blue-700 bg-stripes bg-stripes-white w-20 h-20">
      <img class="transform-gpu skew-x-0" src="${image}">
    </div>
    <div class="flex bg-blue-700 bg-stripes bg-stripes-white w-20 h-20">
      <img class="transform-gpu skew-x-3" src="${image}">
    </div>
    <div class="flex bg-blue-700 bg-stripes bg-stripes-white w-20 h-20">
      <img class="transform-gpu skew-x-6" src="${image}">
    </div>
    <div class="flex bg-blue-700 bg-stripes bg-stripes-white w-20 h-20">
      <img class="transform-gpu skew-x-12" src="${image}">
    </div>
  </div>
</div>
`),
    new Story('Responsive')
      .code(`\
<div class="flex flex-col items-center space-y-10 bg-gradient-to-r from-rose-50 to-rose-200 py-6">
  <div class="flex bg-rose-700 bg-stripes bg-stripes-white w-20 h-20">
    <img class="transform-gpu skew-y-12 md:skew-y-6" src="${image}">
  </div>
</div>
`),
    new Story('Customize', '通过Tailwind配置设置元素的倾斜度样式类', 'javascript')
      .code(`\
// tailwind.config.js
module.exports = {
  theme: {
    skew: {
      '25': '25deg',
      '60': '60deg'
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
      skew: ['active', 'group-hover']
    }
  }
}
`),
    new Story('Disabling', '', 'javascript')
      .code(`\
// tailwind.config.js
module.exports = {
  corePlugins: {
    skew: false
  }
}`)
  ])
    .render();
};
