import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Justify Items', true);
  book.append([
    new Story("Auto")
      .code(`\
<!-- Use 'justify-items-auto' to automatically adjust grid items on its inline axis  -->
<div class="justify-items-auto grid grid-cols-3 gap-4 h-32 text-lg text-white font-semibold">
  <div class="flex items-center justify-center bg-green-400">1</div>
  <div class="flex items-center justify-center bg-green-400">2</div>
  <div class="flex items-center justify-center bg-green-400">3</div>
  <div class="flex items-center justify-center bg-green-400">4</div>
  <div class="flex items-center justify-center bg-green-400">5</div>
  <div class="flex items-center justify-center bg-green-400">6</div>
</div>
`),
    new Story("Start")
      .code(`\
<!-- Use 'justify-items-start' to arrange the grid items along the start point of the inline axis -->
<div class="justify-items-start grid grid-cols-3 gap-4 h-32 text-lg text-white font-semibold">
  <div class="flex w-16 items-center justify-center bg-blue-400">1</div>
  <div class="flex w-16 items-center justify-center bg-blue-400">2</div>
  <div class="flex w-16 items-center justify-center bg-blue-400">3</div>
  <div class="flex w-16 items-center justify-center bg-blue-400">4</div>
  <div class="flex w-16 items-center justify-center bg-blue-400">5</div>
  <div class="flex w-16 items-center justify-center bg-blue-400">6</div>
</div>
`),
    new Story("End")
      .code(`\
<!-- Use 'justify-items-end' to arrange the grid items along the end of the inline axis -->
<div class="justify-items-end grid grid-cols-3 gap-4 h-32 text-lg text-white font-semibold">
  <div class="flex w-16 items-center justify-center bg-purple-400">1</div>
  <div class="flex w-16 items-center justify-center bg-purple-400">2</div>
  <div class="flex w-16 items-center justify-center bg-purple-400">3</div>
  <div class="flex w-16 items-center justify-center bg-purple-400">4</div>
  <div class="flex w-16 items-center justify-center bg-purple-400">5</div>
  <div class="flex w-16 items-center justify-center bg-purple-400">6</div>
</div>
`),
    new Story("Center")
      .code(`\
<!-- Use 'justify-items-center' to align style items along their inline axis -->
<div class="justify-items-center grid grid-cols-3 gap-4 h-32 text-lg text-white font-semibold">
  <div class="flex w-16 items-center justify-center bg-yellow-400">1</div>
  <div class="flex w-16 items-center justify-center bg-yellow-400">2</div>
  <div class="flex w-16 items-center justify-center bg-yellow-400">3</div>
  <div class="flex w-16 items-center justify-center bg-yellow-400">4</div>
  <div class="flex w-16 items-center justify-center bg-yellow-400">5</div>
  <div class="flex w-16 items-center justify-center bg-yellow-400">6</div>
</div>
`),
    new Story("Stretch")
      .code(`\
<!-- Use 'justify-items-stretch' to stretch the item along its inline axis -->
<div class="justify-items-stretch grid grid-cols-3 gap-4 h-32 text-lg text-white font-semibold">
  <div class="flex items-center justify-center bg-pink-400">1</div>
  <div class="flex items-center justify-center bg-pink-400">2</div>
  <div class="flex items-center justify-center bg-pink-400">3</div>
  <div class="flex items-center justify-center bg-pink-400">4</div>
  <div class="flex items-center justify-center bg-pink-400">5</div>
  <div class="flex items-center justify-center bg-pink-400">6</div>
</div>
`),
    new Story("Responsive")
      .code(`\
<div class="justify-items-center md:justify-items-stretch grid grid-cols-3 gap-4 h-32 text-lg text-white font-semibold">
  <div class="w-16 md:w-auto flex items-center justify-center bg-pink-400">1</div>
  <div class="w-16 md:w-auto flex items-center justify-center bg-pink-400">2</div>
  <div class="w-16 md:w-auto flex items-center justify-center bg-pink-400">3</div>
  <div class="w-16 md:w-auto flex items-center justify-center bg-pink-400">4</div>
  <div class="w-16 md:w-auto flex items-center justify-center bg-pink-400">5</div>
  <div class="w-16 md:w-auto flex items-center justify-center bg-pink-400">6</div>
</div>
`),
    new Story("Variants", "javascript")
      .code(`\
// wailwind.config.js
module.exports = {
  variants: {
    extend: {
      // ...
      justifyItems: ['hover', 'focus'],
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
      justifyItems: false
    }
  }
}`)
  ])
    .render();
};
