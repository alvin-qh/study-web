import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Background Clip', true);
  book.append([
    new Story("Cilp Background", "控制元素背景的边界框")
      .code(`\
<!--
  'bg-clip-{border,padding,content}': 根据边框，边距和内容进行剪裁
-->
<div class="bg-indigo-100 space-y-2 text-white text-lg font-semibold p-6">
  <div class="bg-clip-border flex justify-center p-6 bg-indigo-600 border-4 border-indigo-300 border-dashed">
    .bg-clip-border
  </div>
  <div class="bg-clip-padding flex justify-center p-6 bg-indigo-600 border-4 border-indigo-300 border-dashed">
    .bg-clip-padding
  </div>
  <div class="bg-clip-content flex justify-center p-6 bg-indigo-600 border-4 border-indigo-300 border-dashed">
    <span class="py-2">.bg-clip-content</span>
  </div>
</div>
`),
    new Story("Cilp Text", "剪裁成文本")
      .code(`\
<!--
  'bg-clip-text': 剪裁成文本，即以文本为剪裁形状
-->
<div class="text-center text-5xl font-extrabold overflow-hidden bg-gradient-to-r from-emerald-50 to-teal-100 p-10 tracking-tight">
  <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
    Hello World
  </span>
</div>
`),
    new Story("Responsive")
      .code(`\
<div class="bg-fuchsia-100 text-white text-3xl font-semibold p-6">
  <div class="bg-clip-border md:bg-clip-content flex justify-center bg-fuchsia-500 p-6">
    <span class="p-4">Responsive</span>
  </div>
</div>
`),
    new Story("Variants", "", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  variants: {
    extend: {
      backgroundClip: ['hover', 'focus']
    }
  }
}
`),
    new Story("Disabling", "", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  corePlugins: {
    backgroundClip: false
  }
}`)
  ])
    .render();
}
