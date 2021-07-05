import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Min Height', true);
  book.append([
    new Story("Min Height", "使用'min-h-0', 'min-h-full'或'min-h-screen'样式类设置元素的最小高度")
      .code(`\
<div class="h-48 p-6 text-white text-lg font-semibold bg-purple-300">
  <div class="h-24 min-h-full flex items-center justify-center bg-purple-500">
    min-h-full
  </div>
</div>
<hr class="my-6">
<div class="h-48 p-6 text-white text-lg font-semibold bg-purple-300">
  <div class="h-24 min-h-0 flex items-center justify-center bg-purple-500">
    min-h-0
  </div>
</div>
<hr class="my-6">
<div class="h-48 p-6 overflow-y-auto text-white text-lg font-semibold bg-purple-300">
  <div class="h-24 min-h-screen flex items-center justify-center bg-purple-500">
    min-h-screen
  </div>
</div>
`),
    new Story("Responsive")
      .code(`\
<div class="h-48 p-6 text-white text-lg font-semibold bg-green-300">
  <div class="h-24 min-h-0 md:min-h-full flex items-center justify-center bg-green-500">
    Responsive
  </div>
</div>
`),
    new Story("Customize", "通过Tailwind配置文件定制默认最小高度", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  theme: {
    minHeight: {
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
      minHeight: ['hover', 'focus']
    }
  }
}
`),
    new Story("Disabling", "", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  corePlugins: {
    minHeight: false
  }
}`)
  ])
    .render();
}
