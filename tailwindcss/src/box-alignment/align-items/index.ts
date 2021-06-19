import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Flex Shrink', true);
  book.append([
    new Story("Shrink")
      .code(`\
<!-- Use 'flex-shrink' to allow a flex item to shrink if needed -->
<div class="flex space-x-2 font-semibold text-white text-lg">
  <div class="flex-grow w-16 h-16 bg-purple-400 flex items-center justify-center px-2">
    Locked
  </div>
  <div class="flex-shrink w-64 h-16 bg-purple-400 flex items-center justify-center">
    Shrinkable
  </div>
  <div class="flex-grow w-16 h-16 bg-purple-400 flex items-center justify-center px-2">
    Locked
  </div>
</div>
`),
    new Story("Don't Shrink")
      .code(`\
<!-- Use 'flex-shrink-0' will privent the element to shrink -->
<div class="flex space-x-2 font-semibold text-white text-lg">
  <div class="flex-1 h-16 bg-blue-400 flex items-center justify-center px-2">
    Shrinkable
  </div>
  <div class="flex-shrink-0 w-32 h-16 bg-blue-400 flex items-center justify-center">
    Locked
  </div>
  <div class="flex-1 h-16 bg-blue-400 flex items-center justify-center px-2">
    Shrinkable
  </div>
</div>
`),
    new Story("Responsive")
      .code(`\
<div class="flex space-x-2 font-semibold text-white text-lg">
  <div class="flex-shrink md:flex-shrink-0 w-48 h-16 bg-pink-400 flex items-center justify-center">
    1
  </div>
  <div class="flex-shrink md:flex-shrink-0 w-48 h-16 bg-pink-400 flex items-center justify-center">
    2
  </div>
  <div class="flex-shrink md:flex-shrink-0 w-48 h-16 bg-pink-400 flex items-center justify-center">
    3
  </div>
</div>
`),
    new Story("Shrink Values", "javascript")
      .code(`\
// wailwind.config.js
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
    new Story("Variants", "javascript")
      .code(`\
// wailwind.config.js
module.exports = {
  variants: {
    extend: {
      // ...
      flexShrink: ['hover', 'focus'],
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
      flexShrink: false
    }
  }
}`)
  ])
    .render();
};
