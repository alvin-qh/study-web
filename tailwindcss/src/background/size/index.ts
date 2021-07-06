import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Background Image Size', true);
  book.append([
    new Story("Auto", "以默认大小显示背景图像")
      .code(`\
<!--
  'bg-auto': 以默认大小显示背景图片
-->
<div class="p-6 bg-yellow-100">
  <div class="bg-auto bg-no-repeat bg-center bg-small flex-1 h-36"></div>
</div>
`),
    new Story("Cover", "缩放图像，使其填满容器")
      .code(`\
<!--
  'bg-cover': 缩放背景图像，使图像的大小充满其所在元素
-->
<div class="p-6 bg-green-100">
  <div class="bg-cover bg-no-repeat bg-center bg-small flex-1 h-36"></div>
</div>
`),
    new Story("Contain", "使背景图像适合容器，不对图像进行拉伸")
      .code(`\
<!--
  'bg-contain': 使背景图像适合容器，不对图像进行拉伸
-->
<div class="p-6 bg-red-100">
  <div class="bg-contain bg-no-repeat bg-center bg-small flex-1 h-36"></div>
</div>
`),
    new Story("Responsive")
      .code(`\
<div class="p-6 bg-blue-100">
  <div class="bg-auto md:bg-contain bg-no-repeat bg-center bg-small flex-1 h-36"></div>
</div>
`),
    new Story("Customize", "通过Tailwind配置设置背景图像尺寸样式类", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  theme: {
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '50%',   // New
      '16': '4rem'    // New
    }
  }
}
`),
    new Story("Customize", "可以通过tailwind配置增加、删除或修改'width'部分的样式类", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      width: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%'
      }
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
      backgroundSize: ['hover', 'focus']
    }
  }
}
`),
    new Story("Disabling", "", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  corePlugins: {
    backgroundSize: false
  }
}`)
  ])
    .render();
}
