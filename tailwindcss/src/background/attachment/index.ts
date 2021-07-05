import { Story, StoryBook } from '../../common';
import image from '../../asset/image.jpg';

window.onload = () => {
  const book = new StoryBook('Background Attachment', true);
  book.append([
    new Story("Fixed", "固定背景图像")
      .code(`\
<!--
  'bg-fixed': 设置背景图像相对于视口固定
-->
<div class="flex bg-light-blue-200 justify-center px-4 py-6 overflow-hidden">
  <div class="bg-fixed bg-cover bg-center w-full h-64" style="background-image:url(${image})"></div>
</div>
`),
    new Story("Local", "使背景图片可以跟随视口滚动")
      .code(`\
<!--
  'bg-local': 设置背景图片跟随视口滚动
-->
<div class="flex bg-green-200 justify-center px-4 py-6">
  <div class="bg-local bg-cover bg-center overflow-y-scroll w-full h-64" style="background-image:url(${image})">
    <div class="h-96"></div>
  </div>
</div>
`),
    new Story("Scroll", "滚动背景图片与视口，而不是容器")
      .code(`\
<!--
  'bg-scroll': 滚动背景图片与视口，而不是容器
-->
<div class="flex bg-purple-200 justify-center px-4 py-6">
  <div class="bg-scroll bg-cover bg-center overflow-y-scroll w-full h-64" style="background-image:url(${image})">
    <div class="h-96 text-3xl font-medium p-4 text-purple-700">
      Hello<br>Hello<br>Hello<br>Hello<br>Hello<br>Hello<br>Hello<br>Hello<br>Hello<br>Hello<br>Hello
    </div>
  </div>
</div>
`),
    new Story("Responsive")
      .code(`\
<div class="flex bg-orange-200 justify-center px-4 py-6">
  <div class="bg-scroll md:bg-fixed bg-cover bg-center overflow-y-scroll md:overflow-y-hidden w-full h-64" style="background-image:url(${image})">
    <div class="h-96 text-3xl font-medium p-4 text-orange-700">
      Hello<br>Hello<br>Hello<br>Hello<br>Hello<br>Hello<br>Hello<br>Hello<br>Hello<br>Hello<br>Hello
    </div>
  </div>
</div>
`),
    new Story("Variants", "", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  variants: {
    extend: {
      backgroundAttachment: ['hover', 'focus']
    }
  }
}
`),
    new Story("Disabling", "", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  corePlugins: {
    backgroundAttachment: false
  }
}`)
  ])
    .render();
}
