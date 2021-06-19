import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Flex Order', true);
  book.append([
    new Story("Order by Number")
      .code(`\
<!-- Use 'order-{n}' to set the order absolutely -->
<div class="flex justify-between font-semibold text-white text-lg">
  <div class="order-2 w-16 h-16 bg-blue-400 flex items-center justify-center">
    1
  </div>
  <div class="order-3 w-16 h-16 bg-blue-400 flex items-center justify-center">
    2
  </div>
  <div class="order-1 w-16 h-16 bg-blue-400 flex items-center justify-center">
    3
  </div>
</div>
`),
    new Story("Order by Position")
      .code(`\
<!-- Use 'order-{first | last | none}' to set order relative -->
<div class="flex justify-between font-semibold text-white text-lg">
  <div class="order-last w-16 h-16 bg-pink-400 flex items-center justify-center">
    1
  </div>
  <div class="order-none w-16 h-16 bg-pink-400 flex items-center justify-center">
    2
  </div>
  <div class="order-first w-16 h-16 bg-pink-400 flex items-center justify-center">
    3
  </div>
</div>
`),
    new Story("Responsive")
      .code(`\
<div class="flex justify-between font-semibold text-white text-lg">
  <div class="order-last md:order-1 w-16 h-16 bg-green-400 flex items-center justify-center">
    1
  </div>
  <div class="order-none md:order-2 w-16 h-16 bg-green-400 flex items-center justify-center">
    2
  </div>
  <div class="order-first md:order-3 w-16 h-16 bg-green-400 flex items-center justify-center">
    3
  </div>
</div>
`),
    new Story("Order Values", "javascript")
      .code(`\
// wailwind.config.js
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
    new Story("Variants", "javascript")
      .code(`\
// wailwind.config.js
module.exports = {
  variants: {
    extend: {
      // ...
      order: ['hover', 'focus'],
    }
  }
}
`),
    new Story("Disabling", "javascript")
      .code(`\
// wailwind.config.js
module.exports = {
  variants: {
    extend: {
      // ...
      order: false
    }
  }
}`)
  ])
    .render();
};
