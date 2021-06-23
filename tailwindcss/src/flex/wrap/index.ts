import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Flex Wrap', true);
  book.append([
    new Story("No Wrap", "设置容器内元素不换行")
      .code(`\
<!--
  'flex-nowrap': 阻止子元素，导致非弹性的项目在必要时溢出容器
-->
<div class="flex flex-nowrap gap-4 text-lg text-white">
  <div class="flex h-12 w-80 items-center justify-center bg-red-400">1</div>
  <div class="flex h-12 w-80 items-center justify-center bg-red-400">2</div>
  <div class="flex h-12 w-80 items-center justify-center bg-red-400">3</div>
</div>
`),
    new Story("Wrap", "允许容器内元素换行")
      .code(`\
<!--
  'flex-wrap': 允许容器内元素在宽度超出容器时进行换行
-->
<div class="flex flex-wrap gap-4 text-lg text-white font-semibold">
  <div class="flex h-12 w-80 items-center justify-center bg-blue-400">1</div>
  <div class="flex h-12 w-80 items-center justify-center bg-blue-400">2</div>
  <div class="flex h-12 w-80 items-center justify-center bg-blue-400">3</div>
</div>
`),
    new Story("Reverse Wrap", "容器内元素以相反的方向换行")
      .code(`\
<!-- 
  'flex-wrap-reverse': 子元素在进行换行时朝相反方向进行 
-->
<div class="flex flex-wrap-reverse gap-4 text-lg text-white font-semibold">
  <div class="flex h-12 w-80 items-center justify-center bg-green-400">1</div>
  <div class="flex h-12 w-80 items-center justify-center bg-green-400">2</div>
  <div class="flex h-12 w-80 items-center justify-center bg-green-400">3</div>
</div>
`),
    new Story("Responsive")
      .code(`\
<div class="flex gap-4 text-lg text-white font-semibold
            flex-wrap md:flex-nowrap">
  <div class="flex h-12 w-80 items-center justify-center bg-pink-400">1</div>
  <div class="flex h-12 w-80 items-center justify-center bg-pink-400">2</div>
  <div class="flex h-12 w-80 items-center justify-center bg-pink-400">3</div>
</div>
`),
    new Story("Variants", "", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  variants: {
    extend: {
      // ...
      flexWrap: ['hover', 'focus']
    }
  }
}
`),
    new Story("Disabling", "", "javascript")
      .code(`\
// tailwind.config.js
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
