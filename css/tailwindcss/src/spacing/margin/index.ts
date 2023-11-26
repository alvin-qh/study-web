import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Margin', true);
  book.append([
    new Story('Once Side Margin', '使用 `m{t|r|b|l}-{size}` 为元素单侧设置外边距')
      .code(`\
<div class="space-x-10 h-24 flex flex-wrap items-center justify-center text-white text-lg font-semibold">
  <div class="bg-stripes bg-stripes-rose-500">
    <div class="mt-6 flex items-center justify-center px-4 py-2 bg-rose-500">mt-6</div>
  </div>
  <div class="bg-stripes bg-stripes-rose-500">
    <div class="mr-4 flex items-center justify-center px-4 py-2 bg-rose-500">mr-4</div>
  </div>
  <div class="bg-stripes bg-stripes-rose-500">
    <div class="mr-8 flex items-center justify-center px-4 py-2 bg-rose-500">mr-8</div>
  </div>
  <div class="bg-stripes bg-stripes-rose-500">
    <div class="ml-2 flex items-center justify-center w-12 h-10 bg-rose-500">ml-2</div>
  </div>
</div>
`),
    new Story('Horizontal Margin', '使用 `mx-{size}` 为元素垂直方向设置外边距')
      .code(`\
<div class="space-x-10 h-24 flex flex-wrap items-center justify-center text-white text-lg font-semibold">
  <div class="bg-stripes bg-stripes-green-500">
    <div class="mx-8 flex items-center justify-center px-4 py-2 bg-green-500">mx-8</div>
  </div>
</div>
`),
    new Story('Vertical Margin', '使用 `my-{size}` 为元素水平方向设置外边距')
      .code(`\
<div class="space-x-10 h-24 flex flex-wrap items-center justify-center text-white text-lg font-semibold">
  <div class="bg-stripes bg-stripes-indigo-500">
    <div class="my-8 flex items-center justify-center px-4 py-2 bg-indigo-500">my-8</div>
  </div>
</div>
`),
    new Story('Around Margin', '使用 `m-{size}` 为元素四周设置外边距')
      .code(`\
<div class="space-x-10 h-24 flex flex-wrap items-center justify-center text-white text-lg font-semibold">
  <div class="bg-stripes bg-stripes-fuchsia-500">
    <div class="m-8 flex items-center justify-center px-4 py-2 bg-fuchsia-500">m-8</div>
  </div>
</div>
`),
    new Story('Negative Margin', '使用 `-m{side?}-{size}` 为元素设置负的外边距')
      .code(`\
<div class="h-24 flex flex-col items-center text-white text-lg font-semibold">
  <div class="w-32 h-16 bg-stripes bg-stripes-emerald-500"></div>
  <div class="-mt-8 flex items-center justify-center px-4 py-2 bg-emerald-500">m-8</div>
</div>
`),
    new Story('Responsive')
      .code(`\
<div class="h-24 flex text-white text-lg font-semibold">
  <div class="bg-stripes bg-stripes-yellow-500">
    <div class="mt-8 my:my-8 flex items-center justify-center px-4 py-2 bg-yellow-500">Responsive</div>
  </div>
</div>
`),
    new Story('Customize', '一次性自定义 \'padding\', \'margin\', \'width\' 和 \'height\' 的值', 'javascript')
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
    new Story('Customize', '添加、修改或删除 \'margin\' 的样式类', 'javascript')
      .code(`\
// tailwind.config.js
module.exports = {
  theme: {
    margin: {
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '48px'
    }
  }
}
`),
    new Story('Customize', '添加、修改或删除负页边距样式类, 采取 `-m{side?}-{size}` 格式', 'javascript')
      .code(`\
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      margin: {
        '-72': '-18rem'   // 添加负值
      }
    }
  }
}
`)
  ])
    .render();
};
