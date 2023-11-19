import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Flex Direction', true);
  book.append([
    new Story('Horizontal', '沿与文本相同的方向水平放置子元素')
      .code(`\
<!--
  'flex-row': 沿与文本相同的方向水平放置子元素
-->
<div class="flex flex-row space-x-2 text-lg text-white font-semibold">
  <div class="flex w-32 h-12 items-center justify-center bg-red-400">1</div>
  <div class="flex w-32 h-12 items-center justify-center bg-red-400">2</div>
  <div class="flex w-32 h-12 items-center justify-center bg-red-400">3</div>
</div>
`),
    new Story('Reve rse Horizontal', '用与文本相反的方向水平放置子元素')
      .code(`\
<!--
  'flex-row-reverse': 用与文本相反的方向水平放置子元素
-->
<div class="flex flex-row-reverse text-lg text-white font-semibold">
  <div class="flex w-32 h-12 items-center justify-center bg-blue-400 mx-2">1</div>
  <div class="flex w-32 h-12 items-center justify-center bg-blue-400 mx-2">2</div>
  <div class="flex w-32 h-12 items-center justify-center bg-blue-400 mx-2">3</div> 
</div>
`),
    new Story('Vertical', '沿垂直方向放置子元素')
      .code(`\
<!--
  'flex-col': 沿垂直方向放置子元素
-->
<div class="flex flex-col space-y-2 text-lg text-white font-semibold">
  <div class="flex h-12 items-center justify-center bg-green-400">1</div>
  <div class="flex h-12 items-center justify-center bg-green-400">2</div>
  <div class="flex h-12 items-center justify-center bg-green-400">3</div>
</div>
`),
    new Story('Vertical', '沿垂直方向反向放置子元素')
      .code(`\
<!--
  'flex-col-reverse': 沿垂直方向反向放置子元素 
-->
<div class="flex flex-col-reverse text-lg text-white font-semibold">
  <div class="flex h-12 items-center justify-center bg-purple-400 my-2">1</div>
  <div class="flex h-12 items-center justify-center bg-purple-400 my-2">2</div>
  <div class="flex h-12 items-center justify-center bg-purple-400 my-2">3</div>
</div>
`),
    new Story('Responsive')
      .code(`\
<div class="flex flex-col space-y-2 text-lg text-white font-semibold
            md:flex-row md:space-x-2 md:space-y-0">
  <div class="flex md:w-32 h-12 items-center justify-center bg-indigo-400">1</div>
  <div class="flex md:w-32 h-12 items-center justify-center bg-indigo-400">2</div>
  <div class="flex md:w-32 h-12 items-center justify-center bg-indigo-400">3</div>
</div>
`),
    new Story('Variants', '', 'javascript')
      .code(`\
// tailwind.config.js
module.exports = {
  variants: {
    extend: {
      flexDirection: ['hover', 'focus']
    }
  }
}`),
    new Story('Disabling', '', 'javascript')
      .code(`\
// tailwind.config.js
module.exports = {
  corePlugins: {
    flexDirection: false
  }
}`)
  ])
    .render();
};
