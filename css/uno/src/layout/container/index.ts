import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Container', true);
  book.append([
    new Story('Container', '设置容器在不同屏幕尺寸下的固定宽度, 设置容器是否在父级容器里居中。')
      .code(`\
<!--
  'container': 设置容器的固定尺寸
  'mx-auto': 容器在父容器里居中
-->
<div class='container'>
  <div class='mx-auto'>
    <div class='bg-red-200 h-8'></div>
  </div>
  <div class='mx-auto mt-2 px-10'>
    <div class='bg-blue-200 h-8'></div>
  </div>
</div>
`),
    new Story('Responsive', '使用屏幕尺寸前缀进行屏幕自适应设置')
      .code(`\
<!--
    使用 'sm', 'md', 'lg', 'xl', '2xl' 适配不同尺寸的屏幕
-->
<div class='md:container md:mx-auto'>
  <div class='bg-red-200 h-8'></div>
</div>
`),
    new Story('Center container by default', '设置元素在父容器中默认居中', 'javascript')
      .code(`\
/* uno.config.ts */
import { defineConfig } from 'unocss';

export default defineConfig({
  theme: {
    container: {
      center: true
    }
  }
});
`),
    new Story('Default Padding', '设置容器的默认内边距', 'javascript')
      .code(`\
/* uno.config.js */
import { defineConfig } from 'unocss';

export default defineConfig({
  theme: {
    container: {
      padding: '2rem',
    }
  }
});
`),
    new Story('Override Padding for Difference Screen Size', '为不同的屏幕尺寸设置自适应的容器内边距', 'javascript')
      .code(`\
/* uno.config.js */
import { defineConfig } from 'unocss';

export default defineConfig({
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
});
`),
    new Story('Disable Class', '禁用样式', 'javascript')
      .code(`\
/* uno.config.js */
import { defineConfig } from 'unocss';

export default defineConfig({
  blocklist: ['container']
}
`)
  ])
    .render();
};
