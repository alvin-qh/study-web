import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Flex Grow', true);
  book.append([
    new Story("Grow", "令一个元素进行放大，以填充任何可用空间")
      .code(`\
<!--
  'flex-grow': 指定一个元素可以通过放大尺寸填充任何可用空间
-->
<div class="flex gap-4 font-semibold text-white text-lg">
  <div class="flex-none w-16 h-16 flex items-center justify-center bg-purple-400 ">
    Locked
  </div>
  <div class="flex-grow h-16 flex items-center justify-center bg-purple-400">
    Growable
  </div>
  <div class="flex-none w-16 h-16 flex items-center justify-center bg-purple-400">
    Locked
  </div>
</div>
`),
    new Story("Don't Grow", "阻止一个元素放大")
      .code(`\
<!--
  'flex-grow-0': 阻止元素放大
-->
<div class="flex gap-4 font-semibold text-white text-lg">
  <div class="flex-grow w-16 h-16 flex items-center justify-center bg-purple-400">
    Locked
  </div>
  <div class="flex-grow-0 h-16 px-4 flex items-center justify-center bg-purple-400">
    Growable
  </div>
  <div class="flex-grow w-16 h-16 flex items-center justify-center bg-purple-400">
    Locked
  </div>
</div>
`),
    new Story("Responsive")
      .code(`\
<div class="flex gap-4 font-semibold text-white text-lg">
  <div class="flex-grow md:flex-grow-0 w-16 h-16 flex items-center justify-center bg-pink-400">
    1
  </div>
  <div class="flex-grow md:flex-grow-0 w-16 h-16 flex items-center justify-center bg-pink-400">
    2
  </div>
  <div class="flex-grow md:flex-grow-0 w-16 h-16 flex items-center justify-center bg-pink-400">
    3
  </div>
</div>
`),
    new Story("Grow Values", "", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  theme: {
    flexGrow: {
      '0': 0,
//    DEFAULT: 1,   // Disable original grow default value
      DEFAULT: 2,   // Add new grow default value
      '1': 1        // Add 'flex-group-1' class
  }
}
`),
    new Story("Variants", "", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  variants: {
    extend: {
      flexGrow: ['hover', 'focus']
    }
  }
}
`),
    new Story("Disabling", "", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  corePlugins: {
    flexGrow: false
  }
}
`)
  ])
    .render();
}
