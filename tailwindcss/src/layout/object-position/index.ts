import { Story, StoryBook } from '../../common';
import image from '../../asset/image.jpg';

window.onload = () => {
  const book = new StoryBook('Object Position', true);
  book.append([
    new Story("Position", "使用 'object-{side}' 来指定元素的在其容器中的位置，如果元素尺寸大于父容器，则只显示部分而不会撑开父容器")
      .code(`\
<!--
  'object-left-top': 元素内容左上角和容器左上角平齐
  'object-top': 元素内容顶部和容器顶部平齐，水平居中
  'object-right-top': 元素内容右上角和容器右上角平齐
  'object-right': 元素内容右边和容器右边平齐，垂直居中
  'object-right-bottom': 元素内容右下角和容器右下角平齐
  'object-bottom': 元素内容底部和容器底部平齐，水平居中
  'object-left-bottom': 元素内容左下角和容器左下角平齐
  'object-left': 元素左边和容器左边平齐，垂直居中
  'object-center': 元素和容器中央对齐
-->
<div class="grid grid-cols-3 gap-4 bg-yellow-300">
  <img class="object-none object-left-top w-48 h-48" 
       src="${image}">
  <img class="object-none object-top w-48 h-48"
       src="${image}">
  <img class="object-none object-right-top w-48 h-48"
       src="${image}">
  <img class="object-none object-left w-48 h-48"
       src="${image}">
  <img class="object-none object-center w-48 h-48"
       src="${image}">
  <img class="object-none object-right w-48 h-48"
       src="${image}">
  <img class="object-none object-left-bottom w-48 h-48"
       src="${image}">
  <img class="object-none object-bottom w-48 h-48"
       src="${image}">
  <img class="object-none object-right-bottom w-48 h-48"
       src="${image}">
</div>
`),
    new Story("Responsive")
      .code(`\
<div class="bg-blue-300">
  <img class="object-none 
              object-center w-48 h-48 
              md:object-fill md:w-auto md:h-auto"
       src="${image}">
</div>
`),
    new Story("Custom", "", "javascript")
      .code(`\
// tailwind.config.js
// Enable or disable some object position in all 9 positions
module.exports = {
  theme: {
    objectPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
//    'left-bottom': 'left bottom',
//    'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
      'center-bottom': 'center bottom'
      'center-top': 'center top',
    }
  }
}
`),
    new Story("Variants", "", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  variants: {
    extend: {
      // ...
      objectPosition: ['hover', 'focus'],
    }
  }
}
`)
    , new Story("Disabling", "", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  corePlugins: {
    // ...
    objectPosition: false,
  }
}
`)
  ])
    .render();
};
