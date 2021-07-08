import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Transition Duration', true);
  book.append([
    new Story("Set Transition Duration", "设置过渡动画的过渡时长")
      .code(`\
<!--
  'duration-{amount}': 设置过渡动画的过渡时长
-->
<div class="flex items-center justify-around bg-teal-100 px-4 py-6 text-white text-lg">
  <button class="duration-150 transition transform hover:scale-125 ease-in-out
                 bg-teal-600 rounded-md shadow-lg font-medium focus:outline-none px-4 py-2">
    Hover me
  </button>
  
  <button class="duration-300 transition transform hover:scale-125 ease-in-out
                 bg-teal-600 rounded-md shadow-lg font-medium focus:outline-none px-4 py-2">
    Hover me
  </button>
  
  <button class="duration-700 transition transform hover:scale-125 ease-in-out
                 bg-teal-600 rounded-md shadow-lg font-medium focus:outline-none px-4 py-2">
    Hover me
  </button>
</div>
`),
    new Story("Responsive")
      .code(`\
<div class="flex items-center justify-around bg-red-100 px-4 py-6 text-white text-lg">
  <button class="duration-100 md:duration-500 transition transform hover:scale-125 ease-in-out
                 bg-red-600 rounded-md shadow-lg font-medium focus:outline-none px-4 py-2">
    Hover me
  </button>
</div>
`),
    new Story("Customize", "通过Tailwind配置，设置过渡动画时长样式类", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      transitionDuration: {
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
      transitionDuration: ['hover', 'focus']
    }
  }
}
`),
    new Story("Disabling", "", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  corePlugins: {
    transitionDuration: false
  }
}`)
  ])
    .render();
}
