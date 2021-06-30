import { Story, StoryBook } from '../../common';
import image from '../../asset/image.jpg';

window.onload = () => {
  const book = new StoryBook('Text Opacity', true);
  book.append([
    new Story("Text Opacity", "设置文本的透明度")
      .code(`\
<!--
  'text-opacity-{amount}': 设置文本的透明度，设置透明度的元素必须同时设置'text-color-{amount}'样式类
-->
<div class="space-y-6 text-lg font-medium bg-light-blue-100 px-4 py-6">
  <p class="text-opacity-100 text-purple-700">The quick brown fox jumped over the lazy dog.</p>
  <p class="text-opacity-75 text-purple-700">The quick brown fox jumped over the lazy dog.</p>
  <p class="text-opacity-50 text-purple-700">The quick brown fox jumped over the lazy dog.</p>
  <p class="text-opacity-25 text-purple-700">The quick brown fox jumped over the lazy dog.</p>
  <p class="text-opacity-5 text-purple-700">The quick brown fox jumped over the lazy dog.</p>
</div>

<div class="text-black text-lg font-medium bg-red-100 mt-5 px-4 py-6">
  <!--
    只设置透明度而不设置文本颜色，透明度不生效
  -->
  <div class="text-opacity-50">
    The quick brown fox jumped over the lazy dog.
  </div>
  <!--
    同时设置透明度和文本颜色，透明度才能生效
  -->
  <div class="text-black text-opacity-50">
    The quick brown fox jumped over the lazy dog.
  </div>
</div>
`),
    new Story("Responsive")
      .code(`\
<div class="text-blue-500 text-opacity-90 md:text-opacity-50 bg-blue-100 px-4 py-6 text-lg font-medium">
  <p>The quick brown fox jumped over the lazy dog.</p>
</div>
`),
    new Story("Customize", "通过Tailwind配置设置文本透明度样式类", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      opacity: {      // 定义透明度样式类
        '10': '0.1',
        '20': '0.2',
        '95': '0.95'
      },
      textOpacity: {  // 专为文本透明度定义样式类
        '10': '0.1',
        '20': '0.2',
        '95': '0.95'
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
      textOpacity: ['active']
    }
  }
}
`)
    , new Story("Disabling", "", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  corePlugins: {
    textOpacity: false
  }
}
`)
  ])
    .render();
}
