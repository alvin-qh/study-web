import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Flex Shrink', true);
  book.append([
    new Story("Shrink", "允许元素在必要时缩小尺寸")
      .code(`\
<!--
  'flex-shrink': 允许元素在必要时缩小其尺寸，以适应容器尺寸
-->
<div class="flex gap-4 font-semibold text-white text-lg">
  <div class="flex-grow-0 w-16 h-16 flex items-center justify-center bg-purple-400 px-2">
    Locked
  </div>
  <div class="flex-shrink w-80 h-16 flex items-center justify-center bg-purple-400 px-2">
    Shrinkable
  </div>
  <div class="flex-grow-0 w-16 h-16 flex items-center justify-center bg-purple-400 px-2">
    Locked
  </div>
</div>
`),
    new Story("Don't Shrink", "禁止元素缩小其尺寸")
      .code(`\
<!--
  'flex-shrink-0': 禁止元素缩小其尺寸
-->
<div class="flex gap-4 font-semibold text-white text-lg">
  <div class="flex-1 h-16 flex items-center justify-center bg-blue-400 px-2">
    Shrinkable
  </div>
  <div class="flex-shrink-0 w-32 h-16 flex items-center justify-center bg-blue-400 px-2">
    Locked
  </div>
  <div class="flex-1 h-16 flex items-center justify-center bg-blue-400 px-2">
    Shrinkable
  </div>
</div>
`),
    new Story("Responsive")
      .code(`\
<div class="flex gap-4 font-semibold text-white text-lg">
  <div class="flex-shrink md:flex-shrink-0 w-48 h-16 flex items-center justify-center bg-pink-400">
    1
  </div>
  <div class="flex-shrink md:flex-shrink-0 w-48 h-16 flex items-center justify-center bg-pink-400">
    2
  </div>
  <div class="flex-shrink md:flex-shrink-0 w-48 h-16 flex items-center justify-center bg-pink-400">
    3
  </div>
</div>
`),
    new Story("Shrink Values", "通过修改'tailwind.config.js'配置，可修改缩放定义的样式类", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  theme: {
    flexGrow: {
      '0': 0,
//    DEFAULT: 1,   // Disable original grow default value
      DEFAULT: 2,   // Add new grow default value
      '1': 1        // Add 'flex-group-1' class
  }
}
`),
    new Story("Variants", "", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  variants: {
    extend: {
      flexShrink: ['hover', 'focus'],
    }
  }
}
`),
    new Story("Disabling", "", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  corePlugins: {
    flexShrink: false
  }
}
`)
  ])
    .render();
};
