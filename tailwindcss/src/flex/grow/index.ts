import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Flex Grow', true);
  book.append([
    new Story("Grow")
      .code(`\
<!-- The 'flex-grow' element will grow to fill the spaces -->
<div class="flex space-x-2 font-semibold text-white text-lg">
  <div class="flex-none w-16 h-16 bg-purple-400 flex items-center justify-center">
    Locked
  </div>
  <div class="flex-grow h-16 bg-purple-400 flex items-center justify-center">
    Growable
  </div>
  <div class="flex-none w-16 h-16 bg-purple-400 flex items-center justify-center">
    Locked
  </div>
</div>
`),
    new Story("Don't Grow")
      .code(`\
<!-- Use 'flex-grow-0' will prevent the element grow up -->
<div class="flex space-x-2 font-semibold text-white text-lg">
  <div class="flex-grow w-16 h-16 bg-purple-400 flex items-center justify-center">
    Locked
  </div>
  <div class="flex-grow-0 h-16 px-4 bg-purple-400 flex items-center justify-center">
    Growable
  </div>
  <div class="flex-grow w-16 h-16 bg-purple-400 flex items-center justify-center">
    Locked
  </div>
</div>
`),
    new Story("Responsive")
      .code(`\
<div class="flex space-x-2 font-semibold text-white text-lg">
  <div class="flex-grow md:flex-grow-0 w-16 h-16 bg-pink-400 flex items-center justify-center">
    1
  </div>
  <div class="flex-grow md:flex-grow-0 w-16 h-16 bg-pink-400 flex items-center justify-center">
    2
  </div>
  <div class="flex-grow md:flex-grow-0 w-16 h-16 bg-pink-400 flex items-center justify-center">
    3
  </div>
</div>
`),
    new Story("Grow Values", "javascript")
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
      flexGrow: ['hover', 'focus'],
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
      flexGrow: false
    }
  }
}`)
  ])
    .render();
};
