import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Flex Wrap', true);
  book.append([
    new Story("No Wrap")
      .code(`\
<!-- Use 'flex-nowrap' to suppress flex elements line breaks -->
<div class="flex flex-nowrap text-center text-lg text-white font-semibold">
  <div class="py-2 mx-2 w-80 bg-red-400">1</div>
  <div class="py-2 mx-2 w-80 bg-red-400">2</div>
  <div class="py-2 mx-2 w-80 bg-red-400">3</div>
</div>
`),
    new Story("Wrap")
      .code(`\
<!-- Use 'flex-wrap' to enable flex elements line breaks -->
<div class="flex flex-wrap text-center text-lg text-white font-semibold">
  <div class="py-2 w-80 mx-2 my-2 bg-blue-400">1</div>
  <div class="py-2 w-80 mx-2 my-2 bg-blue-400">2</div>
  <div class="py-2 w-80 mx-2 my-2 bg-blue-400">3</div>
</div>
`),
    new Story("Reverse Wrap")
      .code(`\
<!-- 
  Use 'flex-wrap-reverse' to enable flex elements line breaks 
  and order reverse 
-->
<div class="flex flex-wrap-reverse text-center text-lg text-white font-semibold">
  <div class="py-2 w-80 mx-2 my-2 bg-green-400">1</div>
  <div class="py-2 w-80 mx-2 my-2 bg-green-400">2</div>
  <div class="py-2 w-80 mx-2 my-2 bg-green-400">3</div>
</div>
`),
    new Story("Responsive")
      .code(`\
<div class="flex text-center text-lg text-white font-semibold
            flex-wrap
            md:flex-nowrap">
  <div class="py-2 w-80 mx-2 my-2 bg-pink-400">1</div>
  <div class="py-2 w-80 mx-2 my-2 bg-pink-400">2</div>
  <div class="py-2 w-80 mx-2 my-2 bg-pink-400">3</div>
</div>
`),
    new Story("Variants", "javascript")
      .code(`\
// wailwind.config.js
module.exports = {
  variants: {
    extend: {
      // ...
      flexWrap: ['hover', 'focus']
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
      flexWrap: false
    }
  }
}`)
  ])
    .render();
};
