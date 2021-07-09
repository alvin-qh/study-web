import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Background Image', true);
  book.append([
    new Story("Gradient", "背景颜色线性渐变")
      .code(`\
<!--
  'bg-gradient-to-{t,tr,r,br,b,bl,l,tl}': 自动背景渐变色及渐变方向
  'from-blue-400': 起始色
  'via-yellow-500': 中间色
  'to-red-500': 结束色
-->
<div class="px-4 py-6">
  <div class="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 h-32"></div>
</div>
`),
    new Story("Responsive")
      .code(`\
<div class="px-4 py-6">
  <div class="bg-gradient-to-r md:bg-gradient-to-tr from-blue-400 via-yellow-500 to-red-500 h-32"></div>
</div>
`),
    new Story("Customize", "通过Tailwind配置，设置背景图像样式类", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'footer-texture': "url('/img/footer-texture.png')"
      })
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
      backgroundImage: ['hover', 'focus']
    }
  }
}
`),
    new Story("Disabling", "", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  corePlugins: {
    backgroundImage: false
  }
}`)
  ])
    .render();
}
