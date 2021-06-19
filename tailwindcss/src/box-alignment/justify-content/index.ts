import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Jusitify Content', true);
  book.append([
    new Story("Start")
      .code(`\
<!-- 
  Use 'flex-start' to make elements align with 
  the starting point of the spindle of container
-->
<div class="flex justify-start space-x-2 text-lg text-white font-semibold">
  <div class="w-16 h-16 bg-pink-400 flex items-center justify-center">1</div>
  <div class="w-16 h-16 bg-pink-400 flex items-center justify-center">2</div>
  <div class="w-16 h-16 bg-pink-400 flex items-center justify-center">3</div>
</div>
`),
    new Story("Center")
      .code(`\
<!-- 
  Use 'flex-center' to make elements align with 
  the center point of the spindle of container
-->
<div class="flex justify-center space-x-2 text-lg text-white font-semibold">
  <div class="w-16 h-16 bg-blue-400 flex items-center justify-center">1</div>
  <div class="w-16 h-16 bg-blue-400 flex items-center justify-center">2</div>
  <div class="w-16 h-16 bg-blue-400 flex items-center justify-center">3</div>
</div>
`),
    new Story("End")
      .code(`\
<!-- 
  Use 'flex-end' to make elements align with 
  the end point of the spindle of container
-->
<div class="flex justify-end space-x-2 text-lg text-white font-semibold">
  <div class="w-16 h-16 bg-purple-400 flex items-center justify-center">1</div>
  <div class="w-16 h-16 bg-purple-400 flex items-center justify-center">2</div>
  <div class="w-16 h-16 bg-purple-400 flex items-center justify-center">3</div>
</div>
`),
    new Story("Space Between")
      .code(`\
<!--
  Use 'justify-betweenr' to arrange the items 
  along the main axis of the container and make 
  the distance between each item equal
-->
<div class="flex justify-between space-x-2 text-lg text-white font-semibold">
  <div class="w-16 h-16 bg-green-400 flex items-center justify-center">1</div>
  <div class="w-16 h-16 bg-green-400 flex items-center justify-center">2</div>
  <div class="w-16 h-16 bg-green-400 flex items-center justify-center">3</div>
</div>
`),
    new Story("Space Around")
      .code(`\
<!--
  Use 'justify-around' to arrange the items along 
  the main axis of the container and make the 
  distances on both sides of each item equal
-->
<div class="flex justify-around space-x-2 text-lg text-white font-semibold">
  <div class="w-16 h-16 bg-indigo-400 flex items-center justify-center">1</div>
  <div class="w-16 h-16 bg-indigo-400 flex items-center justify-center">2</div>
  <div class="w-16 h-16 bg-indigo-400 flex items-center justify-center">3</div>
</div>
`),
    new Story("Space Evenly")
      .code(`\
<!--
  Use 'justify-evenly' to arrange the items along 
  the main axis of the container, and make the distance 
  around each item equal, but unlike 'justify-around', 
  there is a double distance between the items. 
-->
<div class="flex justify-evenly space-x-2 text-lg text-white font-semibold">
  <div class="w-16 h-16 bg-yellow-400 flex items-center justify-center">1</div>
  <div class="w-16 h-16 bg-yellow-400 flex items-center justify-center">2</div>
  <div class="w-16 h-16 bg-yellow-400 flex items-center justify-center">3</div>
</div>
`),
    new Story("Responsive")
      .code(`\
<!--
  Use 'justify-evenly' to arrange the items along 
  the main axis of the container, and make the distance 
  around each item equal, but unlike 'justify-around', 
  there is a double distance between the items. 
-->
<div class="flex md:justify-around justify-center space-x-2 text-lg text-white font-semibold">
  <div class="w-16 h-16 bg-blue-400 flex items-center justify-center">1</div>
  <div class="w-16 h-16 bg-blue-400 flex items-center justify-center">2</div>
  <div class="w-16 h-16 bg-blue-400 flex items-center justify-center">3</div>
</div>
`),
    new Story("Variants", "javascript")
      .code(`\
// wailwind.config.js
module.exports = {
  variants: {
    extend: {
      // ...
      justifyContent: ['hover', 'focus']
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
      justifyContent: false
    }
  }
}`)
  ])
    .render();
};
