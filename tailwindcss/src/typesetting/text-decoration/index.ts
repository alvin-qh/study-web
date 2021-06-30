import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Text Decoration', true);
  book.append([
    new Story("Underline", "设置文本下划线")
      .code(`\
<!--
  'underline': 设置文本下划线
-->
<div class="bg-purple-100 px-4 py-6">
  <p class="underline text-lg font-medium">
    The quick brown fox jumped over the lazy dog.
  </p>
</div>
`),
    new Story("Responsive", "使用屏幕尺寸前缀进行屏幕自适应设置")
      .code(`\
<!--
    使用 'sm', 'md', 'lg', 'xl', '2xl' 适配不同尺寸的屏幕
-->
<div class="md:container md:mx-auto">
  <div class="bg-red-200 h-8"></div>
</div>`),
    new Story("Center container by default", "设置元素在父容器中默认居中", "javascript")
      .code(`\
/* tailwind.config.js */      
module.exports = {
  theme: {
    container: {
      center: true
    }
  }
}
`),
    new Story("Default Padding", "设置容器的默认内边距", "javascript")
      .code(`\
/* tailwind.config.js */      
module.exports = {
  theme: {
    container: {
      padding: '2rem',
    }
  }
}
`),
    new Story("Override Padding for Difference Screen Size", "为不同的屏幕尺寸设置自适应的容器内边距", "javascript")
      .code(`\
/* tailwind.config.js */      
module.exports = {
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      }
    }
  }
}
`),
    new Story("Disable Responsive", "禁用自适应", "javascript")
      .code(`\
/* tailwind.config.js */      
module.exports = {
  variants: {
    container: []
  }
}
`),
    new Story("Disable Container", "禁用样式", "javascript")
      .code(`\
/* tailwind.config.js */      
module.exports = {
  corePlugins: {
    container: false,
  }
}
`)
  ])
    .render();
}
