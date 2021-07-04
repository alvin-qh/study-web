import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Text Transform', true);
  book.append([
    new Story("Uppercase", "将文本设置为大写字母")
      .code(`\
<!--
  'uppercase': 设置文本为大写字母
-->
<div class="bg-green-100 text-lg font-medium px-4 py-6">
  <p class="uppercase text-green-600">
    The quick brown fox jumped over the lazy dog.
  </p>
</div>
`),
    new Story("Lowercase", "将文本设置为小写字母")
      .code(`\
<!--
  'lowercase': 设置文本为小写字母
-->
<div class="bg-purple-100 text-lg font-medium px-4 py-6">
  <p class="lowercase text-purple-600">
    The quick brown fox jumped over the lazy dog.
  </p>
</div>
`),
    new Story("Capitalize", "设置各单词首字母大写")
      .code(`\
<!--
  'capitalize': 设置文本各单词首字母大写
-->
<div class="bg-pink-100 text-lg font-medium px-4 py-6">
  <p class="capitalize text-pink-600">
    The quick brown fox jumped over the lazy dog.
  </p>
</div>
`),
    new Story("Normal Case", "重置文本的大小写样式")
      .code(`\
<!--
  'normal-case': 重置文本的大小写样式
-->
<div class="bg-yellow-100 text-lg font-medium px-4 py-6">
  <p class="uppercase text-yellow-600">
    The <span class="normal-case">quick brown fox</span> jumped over the lazy dog.
  </p>
</div>
`),
    new Story("Responsive", "使用屏幕尺寸前缀进行屏幕自适应设置")
      .code(`\
<div class="bg-blue-100 text-lg font-medium px-4 py-6">
  <p class="capitalize md:uppercase text-blue-600">
    The quick brown fox jumped over the lazy dog.
  </p>
</div>`),
    new Story("Variants", "", "javascript")
      .code(`\
/* tailwind.config.js */      
module.exports = {
  variants: {
    extend: {
      textTransform: ['hover', 'focus']
    }
  }
}
`),
    new Story("Disabling", "", "javascript")
      .code(`\
/* tailwind.config.js */      
module.exports = {
  corePlugins: {
    textTransform: false
  }
}
`)
  ])
    .render();
}
