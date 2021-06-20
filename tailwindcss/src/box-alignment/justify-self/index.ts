import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Justify Self', true);
  book.append([
    new Story("Auto")
      .code(`\
<!-- Use 'justify-self-auto' to align an item based on the value of the grid's 'justify-items' property -->
<div class="grid grid-cols-3 gap-4 justify-items-stretch auto-rows-fr h-32 text-white text-lg font-semibold">
  <div class="bg-stripes bg-stripes-purple-400"></div>
  <div class="justify-self-auto flex items-center justify-center bg-purple-400">1</div>
  <div class="bg-stripes bg-stripes-purple-400"></div>
  <div class="bg-stripes bg-stripes-purple-400"></div>
  <div class="bg-stripes bg-stripes-purple-400"></div>
  <div class="bg-stripes bg-stripes-purple-400"></div>
</div>
`),
    new Story("Start")
      .code(`\
<!-- Use 'justify-self-start' to align the grid items along the starting point of the inline axis -->
<div class="grid grid-cols-3 gap-4 justify-items-stretch auto-rows-fr h-32 text-white text-lg font-semibold">
  <div class="bg-stripes bg-stripes-green-400"></div>
  <div class="justify-self-start flex items-center justify-center bg-green-400 px-4">1</div>
  <div class="bg-stripes bg-stripes-green-400"></div>
  <div class="bg-stripes bg-stripes-green-400"></div>
  <div class="bg-stripes bg-stripes-green-400"></div>
  <div class="bg-stripes bg-stripes-green-400"></div>
</div>
`),
    new Story("Center")
      .code(`\
<!-- Use 'justify-self-center' to align the grid item along the center of its inline axis -->
<div class="grid grid-cols-3 gap-4 justify-items-stretch auto-rows-fr h-32 text-white text-lg font-semibold">
  <div class="bg-stripes bg-stripes-yellow-400"></div>
  <div class="justify-self-center flex items-center justify-center bg-yellow-400 px-4">1</div>
  <div class="bg-stripes bg-stripes-yellow-400"></div>
  <div class="bg-stripes bg-stripes-yellow-400"></div>
  <div class="bg-stripes bg-stripes-yellow-400"></div>
  <div class="bg-stripes bg-stripes-yellow-400"></div>
</div>
`),
    new Story("End")
      .code(`\
<!-- Use 'justify-self-center' to align the grid item along the center of its inline axis -->
<div class="grid grid-cols-3 gap-4 justify-items-stretch auto-rows-fr h-32 text-white text-lg font-semibold">
  <div class="bg-stripes bg-stripes-pink-400"></div>
  <div class="justify-self-end flex items-center justify-center bg-pink-400 px-4">1</div>
  <div class="bg-stripes bg-stripes-pink-400"></div>
  <div class="bg-stripes bg-stripes-pink-400"></div>
  <div class="bg-stripes bg-stripes-pink-400"></div>
  <div class="bg-stripes bg-stripes-pink-400"></div>
</div>
`),
    new Story("Stretch")
      .code(`\
<!-- Use 'justify-self-stretch' to stretch a grid item to fill the grid area on its inline axis -->
<div class="grid grid-cols-3 gap-4 justify-items-start auto-rows-fr h-32 text-white text-lg font-semibold">
  <div class="bg-stripes px-4 bg-stripes-purple-400"></div>
  <div class="justify-self-stretch flex items-center justify-center bg-purple-400 px-4">1</div>
  <div class="bg-stripes px-4 bg-stripes-purple-400"></div>
  <div class="bg-stripes px-4 bg-stripes-purple-400"></div>
  <div class="bg-stripes px-4 bg-stripes-purple-400"></div>
  <div class="bg-stripes px-4 bg-stripes-purple-400"></div>
</div>
`),
    new Story("Responsive")
      .code(`\
<div class="grid grid-cols-3 gap-4 justify-items-stretch auto-rows-fr h-32 font-semibold text-white text-lg">
  <div class="bg-stripes px-4 bg-stripes-purple-400"></div>
  <div class="justify-self-stretch md:justify-self-start flex items-center justify-center bg-purple-400 px-4">1</div>
  <div class="bg-stripes px-4 bg-stripes-purple-400"></div>
  <div class="bg-stripes px-4 bg-stripes-purple-400"></div>
  <div class="bg-stripes px-4 bg-stripes-purple-400"></div>
  <div class="bg-stripes px-4 bg-stripes-purple-400"></div>
</div>
`),
    new Story("Variants", "javascript")
      .code(`\
// wailwind.config.js
module.exports = {
  variants: {
    extend: {
      // ...
      justifySelf: ['hover', 'focus'],
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
      justifySelf: false
    }
  }
}`)
  ])
    .render();
};
