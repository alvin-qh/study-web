import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Height', true);
  book.append([
    new Story('Auto', '让浏览器来自动决定元素的高度')
      .code(`\
<!--
  'h-auto': 自动设置元素高度
-->
<div class="my-5 mx-4 text-white text-lg font-semibold">
  <div class="h-auto py-4 flex items-center justify-center bg-amber-500">
    The element has auto height
  </div>
</div>
`),
    new Story('Screen Height', '使一个元素跨越整个视口高度')
      .code(`\
<!--
  'w-screen': 设置基于视口宽度的元素的宽度
-->
<div class="my-5 mx-4 h-44 overflow-y-auto text-white text-lg font-semibold">
  <div class="h-screen py-4 flex items-center justify-center bg-rose-500">
    The element has screen height
  </div>
</div>
`),
    new Story('Fixed Height', '基于数值设置固定高度值')
      .code(`\
<!--
  'w-{fraction}或w-px': 基于数值设置固定的元素高度值
-->
<div class="space-x-5 my-5 mx-5 flex flex-cols items-end text-white text-lg font-semibold font-mono">
  <div class="h-8 px-4 flex items-end justify-center bg-indigo-500">h-8</div>
  <div class="h-12 px-4 pb-2 flex items-end justify-center bg-indigo-500">h-12</div>
  <div class="h-16 px-4 pb-2 flex items-end justify-center bg-indigo-500">h-16</div>
  <div class="h-24 px-4 pb-2 flex items-end justify-center bg-indigo-500">h-24</div>
</div>
`),
    new Story('Full Height', '设置元素高度为100%, 基于父元素设置的高度')
      .code(`\
<!--
  'w-full': 设置元素高度为100%, 基于父元素设置的高度
-->
<div class="h-64 my-5 mx-5 items-end text-white text-lg font-semibold font-mono">
  <div class="h-full px-4 flex items-center justify-center bg-green-500">h-full</div>
</div>
`),
    new Story('Responsive')
      .code(`\
<div class="h-64 my-5 mx-5 items-end text-white text-lg font-semibold font-mono">
  <div class="h-32 md:h-full px-4 flex items-center justify-center bg-blue-500">
    Responsive
  </div>
</div>
`),
    new Story('Customize', '一次性自定义\'padding\', \'margin\', \'width\'和\'height\'的值', 'javascript')
      .code(`\
// tailwind.config.js
module.exports = {
  theme: {
    spacing: {
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '48px'
    }
  }
}
`),
    new Story('Customize', '可以通过tailwind配置增加、删除或修改\'width\'部分的样式类', 'javascript')
      .code(`\
// tailwind.config.js
module.exports = {
  theme: {
    height: {
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '48px'
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
      height: ['hover', 'focus']
    }
  }
}
`),
    new Story('Disabling', '', 'javascript')
      .code(`\
// tailwind.config.js
module.exports = {
  corePlugins: {
    height: false
  }
}`)
  ])
    .render();
};
