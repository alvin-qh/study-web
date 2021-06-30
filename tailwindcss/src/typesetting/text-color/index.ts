import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Text Color', true);
  book.append([
    new Story("Text Color", "设置文本颜色")
      .code(`\
<!--
  'text-{color}-{amount}': 设置字体的颜色和色深
-->
<div class="px-4 py-6 bg-purple-100">
  <p class="text-lg font-medium text-purple-600">
    The quick brown fox jumped over the lazy dog.
  </p>
</div>
`),
    new Story("Responsive", "使用屏幕尺寸前缀进行屏幕自适应设置")
      .code(`\
<div class="px-4 py-6 bg-blue-100">
  <p class="text-lg font-medium text-blue-600 md:text-green-600">
    The quick brown fox jumped over the lazy dog.
  </p>
</div>
`),
    new Story("Hover", "设置鼠标悬停时的文字颜色")
      .code(`\
<!--
  悬停功能类也可以通过在'hover:'前缀前添加响应的'{screen}:'前缀来与响应的样式类组合使用
-->
<div class="flex px-4 py-6 bg-red-100">
  <button class="font-medium text-white hover:text-red-500 bg-red-500 focus:outline-none shadow-lg rounded-lg py-2 px-3">
    Hover me
  </button>
</div>
`),
    new Story("Focus", "设置焦点上的文本颜色")
      .code(`\
<!--
  悬停功能类也可以通过在'focus:'前缀前添加响应的'{screen}:'前缀来与响应的样式类组合使用
-->
<div class="px-4 py-6 bg-green-100">
  <input class="font-medium text-gray-400 focus:text-gray-800 focus:outline-none w-2/3 shadow-lg rounded-lg py-2 px-3">
</div>
`),
    new Story("Customize", "通过Tailwind配置定义文本颜色样式类", "javascript")
      .code(`\
/* tailwind.config.js */      
module.exports = {
  theme: {
//  textColor: theme => theme('colors'),   // 取消系统定义的文本颜色样式类
    textColor: {    // 添加自定义文本颜色样式类
      'primary': '#3490dc',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
    }
  }
}
`),
    new Story("Variants", "", "javascript")
      .code(`\
/* tailwind.config.js */      
module.exports = {
  variants: {
    extend: {
      textColor: ['active']
    }
  }
}
`),
    new Story("Disabling", "", "javascript")
      .code(`\
/* tailwind.config.js */      
module.exports = {
  corePlugins: {
    textColor: false,
  }
}
`)
  ])
    .render();
}
