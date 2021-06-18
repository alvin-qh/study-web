import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Display', true);
  book.append([
    new Story("Block")
      .code(`\
<!-- Create a 'block' element -->
<div class="space-y-4 text-center">
  <span class="block bg-blue-200 py-2">1</span>
  <span class="block bg-blue-200 py-2">2</span>
  <span class="block bg-blue-200 py-2">3</span>
</div>
`),
    new Story("Flow-Root")
      .code(`\
<!-- Create a block element with 'block formatting context' -->
<div class="space-y-4">
  <div class="flow-root text-center">
    <div class="my-2 bg-red-200 py-2">1</div>
  </div>
  <div class="flow-root text-center">
    <div class="my-2 bg-red-200 py-2">2</div>
  </div>
</div>
`),
    new Story("Inline Block")
      .code(`\
<!-- Create a 'inline block' element -->
<div class="space-x-4">
  <div class="inline-block px-4 py-2 bg-green-200">1</div>
  <div class="inline-block px-4 py-2 bg-green-200">2</div>
  <div class="inline-block px-4 py-2 bg-green-200">3</div>
</div>
`),
    new Story("Inline")
      .code(`\
<!-- Create a 'inline' element -->
<div class="space-x-4">
  <div class="inline text-center px-4 py-2 bg-yellow-200">1</div>
  <div class="inline text-center px-4 py-2 bg-yellow-200"">2</div>
  <div class="inline text-center px-4 py-2 bg-yellow-200"">3</div>
</div>
`),
    new Story("Flex")
      .code(`\
<!-- Create a 'flex' element --> 
<div class="flex space-x-4">
  <div class="flex-1 py-4 text-center bg-purple-200">1</div>
  <div class="flex-1 py-4 text-center bg-purple-200">2</div>
  <div class="flex-1 py-4 text-center bg-purple-200">3</div>
</div>
`),
    new Story("Inline Flex")
      .code(`\
<!-- Create a 'inline flex' element --> 
<div class="inline-flex space-x-4">
  <div class="flex-1 px-6 py-4 text-center bg-purple-200">1</div>
  <div class="flex-1 px-6 py-4 text-center bg-purple-200">2</div>
  <div class="flex-1 px-6 py-4 text-center bg-purple-200">3</div>
</div>
`),
    new Story("Grid")
      .code(`\
<!-- Create a 'grid' element, with cols count and block gap --> 
<div class="grid gap-4 grid-cols-3 text-center">
  <div class="bg-green-200 py-4">1</div>
  <div class="bg-green-200 py-4">2</div>
  <div class="bg-green-200 py-4">3</div>
  <div class="bg-green-200 py-4">4</div>
  <div class="bg-green-200 py-4">5</div>
  <div class="bg-green-200 py-4">6</div>
  <div class="bg-green-200 py-4">7</div>
  <div class="bg-green-200 py-4">8</div>
  <div class="bg-green-200 py-4">9</div>
</div>
`),
    new Story("Inline Grid")
      .code(`\
<!-- 
  Create a 'inline grid' element, 
  the second span element will be placed on the nextline 
  if the container width is insufficientd
--> 
<span class="inline-grid grid-cols-4 gap-x-4 my-4">
  <span class="bg-blue-200 py-4 px-8">1</span>
  <span class="bg-blue-200 py-4 px-8">1</span>
  <span class="bg-blue-200 py-4 px-8">1</span>
  <span class="bg-blue-200 py-4 px-8">1</span>
</span>
<span class="inline-grid grid-cols-4 gap-x-4">
  <span class="bg-blue-200 py-4 px-8">2</span>
  <span class="bg-blue-200 py-4 px-8">2</span>
  <span class="bg-blue-200 py-4 px-8">2</span>
  <span class="bg-blue-200 py-4 px-8">2</span>
</span>
`),
    new Story("Contents")
      .code(`\
<!--
  Use 'content' to create a 'phantom' container, 
  whose children are like direct children of the parent
-->
<div class="flex text-center">
  <div class="flex-1 bg-purple-200 mx-4 py-4">1</div>
  <div class="contents">
    <div class="flex-1 bg-purple-200 mx-4 py-4">2</div>
    <div class="flex-1 bg-purple-200 mx-4 py-4">3</div>
  </div>
  <div class="flex-1 bg-purple-200 mx-4 py-4">4</div>
</div>
`),
    new Story("Table")
      .code(`\
<!--
  Use 'table', 'table-row', 'table-cell', 'table-caption', 
  'table-column', 'table-column-group', 'table-header-group', 
  'table-row-group' and 'table-footer-group' to create elements
  like 'table'
-->
<div class="table w-full">
  <div class="table-row-group">
    <div class="table-row">
      <div class="table-cell bg-yellow-200 py-4 px-2">A cell with more content</div>
      <div class="table-cell bg-yellow-400 py-4 px-2">Cell 2</div>
      <div class="table-cell bg-yellow-200 py-4 px-2">Cell 3</div>
    </div>
    <div class="table-row">
      <div class="table-cell bg-yellow-400 py-4 px-2">Cell 4</div>
      <div class="table-cell bg-yellow-200 py-4 px-2">A cell with more content</div>
      <div class="table-cell bg-yellow-400 py-4 px-2">Cell 6</div>
    </div>
  </div>
</div>
`),
    new Story("Hidden")
      .code(`\
<!-- 
  Use 'hidden' to set element with 'display:none' style, 
  and remove it from document
-->
<div class="flex text-center">
  <div class="hidden flex-1 bg-red-200 mx-2 py-4">1</div>
  <div class="flex-1 bg-red-200 mx-2 py-4">2</div>
  <div class="flex-1 bg-red-200 mx-2 py-4">3</div>
</div>
`),
    new Story("Responsive")
      .code(`\
<div class="md:space-x-4 space-y-4">
  <div class="bg-blue-200 py-4 px-6 md:inline-block block">1</div>
  <div class="bg-blue-200 py-4 px-6 md:inline-block block">2</div>
  <div class="bg-blue-200 py-4 px-6 md:inline-block block">3</div>
</div>
`),
    new Story("Variants", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  variants: {
    extend: {
      // ...
      display: ['hover', 'focus']
    }
  }
}
`),
new Story("Disabling", "javascript")
.code(`\
// tailwind.config.js
module.exports = {
  corePlugins: {
    // ...
    display: false,
  }
}
`)
  ])
    .render();
};
