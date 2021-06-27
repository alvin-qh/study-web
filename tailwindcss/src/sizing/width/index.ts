import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Width', true);
  book.append([
    new Story("Auto", "让浏览器来自动决定元素的宽度")
      .code(`\
<!--
  'w-auto': 自动设置元素宽度
-->
<div class="my-5 mx-4 text-white text-lg font-semibold">
  <div class="w-auto py-4 flex items-center justify-center bg-green-500">
    The element has auto width
  </div>
</div>
`),
    new Story("Screen Width", "使一个元素跨越整个视口宽度")
      .code(`\
<!--
  'w-screen': 设置基于视口宽度的元素的宽度
-->
<div class="my-5 mx-4 overflow-x-auto text-white text-lg font-semibold">
  <div class="w-screen py-4 flex items-center justify-center bg-rose-500">
    The element has screen width
  </div>
</div>
`),
    new Story("Fixed Width", "设置固定宽度值")
      .code(`\
<!--
  'w-{number}或w-px': 基于数值设置固定宽度值
-->
<div class="my-5 mx-4 space-y-4 text-white text-sm font-semibold">
  <div class="w-8 py-2 pl-1 flex justify-start bg-light-blue-500">w-8</div>
  <div class="w-12 py-2 pl-1 flex justify-start bg-light-blue-500">w-12</div>
  <div class="w-16 py-2 pl-1 flex justify-start bg-light-blue-500">w-16</div>
  <div class="w-24 py-2 pl-1 flex justify-start bg-light-blue-500">w-24</div>
</div>
`),
    new Story("Fluid Width", "通过一个百分比值设置元素宽度")
      .code(`\
<!--
  'w-{fraction}或w-full': 设置基于百分比的元素宽度
-->
<div class="space-y-5 my-5 mx-5 text-white text-lg font-semibold font-mono">
  <div class="flex flex-row">
    <div class="w-1/2 py-3 flex items-center justify-center bg-fuchsia-300">w-1/2</div>
    <div class="w-1/2 py-3 flex items-center justify-center bg-fuchsia-500">w-1/2</div>
  </div>
  <div class="flex flex-row">
    <div class="w-2/5 py-3 flex items-center justify-center bg-fuchsia-300">w-2/5</div>
    <div class="w-3/5 py-3 flex items-center justify-center bg-fuchsia-500">w-3/5</div>
  </div>
  <div class="flex flex-row">
    <div class="w-1/3 py-3 flex items-center justify-center bg-fuchsia-300">w-1/3</div>
    <div class="w-2/3 py-3 flex items-center justify-center bg-fuchsia-500">w-2/3</div>
  </div>
  <div class="flex flex-row">
    <div class="w-1/4 py-3 flex items-center justify-center bg-fuchsia-300">w-1/4</div>
    <div class="w-3/4 py-3 flex items-center justify-center bg-fuchsia-500">w-3/4</div>
  </div>
  <div class="flex flex-row">
    <div class="w-1/5 py-3 flex items-center justify-center bg-fuchsia-300">w-1/5</div>
    <div class="w-4/5 py-3 flex items-center justify-center bg-fuchsia-500">w-4/5</div>
  </div>
  <div class="flex flex-row">
    <div class="w-1/6 py-3 flex items-center justify-center bg-fuchsia-300">w-1/6</div>
    <div class="w-5/6 py-3 flex items-center justify-center bg-fuchsia-500">w-5/6</div>
  </div>
  <div class="flex flex-row">
    <div class="w-full py-3 flex items-center justify-center bg-fuchsia-500">w-1/4</div>
  </div>
</div>
`),
    new Story("Responsive")
      .code(`\
<div class="my-5 mx-5 text-white text-lg font-semibold">
  <div class="w-1/2 md:w-full py-3 flex items-center justify-center bg-green-500">
    Responsive
  </div>
</div>
`),
    new Story("Customize", "一次性自定义'padding', 'margin', 'width'和'height'的值", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem'
      }
    }
  }
}
`),
    new Story("Customize", "可以通过tailwind配置增加、删除或修改'width'部分的样式类", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      width: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%'
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
      width: ['hover', 'focus']
    }
  }
}
`),
    new Story("Disabling", "", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  corePlugins: {
    width: false
  }
}`)
  ])
    .render();
};
