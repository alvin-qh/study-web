import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Background Image Repeat', true);
  book.append([
    new Story('Background Image Repeat', '设置背景图在元素内的重复情况')
      .code(`\
<!--
  'bg-{,no}-repeat-{,x,y,round,space}': 设置背景图像重复的方式
-->
<div class="space-y-1">
  <div class="bg-fuchsia-200 p-6 font-medium text-fuchsia-700">
    <p>.bg-repeat</p>
    <div class="bg-repeat bg-center flex-1 w-full bg-cat h-64 bg-6"></div>
  </div>
  <div class="bg-rose-200 p-6 font-medium text-rose-700">
    <p>.bg-no-repeat</p>
    <div class="bg-no-repeat bg-center flex-1 w-full bg-cat h-64 bg-6"></div>
  </div>
  <div class="bg-purple-200 p-6 font-medium text-purple-700">
    <p>.bg-repeat-x</p>
    <div class="bg-repeat-x bg-center flex-1 w-full bg-cat h-64 bg-6"></div>
  </div>
  <div class="bg-blue-200 p-6 font-medium text-blue-700">
    <p>.bg-repeat-y</p>
    <div class="bg-repeat-y bg-center flex-1 w-full bg-cat h-64 bg-6"></div>
  </div>
</div>
`),
    new Story('Responsive')
      .code(`\
<div class="p-6 bg-yellow-200">
  <div class="bg-repeat md:bg-repeat-x flex-1 h-48 bg-center bg-cat bg-6"></div>
</div>
`),
    new Story('Variants', '', 'javascript')
      .code(`\
// tailwind.config.js
module.exports = {
  variants: {
    extend: {
      backgroundRepeat: ['hover', 'focus']
    }
  }
}
`),
    new Story('Disabling', '', 'javascript')
      .code(`\
// tailwind.config.js
module.exports = {
  corePlugins: {
    backgroundRepeat: false
  }
}`)
  ])
    .render();
};
