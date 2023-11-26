import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Placeholder Color', true);
  book.append([
    new Story('Color of Placeholder', '设置占位文本的颜色')
      .code(`\
<!--
  'placeholder-{color}-{amount}': 设置占位文本的颜色
-->
<div class="bg-green-100 px-4 py-6 space-y-5">
  <input class="placeholder-green-300 border-green-400 border block appearance-none rounded-md w-full py-3 px-4
                focus:ring-2 focus:ring-green-200 focus:outline-none text-gray-700 leading-5"
         placeholder="jone@example.com">

  <input class="placeholder-red-300 border-red-400 border block appearance-none rounded-md w-full py-3 px-4
                text-gray-700 leading-5 focus:ring-2 focus:ring-red-200 focus:outline-none"
         placeholder="jone@example.com">
</div>
`),
    new Story('Opacity of Placehoder', '设置占位文本的透明度')
      .code(`\
<!--
  'placeholder-opacity-{amount}': 设置占位文本的透明度
-->
<div class="bg-light-blue-100 px-4 py-6 space-y-5">
  <input class="placeholder-opacity-100 placeholder-light-blue-500 border block appearance-none border-light-blue-400 rounded-md w-full py-3 px-4
                focus:outline-none text-gray-700 leading-5 "
         placeholder="jone@example.com">

  <input class="placeholder-opacity-50 placeholder-light-blue-500 border block appearance-none border-light-blue-400 rounded-md w-full py-3 px-4
                focus:outline-none text-gray-700 leading-5"
         placeholder="jone@example.com">

  <input class="placeholder-opacity-10 placeholder-light-blue-500 border block appearance-none border-light-blue-400 rounded-md w-full py-3 px-4
                focus:outline-none text-gray-700 leading-5"
         placeholder="jone@example.com">
</div>
`),
    new Story('Focus of Placehoder', '设置获得焦点后的占位文本样式')
      .code(`\
<!--
  'focus:placeholder-{styles}': 设置获得焦点后的占位文本样式
-->
<div class="bg-rose-100 px-4 py-6 space-y-5">
  <input class="placeholder-rose-500 border-rose-400 border block appearance-none rounded-md w-full py-3 px-4
                focus:placeholder-rose-200 focus:placeholder-opacity-50 focus:outline-none text-gray-700 leading-5"
         placeholder="jone@example.com">
</div>
`),
    new Story('Responsive', '可以配合{screen}:{focus}:{...}同时使用')
      .code(`\
<div class="bg-cyan-100 px-4 py-6 space-y-5">
  <input class="md:placeholder-blue-500 placeholder-cyan-500 border-cyan-400 border block appearance-none rounded-md w-full py-3 px-4
                md:focus:placeholder-blue-200 md:focus:placeholder-opacity-100 focus:outline-none focus:placeholder-cyan-200 focus:placeholder-opacity-50 text-gray-700 leading-5 "
         placeholder="jone@example.com">
</div>
`),
    new Story('Customize', '配置Tailwind, 添加、修改和删除文本占位样式类', 'javascript')
      .code(`\
// tailwind.config.js
module.exports = {
  theme: {
//  placeholderColor: theme => theme('colors'),    // 禁止根据主题自动生成占位文本颜色样式类
    placeholderColor: {         // 添加占位文本颜色样式类
      'primary': '#3490dc',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
    }
  }
}
`),
    new Story('Variants', '', 'javascript')
      .code(`\
/* tailwind.config.js */
module.exports = {
  variants: {
    extend: {
      placeholderColor: ['hover', 'active']
    }
  }
}
`),
    new Story('Disabling', '', 'javascript')
      .code(`\
/* tailwind.config.js */
module.exports = {
  corePlugins: {
    placeholderColor: false,
  }
}
`)
  ])
    .render();
};
