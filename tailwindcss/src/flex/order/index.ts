import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Flex Order', true);
  book.append([
    new Story("Order by Number", "通过一组数字控制元素排列顺序")
      .code(`\
<!-- 
  'order-{n}': n 可以取值 1~12，数字越小排列越靠前
-->
<div class="flex justify-between font-semibold text-white text-lg">
  <div class="order-2 w-16 h-16 flex items-center justify-center bg-blue-400">
    1
  </div>
  <div class="order-3 w-16 h-16 flex items-center justify-center bg-blue-400">
    2
  </div>
  <div class="order-1 w-16 h-16 flex items-center justify-center bg-blue-400">
    3
  </div>
</div>
`),
    new Story("Order by Position", "通过相对位置标识控制元素排列顺序")
      .code(`\
<!--
  order-{first | last | none}': 表示排列在第一个，最后一个或者不设置顺序
-->
<div class="flex justify-between font-semibold text-white text-lg">
  <div class="order-last w-16 h-16 flex items-center justify-center bg-pink-400">
    1
  </div>
  <div class="order-none w-16 h-16 flex items-center justify-center bg-pink-400">
    2
  </div>
  <div class="order-first w-16 h-16 flex items-center justify-center bg-pink-400">
    3
  </div>
</div>
`),
    new Story("Responsive")
      .code(`\
<div class="flex justify-between font-semibold text-white text-lg">
  <div class="order-last md:order-1 w-16 h-16 flex items-center justify-center bg-green-400">
    1
  </div>
  <div class="order-none md:order-2 w-16 h-16 flex items-center justify-center bg-green-400">
    2
  </div>
  <div class="order-first md:order-3 w-16 h-16 flex items-center justify-center bg-green-400">
    3
  </div>
</div>
`),
    new Story("Order Values", "通过定义'tailwind.config.js'增加或删除控制顺序的样式类", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  theme: {
    order: {
      first: '-9999',
      last: '9999',
//    none: '0',      // Disable 'order-none'
      normal: '0',    // Add new 'order-normal'
      '1': '1',
      '2': '2',
      '3': '3',
      '4': '4',
      '5': '5',
      '6': '6',
//    '7': '7',       // Disable 'order-{7~12}'
//    '8': '8',
//    '9': '9',
//    '10': '10',
//    '11': '11',
//    '12': '12'
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
      order: ['hover', 'focus'],
    }
  }
}
`),
    new Story("Disabling", "", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  corePlugins: {
    order: false
  }
}`)
  ])
    .render();
}
