import image from '../../asset/image.jpg';
import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Use Tailwind CSS Class', true);
  book.append([
    new Story('Auto Columns', '使用 `auto-cols-{size}` 来设置网格列的大小')
      .code(`\
<div class="p-6 bg-gradient-to-r from-light-blue-50 to-light-blue-100">
  <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
    <div class="flex-shrink-0">
      <img class="h-12 w-12" src="${image}" alt="ChitChat Logo">
    </div>
    <div>
      <div class="text-xl font-medium text-black">ChitChat</div>
      <p class="text-gray-500">You have a new message!</p>
    </div>
  </div>
</div>
<!--
  使用 Tailwind 的 'flexbox' 和 'padding' 功能类 ('flex', 'flex-shrink-0', 和 'p-6') 来控制整体的卡片布局
  使用 'max-width' 和 'margin' 功能类 ('max-w-sm' 和 'mx-auto') 来设置卡片的宽度和水平居中
  使用 'background-color', 'border-radius', 和 'box-shadow' 功能类 ('bg-white', 'rounded-xl', 和 'shadow-md') 设置卡片的外观样式
  使用 'width' 和 'height' 功能类 ('w-12' and 'h-12') 来设置图片的大小
  使用 'space-between' 功能类 ('space-x-4') 来处理图片和文本之间的间距
  使用 'font-size', 'text-color', 和 'font-weight' 功能类 ('text-xl', 'text-black', 'font-medium' 等等) 给卡片文字设置样式
-->
`),
    new Story('Tailwind 的优点', '', 'markdown')
      .code(`\
- **无需给类命名而浪费精力**。无需要仅仅为了设置一些样式而额外添加一些像 \`sidebar-inner-wrapper\` 这样愚蠢的类名, 不必再为了一个 flex 容器的完美抽象命名而倍受折磨
- **CSS 停止增长**。使用传统方法, 每次添加新功能时 CSS 文件都会变大。使用功能类, 所有内容都是可重用的, 因此您几乎不需要编写新的 CSS
- **更改会更安全。**CSS 是全局性的, 当修改 CSS 会破坏掉未知代码。而对 HTML 的修改则不必担心样式污染的问题。
`),
    new Story('构建响应式布局', '', 'html')
      .code(`\
<div class="p-6 bg-gradient-to-r from-purple-50 to-purple-100">
  <div class="py-8 px-8 max-w-sm mx-auto
              bg-white rounded-xl shadow-md space-y-2
              sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
    <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0" src="${image}" alt="Cat">
    <div class="text-center space-y-2 sm:text-left">
      <div class="space-y-0.5">
        <p class="text-lg text-black font-semibold">
          Erin Lindford
        </p>
        <p class="text-gray-500 font-medium">
          Product Engineer
        </p>
      </div>
      <button class="px-4 py-1 text-sm
                     text-purple-600 font-semibold rounded-full
                     border border-purple-200
                     hover:text-white hover:bg-purple-600 hover:border-transparent
                     focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
        Message
      </button>
    </div>
  </div>
</div>
`),
    new Story('提取组件', '', 'html')
      .code(`\
<div class="p-6 text-center bg-gradient-to-r from-green-50 to-green-100">
  <!-- Using utilities -->
  <button class="py-2 px-4 font-semibold rounded-lg
                 shadow-md text-white
                 bg-green-500 hover:bg-green-700">
    Click me
  </button>

  <!-- Extracting classes using @apply -->
  <button class="btn btn-green">
    Button
  </button>
</div>

<style type="text/css">
  .btn {
    @apply py-2 px-4 font-semibold rounded-lg shadow-md;
  }
  .btn-green {
    @apply text-white bg-green-500 hover:bg-green-700;
  }
</style>
`),
    new Story('禁用样式类', '可以禁用 Tailwind 中某个预定义类, 例如 `.container` 类', 'javascript')
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
};
