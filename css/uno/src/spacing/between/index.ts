import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Space Between', true);
  book.append([
    new Story('Horizontal Space Between', '使用 `space-x-{amount}` 在水平方向设置间隔')
      .code(`\
<div class="h-24 flex items-center justify-start text-white text-lg font-semibold">
  <div class="space-x-5 flex flex-row bg-stripes bg-stripes-fuchsia-500">
    <div class="flex items-center justify-center px-6 py-4 bg-fuchsia-500">1</div>
    <div class="flex items-center justify-center px-6 py-4 bg-fuchsia-500">2</div>
    <div class="flex items-center justify-center px-6 py-4 bg-fuchsia-500">3</div>
  </div>
</div>
`),
    new Story('Vertical Space Between', '使用 `space-y-{amount}` 在垂直方向设置间隔')
      .code(`\
<div class="flex justify-center text-white text-lg font-semibold py-4">
  <div class="space-y-5 w-2/3 flex flex-col bg-stripes bg-stripes-blue-500">
    <div class="flex items-center justify-center px-6 py-4 bg-blue-500">1</div>
    <div class="flex items-center justify-center px-6 py-4 bg-blue-500">2</div>
    <div class="flex items-center justify-center px-6 py-4 bg-blue-500">3</div>
  </div>
</div>
`),
    new Story('Reverse', '如果使用了 `flex-{row,col}-reverse` 反转元素顺序, 则需要使用 `space-{x,y}-reverse` 反转设置元素间隔')
      .code(`\
<!--
  'space-{x,y}-reverse space-{x,y}-{n}': 反转设置元素间隔
-->
<div class="h-24 flex items-center justify-end text-white text-lg font-semibold">
  <div class="space-x-5 space-x-reverse flex flex-row-reverse bg-stripes bg-stripes-fuchsia-500">
    <div class="flex items-center justify-center px-6 py-4 bg-fuchsia-500">1</div>
    <div class="flex items-center justify-center px-6 py-4 bg-fuchsia-500">2</div>
    <div class="flex items-center justify-center px-6 py-4 bg-fuchsia-500">3</div>
  </div>
</div>
`),
    new Story('Responsive')
      .code(`\
<div class="h-24 flex items-center justify-start text-white text-lg font-semibold">
  <div class="space-x-2 md:space-x-5 flex flex-row bg-stripes bg-stripes-yellow-500">
    <div class="flex items-center justify-center px-6 py-4 bg-yellow-500">1</div>
    <div class="flex items-center justify-center px-6 py-4 bg-yellow-500">2</div>
    <div class="flex items-center justify-center px-6 py-4 bg-yellow-500">3</div>
  </div>
</div>
`),
    new Story('Customize', '一次性自定义 `padding`, `margin`, `width` 和 `height` 的值', 'javascript')
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
    new Story('Customize', '添加、修改或删除 `margin` 的样式类', 'javascript')
      .code(`\
// tailwind.config.js
module.exports = {
  theme: {
    space: {
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
      space: ['hover', 'focus']
    }
  }
}
`),
    new Story('Disabling', '', 'javascript')
      .code(`\
// tailwind.config.js
module.exports = {
  corePlugins: {
    space: false
  }
}`)
  ])
    .render();
};
