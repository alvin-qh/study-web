import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Transition Delay', true);
  book.append([
    new Story("Set Transition Delay", "设置过渡动画的延迟时间")
      .code(`\
<!--
  'delay-{amount}': 设置过渡动画的延迟时间
-->
<div class="flex justify-around px-4 py-6 bg-yellow-100 text-white text-lg">
  <button class="delay-150 ease-in-out transition transform hover:scale-125
                 bg-yellow-600 rounded-md shadow-sm font-medium focus:outline-none px-4 py-2">
    Hover me
  </button>
  
  <button class="delay-300 ease-in-out transition transform hover:scale-125 
                 bg-yellow-600 rounded-md shadow-sm font-medium focus:outline-none px-4 py-2">
    Hover me
  </button>
  
  <button class="delay-700 ease-in-out transition transform hover:scale-125
                 bg-yellow-600 rounded-md shadow-sm font-medium focus:outline-none px-4 py-2">
    Hover me
  </button>
</div>
`),
    new Story("Responsive")
      .code(`\
<div class="flex justify-around px-4 py-6 bg-purple-100 text-white text-lg">
  <button class="delay-150 md:delay-300 ease-in-out transition transform hover:scale-125
                 bg-purple-600 rounded-md shadow-sm font-medium focus:outline-none px-4 py-2">
    Hover me
  </button>
</div>
`),
    new Story("Customize", "通过Tailwind配置，设置过渡动画延迟样式类", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      transitionDelay: {
        '0': '0ms',
        '2000': '2000ms',
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
      transitionDelay: ['hover', 'focus']
    }
  }
}
`),
    new Story("Disabling", "", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  corePlugins: {
    transitionDelay: false
  }
}`)
  ])
    .render();
}
