import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Align Content', true);
  book.append([
    new Story("Start")
      .code(`\
<!-- Use 'content-start' to arrange the rows in the container relative to the starting point of the cross axis -->
<div class="flex flex-wrap content-start h-48 text-white text-lg font-semibold">
  <div class="w-1/3 p-2">
    <div class="flex items-center justify-center bg-rose-400 h-12">1</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="flex items-center justify-center bg-rose-400 h-12">2</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="flex items-center justify-center bg-rose-400 h-12">3</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="flex items-center justify-center bg-rose-400 h-12">4</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="flex items-center justify-center bg-rose-400 h-12">5</div>
  </div>
</div>
`),
    new Story("Center")
      .code(`\
<!-- Use 'content-center' to arrange the rows in the container relative to the center of the cross axis -->
<div class="flex flex-wrap content-center h-48 text-white text-lg font-semibold">
  <div class="w-1/3 p-2">
    <div class="flex items-center justify-center bg-blue-400 h-12">1</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="flex items-center justify-center bg-blue-400 h-12">2</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="flex items-center justify-center bg-blue-400 h-12">3</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="flex items-center justify-center bg-blue-400 h-12">4</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="flex items-center justify-center bg-blue-400 h-12">5</div>
  </div>
</div>
`),
    new Story("End")
      .code(`\
<!-- Use 'content-end' to arrange the rows in the container relative to the end of the cross axis -->
<div class="flex flex-wrap content-end h-48 text-white text-lg font-semibold">
  <div class="w-1/3 p-2">
    <div class="flex items-center justify-center bg-green-400 h-12">1</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="flex items-center justify-center bg-green-400 h-12">2</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="flex items-center justify-center bg-green-400 h-12">3</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="flex items-center justify-center bg-green-400 h-12">4</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="flex items-center justify-center bg-green-400 h-12">5</div>
  </div>
</div>
`),
    new Story("Space Between")
      .code(`\
<!-- Use 'content-between' to allocate rows in the container so that there is equal space between each row -->
<div class="flex flex-wrap content-between h-48 text-white text-lg font-semibold">
  <div class="w-1/3 p-2">
    <div class="flex items-center justify-center bg-yellow-400 h-12">1</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="flex items-center justify-center bg-yellow-400 h-12">2</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="flex items-center justify-center bg-yellow-400 h-12">3</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="flex items-center justify-center bg-yellow-400 h-12">4</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="flex items-center justify-center bg-yellow-400 h-12">5</div>
  </div>
</div>
`),
    new Story("Space Around")
      .code(`\
<!-- Use 'content-around' to distribute the rows in a container so that there is equal space around each row -->
<div class="flex flex-wrap content-between h-48 text-white text-lg font-semibold">
  <div class="w-1/3 p-2">
    <div class="flex items-center justify-center bg-light-blue-400 h-12">1</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="flex items-center justify-center bg-light-blue-400 h-12">2</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="flex items-center justify-center bg-light-blue-400 h-12">3</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="flex items-center justify-center bg-light-blue-400 h-12">4</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="flex items-center justify-center bg-light-blue-400 h-12">5</div>
  </div>
</div>
`),
    new Story("Responsive")
      .code(`\
<div class="flex flex-wrap content-start md:content-around h-48 text-white text-lg font-semibold">
  <div class="w-1/3 p-2">
    <div class="flex items-center justify-center bg-violet-400 h-12">1</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="flex items-center justify-center bg-violet-400 h-12">2</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="flex items-center justify-center bg-violet-400 h-12">3</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="flex items-center justify-center bg-violet-400 h-12">4</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="flex items-center justify-center bg-violet-400df h-12">5</div>
  </div>
</div>
`),
    new Story("Variants", "javascript")
      .code(`\
// wailwind.config.js
module.exports = {
  variants: {
    extend: {
      // ...
      alignContent: ['hover', 'focus'],
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
      alignContent: false
    }
  }
}`)
  ])
    .render();
};
