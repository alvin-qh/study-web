import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Flex Scale', true);
  book.append([
    new Story("Initial")
      .code(`\
<!-- The 'flex-initial' element won't grow size, but will shrink if needed -->
<div class="flex space-x-2 text-lg font-semibold text-white">
  <div class="flex-initial flex items-center bg-indigo-500 px-4">Short</div>
  <div class="flex-initial flex items-center bg-indigo-500 px-4">Medium length</div>
  <div class="flex-initial flex items-center bg-indigo-500 px-4">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Qui ad labore ipsam, aut rem quo repellat esse tempore id, quidem
  </div>
</div>
`),
    new Story("Flex 1")
      .code(`\
<!-- Use 'flex-1' will grow and shrink as needed without taking initial size into account -->
<div class="flex space-x-2 text-lg text-white font-semibold">
  <div class="flex-1 flex items-center bg-pink-400 px-4">Short</div>
  <div class="flex-1 flex items-center bg-pink-400 px-4">Medium length</div>
  <div class="flex-1 flex items-center bg-pink-400 px-4">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Qui ad labore ipsam, aut rem quo repellat esse tempore id, quidem
  </div>
</div>
`),
    new Story("Auto")
      .code(`\
<!-- Use 'flex-auto' will grow and shrink as needed taking initial size into account -->
<div class="flex space-x-2 text-lg text-white font-semibold">
  <div class="flex-auto flex items-center bg-blue-400 px-4">Short</div>
  <div class="flex-auto flex items-center bg-blue-400 px-4">Medium length</div>
  <div class="flex-auto flex items-center bg-blue-400 px-4">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Qui ad labore ipsam, aut rem quo repellat esse tempore id, quidem
  </div>
</div>
`),
    new Story("None")
      .code(`\
<!-- use 'flex-none' will grow and shrink as needed taking initial size into account -->
<div class="flex space-x-2 text-lg text-white font-semibold">
  <div class="flex-1 flex items-center bg-green-400 px-4">
    Item that can grow or shrink if needed
  </div>
  <div class="flex-none flex items-center bg-green-600 px-4">
    Item that cannot grow or shrink
  </div>
  <div class="flex-1 flex items-center bg-green-400 px-4">
    Item that can grow or shrink if needed
  </div>
</div>
`),
    new Story("Responsive")
      .code(`\
<div class="flex space-x-2 text-lg text-white font-semibold">
  <div class="flex-1 md:flex-initial flex items-center bg-red-400 px-4">1</div>
  <div class="flex-1 md:flex-initial flex items-center bg-red-400 px-4">2</div>
  <div class="flex-1 md:flex-initial flex items-center bg-red-400 px-4">3</div>
</div>
`),
    new Story("Flex Values", "javascript")
      .code(`\
// wailwind.config.js
module.exports = {
  theme: {
    flex: {
      '1': '1 1 0%',
      auto: '1 1 auto',
//    initial: '0 1 auto',   // Disable original 'flex-initial' define
      inherit: 'inherit',    // Add new 'flex-initial' class
      none: 'none',
      '2': '2 2 0%',         // add new 'flex-2' class
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
      flex: ['hover', 'focus'],
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
      flex: false
    }
  }
}`)
  ])
    .render();
};
