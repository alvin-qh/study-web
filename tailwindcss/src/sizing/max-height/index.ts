import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Max Height', true);
  book.append([
    new Story("Max Height", "使用'max-h-full'或'max-h-screen'功能类设置元素的最大高度")
      .code(`\
<div class="h-48 p-6 bg-light-blue-300 text-white text-lg font-semibold">
  <div class="h-64 max-h-full flex items-center justify-center bg-light-blue-500">
    max-h-full
  </div>
</div>
<hr class="m-6">
<div class="h-48 p-6 overflow-y-auto bg-light-blue-300 text-white text-lg font-semibold">
  <div class="h-48 max-h-16 flex items-center justify-center bg-light-blue-500">
    max-h-16
  </div>
</div>
<hr class="m-6">
<div class="h-48 p-6 overflow-y-auto bg-light-blue-300 text-white text-lg font-semibold">
  <div class="h-48 max-h-screen flex items-center justify-center bg-light-blue-500">
    max-h-screen
  </div>
</div>
`),
    new Story("Responsive")
      .code(`\
<div class="h-48 p-6 overflow-y-auto bg-rose-300 text-white text-lg font-semibold">
  <div class="h-48 max-h-24 md:max-h-full flex items-center justify-center bg-rose-500">
    Responsive
  </div>
</div>
`),
    new Story("Customize", "可以通过修改tailwind配置，定制默认的最大高度", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  theme: {
    maxHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%'
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
      maxHeight: ['hover', 'focus']
    }
  }
}
`),
    new Story("Disabling", "", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  corePlugins: {
    maxHeight: false
  }
}`)
  ])
    .render();
}
