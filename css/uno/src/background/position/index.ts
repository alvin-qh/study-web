import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Background Image Position', true);
  book.append([
    new Story('Background Position', '设置背景图像相对于容器元素的位置')
      .code(`\
<!--
  'bg-{side}': 设置背景图像的位置
-->
<div class="grid grid-cols-3 grid-flow-row w-full justify-items-center p-6 gap-4 font-medium text-light-blue-600 bg-light-blue-100">
  <div class="flex-1">
    <p class="text-center text-sm">.bg-left-top</p>
    <div class="bg-left-top bg-cat bg-6 bg-no-repeat bg-light-blue-400 w-32 h-32"></div>
  </div>
  <div class="flex-1">
    <p class="text-center text-sm">.bg-top</p>
    <div class="bg-top bg-cat bg-6 bg-no-repeat bg-light-blue-400 w-32 h-32"></div>
  </div>
  <div class="flex-1">
    <p class="text-center text-sm">.bg-right-top</p>
    <div class="bg-right-top bg-cat bg-6 bg-no-repeat bg-light-blue-400 w-32 h-32"></div>
  </div>
  <div class="flex-1">
    <p class="text-center text-sm">.bg-left</p>
    <div class="bg-left bg-cat bg-6 bg-no-repeat bg-light-blue-400 w-32 h-32"></div>
  </div>
  <div class="flex-1">
    <p class="text-center text-sm">.bg-center</p>
    <div class="bg-center bg-cat bg-6 bg-no-repeat bg-light-blue-400 w-32 h-32"></div>
  </div>
  <div class="flex-1">
    <p class="text-center text-sm">.bg-right</p>
    <div class="bg-right bg-cat bg-6 bg-no-repeat bg-light-blue-400 w-32 h-32"></div>
  </div>
  <div class="flex-1">
    <p class="text-center text-sm">.bg-left-bottom</p>
    <div class="bg-left-bottom bg-cat bg-6 bg-no-repeat bg-light-blue-400 w-32 h-32"></div>
  </div>
  <div class="flex-1">
    <p class="text-center text-sm">.bg-bottom</p>
    <div class="bg-bottom bg-cat bg-6 bg-no-repeat bg-light-blue-400 w-32 h-32"></div>
  </div>
  <div class="flex-1">
    <p class="text-center text-sm">.bg-right-bottom</p>
    <div class="bg-right-bottom bg-cat bg-6 bg-no-repeat bg-light-blue-400 w-32 h-32"></div>
  </div>
</div>
`),
    new Story('Responsive')
      .code(`\
<div class="p-6 bg-green-100">
  <div class="bg-center md:bg-top flex-1 h-64 bg-cover bg-no-repeat bg-cat"></div>
</div>
`),
    new Story('Customize', 'Min-Width Scale', 'javascript')
      .code(`\
// tailwind.config.js
module.exports = {
  theme: {
    backgroundPosition: {
      bottom: 'bottom',
      'bottom-4': 'center bottom 1rem',   // New
      center: 'center',
      left: 'left',
//    'left-bottom': 'left bottom',
//    'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
      'top-4': 'center top 1rem'         // New
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
      backgroundPosition: ['hover', 'focus']
    }
  }
}
`),
    new Story('Disabling', '', 'javascript')
      .code(`\
// tailwind.config.js
module.exports = {
  corePlugins: {
    backgroundPosition: false
  }
}`)
  ])
    .render();
};
