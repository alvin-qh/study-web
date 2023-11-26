import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Opacity', true);
  book.append([
    new Story('Set Opacity', '设置元素背景不透明度')
      .code(`\
<!--
  'bg-opacity-{amount}': 设置元素背景的不透明度, 包括背景和边框
-->
<div class="grid grid-cols-2 grid-flow-row gap-4 w-full p-10 text-white text-2xl font-semibold bg-blue-100">
  <div class="bg-opacity-100 bg-light-blue-600 h-20 rounded-md flex items-center justify-center">100%</div>
  <div class="bg-opacity-75 bg-light-blue-600 h-20 rounded-md flex items-center justify-center">75%</div>
  <div class="bg-opacity-50 bg-light-blue-600 h-20 rounded-md flex items-center justify-center">50%</div>
  <div class="bg-opacity-25 bg-light-blue-600 h-20 rounded-md flex items-center justify-center">25%</div>
  <div class="bg-opacity-0 bg-light-blue-600 h-20 rounded-md flex items-center justify-center">0%</div>
</div>
`),
    new Story('Responsive')
      .code(`\
<div class="w-full p-10 text-white text-2xl font-semibold bg-green-100">
  <div class="bg-opacity-100 md:bg-opacity-50 w-1/2 m-auto bg-green-600 h-20 rounded-md"></div>
</div>
`),
    new Story('Customize', '通过Tailwind配置文件设置透明度样式类', 'javascript')
      .code(`\
// tailwind.config.js
module.exports = {
  theme: {
    // 定义元素不透明度
    opacity: {
      '15': '0.15',
      '35': '0.35',
      '65': '0.65'
    },

    // 定义背景不透明度
    backgroundOpacity: {
      '10': '0.1',
      '20': '0.2',
      '95': '0.95'
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
      backgroundOpacity: ['active']
    }
  }
}
`),
    new Story('Disabling', '', 'javascript')
      .code(`\
// tailwind.config.js
module.exports = {
  corePlugins: {
    backgroundOpacity: false
  }
}`)
  ])
    .render();
};
