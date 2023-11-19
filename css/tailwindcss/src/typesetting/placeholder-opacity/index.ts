import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Placehoder Opacity', true);
  book.append([
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
    new Story('Customize', '通过Tailwind配置添加、删除和修改透明度样式类', 'javascript')
      .code(`\
/* tailwind.config.js */
module.exports = {
  theme: {
    extend: {
      opacity: {      // 设置定义透明度的样式类
        '15': '0.15',
        '35': '0.35',
        '65': '0.65'
      },
      placeholderOpacity: {   // 设置占位文本透明度的样式类
        '10': '0.1',
        '20': '0.2',
        '95': '0.95'
      }
    }
  }
}
`),
    new Story('Variants', '为不同的屏幕尺寸设置自适应的容器内边距', 'javascript')
      .code(`\
/* tailwind.config.js */
module.exports = {
  variants: {
    extend: {
      placeholderOpacity: ['hover', 'active']
    }
  }
}
`),
    new Story('Disabling', '', 'javascript')
      .code(`\
/* tailwind.config.js */
module.exports = {
  corePlugins: {
    placeholderOpacity: false,
  }
}
`)
  ])
    .render();
};
