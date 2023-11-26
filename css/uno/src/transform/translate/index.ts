import image from '../../asset/image.jpg';
import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Translate', true);
  book.append([
    new Story('Translate', '设置元素平移的距离')
      .code(`\
<!--
  'translate-{x,y}-{amount}': 将元素沿x轴或y轴向正方向平移指定的距离
  '-translate-{x,y}-{amount}': 将元素沿x轴或y轴向负方向平移指定的距离
-->
<div class="flex flex-col items-center space-y-10 bg-gradient-to-r from-purple-50 to-purple-200 py-6">
  <div class="flex bg-purple-700 bg-stripes bg-stripes-white w-20 h-20">
    <img class="transform-gpu translate-x-6" src="${image}">
  </div>
  <div class="flex bg-purple-700 bg-stripes bg-stripes-white w-20 h-20">
    <img class="transform-gpu -translate-x-6" src="${image}">
  </div>
  <div class="flex bg-purple-700 bg-stripes bg-stripes-white w-20 h-20">
    <img class="transform-gpu -translate-y-6" src="${image}">
  </div>
  <div class="flex bg-purple-700 bg-stripes bg-stripes-white w-20 h-20">
    <img class="transform-gpu translate-y-6" src="${image}">
  </div>
</div>
`),
    new Story('Responsive')
      .code(`\
<div class="flex flex-col items-center space-y-10 bg-gradient-to-r from-green-50 to-green-200 py-6">
  <div class="flex bg-green-700 bg-stripes bg-stripes-white w-20 h-20">
    <img class="transform-gpu translate-x-2 md:translate-x-6" src="${image}">
  </div>
</div>
`),
    new Story('Customize', '通过Tailwind配置, 设置元素平移距离样式类', 'javascript')
      .code(`\
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      spacing: {        // 设定全局的'spacing'属性
        '72': '18rem',
        '84': '21rem',
        '96': '24rem'
      },
      translate: {      // 设定'translate'平移样式类
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
    new Story('Variants', '', 'javascript')
      .code(`\
// tailwind.config.js
module.exports = {
  variants: {
    extend: {
      translate: ['active', 'group-hover']
    }
  }
}
`),
    new Story('Disabling', '', 'javascript')
      .code(`\
// tailwind.config.js
module.exports = {
  corePlugins: {
    translate: false
  }
}`)
  ])
    .render();
};
