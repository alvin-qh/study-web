import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Background Color', true);
  book.append([
    new Story('Background Color', '设置背景色')
      .code(`\
<!--
  'bg-{color}-{amount}': 设置背景颜色和色深
  'active:bg-{color}-{amount}': 需要在 Variants 中设置 'backgroundColor: ["active"]'
  'active:shadow-{size}': 需要在 Variants 中设置 'boxShadow: ["active"]'
-->
<div class="bg-green-100 flex items-center justify-center px-4 py-6">
  <button class="bg-green-500 active:bg-green-600
                 shadow-md active:shadow-inner
                 focus:outline-none
                 text-xl font-semibold text-white
                 border-green-600 rounded-md px-4 py-2">
    Click me
  </button>
</div>
`),
    new Story('No shadow', '取消阴影设置')
      .code(`\
<!--
  'shadow-none': 取消阴影
-->
<div class="bg-red-100 flex justify-center px-4 py-6">
  <div class="shadow-none
              bg-red-200 text-red-500 rounded-md
              text-xl font-medium flex items-center justify-center
              w-48 h-28">
    .shadow-none
  </div>
</div>
`),
    new Story('Responsive')
      .code(`\
<div class="bg-green-100 flex justify-center px-4 py-6">
  <div class="shadow-none md:shadow-xl
              bg-green-200 text-green-500 rounded-md
              text-xl font-medium flex items-center justify-center
              w-48 h-28">
    Responsive
  </div>
</div>
`),
    new Story('Customize', '通过Tailwind配置定义阴影样式类', 'javascript')
      .code(`\
// tailwind.config.js
module.exports = {
  theme: {
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',  // New
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
//    outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',   // Delete
      focus: '0 0 0 3px rgba(66, 153, 225, 0.5)',     // New
      none: 'none'
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
      boxShadow: ['active']
    }
  }
}
`),
    new Story('Disabling', '', 'javascript')
      .code(`\
// tailwind.config.js
module.exports = {
  corePlugins: {
    boxShadow: false
  }
}`)
  ])
    .render();
};
