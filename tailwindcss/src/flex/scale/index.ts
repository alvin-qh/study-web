import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Flex Scale', true);
  book.append([
    new Story("Initial", "允许元素在考虑到其初始尺寸的情况下根据其容器尺寸进行缩小但不放大")
      .code(`\
<!--
  'flex-initial': 当容器尺寸大于元素尺寸时，显示元素的原始尺寸
                  当容器尺寸小于元素尺寸时，缩小元素以适应容器尺寸
-->
<div class="flex gap-4 text-lg font-semibold text-white">
  <div class="flex-initial flex items-center justify-center px-2 bg-indigo-500">Short</div>
  <div class="flex-initial flex items-center justify-center px-2 bg-indigo-500">Medium length</div>
  <div class="flex-initial flex items-center justify-center px-2 bg-indigo-500">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Qui ad labore ipsam, aut rem quo repellat esse tempore id, quidem
  </div>
</div>
`),
    new Story("Flex 1", "允许元素根据其容器尺寸进行放大和缩小，忽略其初始尺寸")
      .code(`\
<!--
  'flex-1': 子元素完全根据容器情况进行缩放，
-->
<div class="flex gap-4 text-lg text-white font-semibold">
  <div class="flex-1 flex items-center justify-center bg-pink-400 px-4">Short</div>
  <div class="flex-1 flex items-center justify-center bg-pink-400 px-4">Medium length</div>
  <div class="flex-1 flex items-center justify-center bg-pink-400 px-4">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Qui ad labore ipsam, aut rem quo repellat esse tempore id, quidem
  </div>
</div>
`),
    new Story("Auto", "在考虑到元素初始大小的情况下对其进行放大和缩小")
      .code(`\
<!--
  'flex-auto': 自动根据容器尺寸对元素进行缩放，并考虑元素的初始尺寸
-->
<div class="flex gap-4 text-lg text-white font-semibold">
  <div class="flex-auto flex items-center bg-blue-400 px-2">Short</div>
  <div class="flex-auto flex items-center bg-blue-400 px-2">Medium length</div>
  <div class="flex-auto flex items-center bg-blue-400 px-2">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Qui ad labore ipsam, aut rem quo repellat esse tempore id, quidem
  </div>
</div>
`),
    new Story("None", "阻止元素缩放")
      .code(`\
<!--
  'flex-none': 阻止元素为适应其容器进行的缩放
-->
<div class="flex gap-4 text-lg text-white font-semibold">
  <div class="flex-1 flex items-center bg-green-400 px-2">
    Item that can grow or shrink if needed
  </div>
  <div class="flex-none flex items-center bg-green-600 px-2">
    Item that cannot grow or shrink
  </div>
  <div class="flex-1 flex items-center bg-green-400 px-2">
    Item that can grow or shrink if needed
  </div>
</div>
`),
    new Story("Responsive")
      .code(`\
<div class="flex gap-4 text-lg text-white font-semibold">
  <div class="flex-1 md:flex-initial flex items-center bg-red-400 px-4">1</div>
  <div class="flex-1 md:flex-initial flex items-center bg-red-400 px-4">2</div>
  <div class="flex-1 md:flex-initial flex items-center bg-red-400 px-4">3</div>
</div>
`),
    new Story("Flex Values", "可以通过设置'tailwind.config.js'来配置缩放样式类", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  theme: {
    flex: {
      '1': '1 1 0%',
      auto: '1 1 auto',
//    initial: '0 1 auto',   // Disable original 'flex-initial' define
      inherit: 'inherit',    // Add new 'flex-initial' class
      none: 'none',
      '2': '2 2 0%'          // add new 'flex-2' class
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
      flex: ['hover', 'focus'],
    }
  }
}
`),
    new Story("Disabling", "", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  corePlugins: {
    flex: false
  }
}
`)
  ])
    .render();
};
