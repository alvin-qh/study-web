import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Padding', true);
  book.append([
    new Story("One Side Padding", "使用'p{t|r|b|l}-{size}'为元素单侧设置内边距")
      .code(`\
<div class="space-x-10 h-24 flex flex-wrap items-center justify-center text-white text-lg font-semibold">
  <div class="pt-6 bg-stripes bg-stripes-rose-500">
    <div class="flex items-center justify-center px-4 py-2 bg-rose-500">pt-6</div>
  </div>
  <div class="pr-4 bg-stripes bg-stripes-rose-500">
    <div class="flex items-center justify-center px-4 py-2 bg-rose-500">pr-4</div>
  </div>
  <div class="pb-8 bg-stripes bg-stripes-rose-500">
    <div class="flex items-center justify-center px-4 py-2 bg-rose-500">pb-8</div>
  </div>
  <div class="pl-2 bg-stripes bg-stripes-rose-500">
    <div class="flex items-center justify-center w-12 h-10 bg-rose-500">pl-2</div>
  </div>
</div>
`),
    new Story("Horizontal Padding", "使用'px-{size}'为元素垂直方向设置内边距")
      .code(`\
<div class="space-x-10 h-24 flex flex-wrap items-center justify-center text-white text-lg font-semibold">
  <div class="px-8 bg-stripes bg-stripes-green-500">
    <div class="flex items-center justify-center px-4 py-2 bg-green-500">px-8</div>
  </div>
</div>
`),
    new Story("Vertical Padding", "使用'py-{size}'为元素水平方向设置内边距")
      .code(`\
<div class="space-x-10 h-24 flex flex-wrap items-center justify-center text-white text-lg font-semibold">
  <div class="py-8 bg-stripes bg-stripes-indigo-500">
    <div class="flex items-center justify-center px-4 py-2 bg-indigo-500">py-8</div>
  </div>
</div>
`),
    new Story("Around Padding", "使用'p-{size}'为元素四周设置内边距")
      .code(`\
<div class="space-x-10 h-24 flex flex-wrap items-center justify-center text-white text-lg font-semibold">
  <div class="p-8 bg-stripes bg-stripes-fuchsia-500">
    <div class="flex items-center justify-center px-4 py-2 bg-fuchsia-500">p-8</div>
  </div>
</div>
`),
    new Story("Responsive")
      .code(`\
<div class="space-x-10 h-24 flex flex-wrap items-center justify-center text-white text-lg font-semibold">
  <div class="p-4 md:p-8 bg-stripes bg-stripes-yellow-500">
    <div class="flex items-center justify-center px-4 py-2 bg-yellow-500">Responsive</div>
  </div>
</div>
`),
    new Story("Customize", "一次性自定义'padding', 'margin', 'width'和'height'的值", "javascript")
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
    new Story("Customize", "添加、修改或删除'padding'的样式类", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  theme: {
    padding: {
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '48px'
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
      padding: ['hover', 'focus']
    }
  }
}
`),
    new Story("Disabling", "", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  corePlugins: {
    padding: false
  }
}`)
  ])
    .render();
}
