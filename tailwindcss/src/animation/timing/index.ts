import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Transition Timing Function', true);
  book.append([
    new Story("Set Transition Timing Function", "设定过渡动画的计时函数")
      .code(`\
<!--
  'ease-{timing-function}': 设置过渡动画的计时函数
-->
<div class="flex justify-around px-4 py-6 bg-blue-100 text-white text-lg">
  <button class="ease-linear duration-300 transition transform hover:scale-125
                 bg-blue-700 rounded-lg shadow-lg font-medium focus:outline-none
                 px-4 py-2">
    Hover me
  </button>

  <button class="ease-in duration-300 transition transform hover:scale-125
                 bg-blue-700 rounded-lg shadow-lg font-medium focus:outline-none
                 px-4 py-2">
    Hover me
  </button>

  <button class="ease-out duration-300 transition transform hover:scale-125
                 bg-blue-700 rounded-lg shadow-lg font-medium focus:outline-none
                 px-4 py-2">
    Hover me
  </button>

  <button class="ease-in-out duration-300 transition transform hover:scale-125
                 bg-blue-700 rounded-lg shadow-lg font-medium focus:outline-none
                 px-4 py-2">
    Hover me
  </button>
</div>
`),
    new Story("Responsive")
      .code(`\
<div class="flex justify-around px-4 py-6 bg-green-100 text-white text-lg">
  <button class="ease-linear md:ease-in-out duration-300 transition transform hover:scale-125
                 bg-green-700 rounded-lg shadow-lg font-medium focus:outline-none px-4 py-2">
    Hover me
  </button>
</div>
`),
    new Story("Customize", "通过Tailwind配置设置动画计时函数样式类", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)'
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
      transitionTimingFunction: ['hover', 'focus']
    }
  }
}
`),
    new Story("Disabling", "", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  corePlugins: {
    transitionTimingFunction: false
  }
}`)
  ])
    .render();
}
