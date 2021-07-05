import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Min Width', true);
  book.append([
    new Story("Min Width", "设置元素的最小宽度")
      .code(`\
<!--
  'min-w-0'或'min-w-full': 设置元素的最小宽度
-->
<div class="py-5 space-y-4 text-white text-lg font-semibold">
  <div class="min-w-0 w-32 py-5 flex items-center justify-center bg-indigo-500">
    min-w-0
  </div>
  <div class="min-w-full w-32 py-5 flex items-center justify-center bg-indigo-500">
    min-w-full
  </div>
</div>
`),
    new Story("Responsive")
      .code(`\
<div class="py-5 space-y-4 text-white text-lg font-semibold">
  <div class="min-w-0 md:min-w-full w-32 py-5 flex items-center justify-center bg-green-500">
    Responsive
  </div>
</div>
`),
    new Story("Customize", "Min-Width Scale", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  theme: {
    minWidth: {
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
      minWidth: ['hover', 'focus']
    }
  }
}
`),
    new Story("Disabling", "", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  corePlugins: {
    minWidth: false
  }
}`)
  ])
    .render();
}
