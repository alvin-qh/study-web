import { Story, StoryBook } from '../../common';
import image from '../../asset/image.jpg';

window.onload = () => {
  const book = new StoryBook('Object Fit', true);
  book.append([
    new Story("Object Contain", "调整元素内容的大小，使其保持在父容器内")
      .code(`\
<!--
  'object-contain': 使元素保持在父容器内，元素尺寸受父容器尺寸约束
-->
<div class="bg-green-400">
  <img class="object-contain h-48 w-full" 
       src="${image}">
</div>
`),
    new Story("Cover", "调整元素内容的大小以覆盖其所在的父容器")
      .code(`\
<!--
  'object-cover': 调整元素的高度和宽度以覆盖父容器，但不对元素进行拉伸
-->
<div class="bg-indigo-400">
  <img class="object-cover h-48 w-full" 
       src="${image}">
</div>
`),
    new Story("Fill", "拉伸元素的内容以适应其容器")
      .code(`\
<!--
  'object-fill': 调整元素的尺寸以占满父容器，同时对元素进行拉伸或压缩
-->
<div class="bg-blue-400">
  <img class="object-fill h-48 w-full" 
       src="${image}">
</div>
`),
    new Story("None", "以原始大小显示元素，忽略容器大小")
      .code(`\
<!--
  'object-none': 按元素的原始尺寸显示元素，无论父容器的尺寸
-->
<div class="bg-red-400">
  <img class="object-none h-48 w-full" 
       src="${image}">
</div>
`),
    new Story("Scale Down", "以原始大小显示元素，但若元素尺寸超出父容器，则缩小元素以适应父容器尺寸")
      .code(`\
<!--
  'object-scale-down': 尽量以原始尺寸显示元素，必要时缩小元素以适应父容器尺寸
-->
<div class="bg-green-400">
  <img class="object-scale-down h-48 w-full" 
       src="${image}">
</div>
`),
    new Story("Responsive")
      .code(`\
<div class="bg-yellow-400">
  <img class="object-scale-down md:object-cover h-48 w-full" 
       src="${image}">
</div>
`),
    new Story("Variants", "", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  variants: {
    extend: {
      // ...
      objectFit: ['hover', 'focus'],
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
    objectFit: false,
  }
}
`)
  ])
    .render();
};
