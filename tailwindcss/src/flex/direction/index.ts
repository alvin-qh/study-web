import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Flex Direction', true);
  book.append([
    new Story("Horizontal")
      .code(`\
<!-- Use 'flex-row' to place flex elements horizontal -->
<div class="flex flex-row space-x-2 text-lg text-white font-semibold">
  <div class="px-4 py-2 bg-red-400">1</div>
  <div class="px-4 py-2 bg-red-400">2</div>
  <div class="px-4 py-2 bg-red-400">3</div>
</div>
`),
    new Story("Reverse Horizontal")
      .code(`\
<!-- Use 'flex-row-reverse' to place flex elements reversed horizontal -->
<div class="flex flex-row-reverse text-lg text-white font-semibold">
  <div class="px-4 py-2 bg-blue-400 mx-2">1</div>
  <div class="px-4 py-2 bg-blue-400 mx-2">2</div>
  <div class="px-4 py-2 bg-blue-400 mx-2">3</div>
</div>
`),
    new Story("Vertical")
      .code(`\
<!-- Use 'flex-col' to place flex elements vertical -->
<div class="flex flex-col space-y-2 text-lg text-white font-semibold">
  <div class="px-4 py-2 bg-green-400">1</div>
  <div class="px-4 py-2 bg-green-400">2</div>
  <div class="px-4 py-2 bg-green-400">3</div>
</div>
`),
    new Story("Vertical")
      .code(`\
<!-- Use 'flex-col-reverse' to place flex elements reversed vertical -->
<div class="flex flex-col-reverse text-lg text-white font-semibold">
  <div class="px-4 py-2 bg-purple-400 my-2">1</div>
  <div class="px-4 py-2 bg-purple-400 my-2">2</div>
  <div class="px-4 py-2 bg-purple-400 my-2">3</div>
</div>
`),
    new Story("Responsive")
      .code(`\
<div class="flex flex-col space-y-2 text-lg text-white font-semibold
            md:flex-row md:space-x-2 md:space-y-0">
  <div class="px-4 py-2 bg-indigo-400">1</div>
  <div class="px-4 py-2 bg-indigo-400">2</div>
  <div class="px-4 py-2 bg-indigo-400">3</div>
</div>
`),
    new Story("Variants", "javascript")
      .code(`\
// wailwind.config.js
module.exports = {
  variants: {
    extend: {
      // ...
      flexDirection: ['hover', 'focus']
    }
  }
}`),
    new Story("Disabling", "javascript")
      .code(`\
// wailwind.config.js
module.exports = {
  variants: {
    extend: {
      // ...
      flexDirection: false
    }
  }
}`)
  ])
    .render();
};
