import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Transition', true);
  book.append([
    new Story("Transition", "启用对各类样式变化的过渡效果")
      .code(`\
<!--
  'transition': 启用对基本样式变化的过渡效果
  影响的样式包括：background-color, border-color, color, fill, stroke, opacity, box-shadow, transform
-->
<div class="flex items-center justify-center h-32 bg-light-blue-100">
  <button class="transition duration-500 ease-in-out 
                 bg-blue-600 hover:bg-red-600 
                 transform hover:-translate-y-1 hover:scale-110 
                 shadow-md hover:shadow-lg 
                 px-4 py-2 text-xl font-medium text-white rounded-md 
                 focus:outline-none">
    Hover me
  </button>
</div>
`),
    new Story("Transition All", "启用对各类样式变化的过渡效果")
      .code(`\
<!--
  'transition-all': 启用对所有样式变化的过渡效果
-->
<div class="flex items-center justify-center h-32 bg-amber-100">
  <button class="transition-all duration-500 ease-in-out 
                 bg-amber-200 hover:bg-amber-600 
                 transform hover:-translate-y-1 hover:scale-110 
                 shadow-md hover:shadow-xl
                 px-4 py-2 text-xl font-medium text-white rounded-md 
                 focus:outline-none">
    Hover me
  </button>
</div>
`),
    new Story("Transition Colors", "启用对颜色样式变化（包括边框、背景、文本等）的过渡效果")
      .code(`\
<!--
  'transition-colors': 启用对颜色样式变化（包括边框、背景、文本等）的过渡效果
-->
<div class="flex items-center justify-center h-32 bg-red-100">
  <button class="transition-colors duration-500 ease-in-out 
                 bg-blue-600 hover:bg-green-600 
                 text-gray-300 hover:text-yellow-200
                 px-4 py-2 text-xl font-medium rounded-md shadow-md focus:outline-none">
    Hover me
  </button>
</div>
`),
    new Story("Transition Opacity", "启用对透明度样式变化的透明效果")
      .code(`\
<!--
  'transition-opacity': 启用对颜色样式变化（包括边框、背景、文本等）的过渡效果
-->
<div class="flex items-center justify-center h-32 bg-fuchsia-100">
  <button class="transition-opacity duration-500 ease-in-out 
                 opacity-100 hover:opacity-50
                 px-4 py-2 text-xl font-medium rounded-md shadow-md bg-fuchsia-700 text-white focus:outline-none">
    Hover me
  </button>
</div>
`),
    new Story("Transition Shadow", "启用对透明度样式变化的透明效果")
      .code(`\
<!--
  'transition-shadow': 启用对阴影样式变化的过渡效果
-->
<div class="flex items-center justify-center h-32 bg-green-100">
  <button class="transition-shadow duration-500 ease-in-out
                 shadow-2xl active:shadow
                 px-4 py-2 text-xl font-medium rounded-md bg-green-700 text-white focus:outline-none">
    Click me
  </button>
</div>
`),
    new Story("Transition Transform", "启用对形状变化的过渡效果")
      .code(`\
<!--
  'transition-transform': 启用对形状变化的过渡效果
-->
<div class="flex items-center justify-center h-32 bg-cyan-100">
  <button class="transition-transform duration-500 ease-in-out
                 transform-gpu hover:translate-x-2 hover:scale-110 hover:-rotate-12
                 px-4 py-2 text-xl font-medium rounded-md shadow-md bg-cyan-700 text-white focus:outline-none">
    Hover me
  </button>
</div>
`),
    new Story("Prefers Reduced Motion", "按需启用过渡动画", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  // ...
  variants: {
    transitionProperty: [   // 启用由响应式前缀，'motion-safe:'前缀和'motion-reduce:'前缀修饰的过渡效果
      'responsive', 
      'motion-safe', 
      'motion-reduce'
    ]
  }
}
`),
    new Story("Responsive")
      .code(`\
<div class="flex items-center justify-center h-32 bg-orange-100">
  <button class="md:transition-transform transition-none md:duration-500 md:ease-in-out
                 md:transform md:hover:scale-125
                 px-4 py-2 text-xl font-medium rounded-md shadow-md bg-orange-700 text-white focus:outline-none">
    Hover me
  </button>
</div>
`),
    new Story("Customize", "通过修改Tailwind配置为其它样式变化定义过渡动画效果", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding'
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
      transitionProperty: ['hover', 'focus']
    }
  }
}
`),
    new Story("Disabling", "", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  corePlugins: {
    transitionProperty: false
  }
}`)
  ])
    .render();
}
