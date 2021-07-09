import { Story, StoryBook } from '../../common';
import image from '../../asset/image.jpg';

window.onload = () => {
  const book = new StoryBook('Background Clip', true);
  book.append([
    new Story("Cilp Background", "控制元素背景的边界框")
      .code(`\
<!--
  'origin-{}': 设置元素的原点，元素的变换均以原点为参照
-->
<div class="flex flex-col space-y-20 items-center justify-center bg-gradient-to-r from-blue-50 to-blue-200 py-20">
  <div class="flex w-32 h-32 bg-blue-400 bg-stripes bg-stripes-white">
    <img class="origin-center transform-gpu rotate-45" src="${image}">
  </div>
  <div class="flex w-32 h-32 bg-blue-400 bg-stripes bg-stripes-white">
    <img class="origin-top-left transform-gpu rotate-45" src="${image}">
  </div>
  <div class="flex w-32 h-32 bg-blue-400 bg-stripes bg-stripes-white">
    <img class="origin-bottom-right transform-gpu rotate-45" src="${image}">
  </div>
  <div class="flex w-32 h-32 bg-blue-400 bg-stripes bg-stripes-white">
    <img class="origin-left transform-gpu rotate-45" src="${image}">
  </div>
</div>
`),
    new Story("Responsive")
      .code(`\
<div class="flex items-center justify-center bg-gradient-to-r from-red-50 to-red-200 py-10">
  <div class="flex w-32 h-32 bg-red-400 bg-stripes bg-stripes-white">
    <img class="origin-center md:origin-top-left transform-gpu scale-75" src="${image}">
  </div>
</div>
`),
    new Story("Customize", "通过Tailwind配置设置原点样式类", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      transformOrigin: {
        '24': '6rem',
        'full': '100%'
      }
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
      transformOrigin: ['hover', 'focus']
    }
  }
}
`),
    new Story("Disabling", "", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  corePlugins: {
    transformOrigin: false
  }
}`)
  ])
    .render();
}
