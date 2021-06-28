import { Story, StoryBook } from '../../common';
import image from '../../asset/image.jpg';

window.onload = () => {
  const book = new StoryBook('Letter Spacing', true);
  book.append([
    new Story("Tracking", "设置字符之间的间距")
      .code(`\
<!--
  'tracking-{tighter,tight,normal,wide,wider,widest}': 设置字符之间的间距
-->
<div class="space-y-8 bg-light-blue-100 text-light-blue-500 px-4 py-6">
  <div class="space-y-1">
    <dt class="text-xs">tracking-tighter</dt>
    <dd class="text-xl tracking-tighter">The quick brown fox jumped over the lazy dog.</dd>
  </div>
  <div class="space-y-1">
    <dt class="text-xs">tracking-tight</dt>
    <dd class="text-xl tracking-tight">The quick brown fox jumped over the lazy dog.</dd>
  </div>
  <div class="space-y-1">
    <dt class="text-xs">tracking-normal</dt>
    <dd class="text-xl tracking-normal">The quick brown fox jumped over the lazy dog.</dd>
  </div>
  <div class="space-y-1">
    <dt class="text-xs">tracking-wide</dt>
    <dd class="text-xl tracking-wide">The quick brown fox jumped over the lazy dog.</dd>
  </div>
  <div class="space-y-1">
    <dt class="text-xs">tracking-wider</dt>
    <dd class="text-xl tracking-wider">The quick brown fox jumped over the lazy dog.</dd>
  </div>
  <div class="space-y-1">
    <dt class="text-xs">tracking-widest</dt>
    <dd class="text-xl tracking-widest">The quick brown fox jumped over the lazy dog.</dd>
  </div>
</div>
`),
    new Story("Responsive")
      .code(`\
<p class="tracking-tight md:tracking-wide text-xl bg-lime-100 text-lime-500 px-4 py-6">
  The quick brown fox jumped over the lazy dog.
</p>
`),
    new Story("Customize", "通过Tailwind配置添加、删除或改变字间距样式类", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  theme: {
    letterSpacing: {
      tightest: '-.075em',  // New
      tighter: '-.05em',
//    tight: '-.025em',
      normal: '0',
//    wide: '.025em',
      wider: '.05em',
//    widest: '.1em',
      widest: '.25em'     // Change
  }
}
`),
    new Story("Variants", "", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  variants: {
    extend: {
      letterSpacing: ['hover', 'focus'],
    }
  }
}
`)
    , new Story("Disabling", "", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  corePlugins: {
    letterSpacing: false,
  }
}
`)
  ])
    .render();
}
