import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Text Overflow', true);
  book.append([
    new Story('Truncate', '文本溢出容器时截断文本')
      .code(`\
<!--
  'truncate': 截断超出容器的文本, 并用'...'表示多余的文本
-->
<div class="flex justify-center bg-blue-100 px-4 py-6 text-lg font-medium">
  <p class="truncate w-2/3 rounded-md bg-blue-300 text-blue-600 px-4 py-2">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Blanditiisitaquequodpraesentiumexplicaboincidunt?
    Dolores beatae nam at sed dolorum ratione dolorem nisi velit cum.
  </p>
</div>
`),
    new Story('Overflow Ellipsis', '在必要时使用省略号 (`...`) 截断文本')
      .code(`\
<!--
  'overflow-ellipsis': 在必要时使用省略号 '...' 截断文本
-->
<div class="flex justify-center bg-green-100 px-4 py-6 text-lg font-medium">
  <p class="overflow-ellipsis overflow-hidden w-1/2 rounded-md bg-green-300 text-green-600 px-4 py-2">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Blanditiisitaquequodpraesentiumexplicaboincidunt?
    Dolores beatae nam at sed dolorum ratione dolorem nisi velit cum.
  </p>
</div>
`),
    new Story('Overflow Clip', '在必要时截断文本')
      .code(`\
<!--
  'overflow-clip': 在必要时截断文本
-->
<div class="flex justify-center bg-light-blue-100 px-4 py-6 text-lg font-medium">
  <p class="overflow-clip w-1/2 rounded-md bg-light-blue-300 text-light-blue-600 px-4 py-2">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Blanditiisitaquequodpraesentiumexplicaboincidunt?
    Dolores beatae nam at sed dolorum ratione dolorem nisi velit cum.
  </p>
</div>
`),
    new Story('Responsive', '')
      .code(`\
<div class="flex justify-center bg-red-100 px-4 py-6 text-lg font-medium">
  <p class="truncate md:overflow-clip w-1/2 rounded-md bg-red-300 text-red-600 px-4 py-2">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Blanditiisitaquequodpraesentiumexplicaboincidunt?
    Dolores beatae nam at sed dolorum ratione dolorem nisi velit cum.
  </p>
</div>
`),
    new Story('Variants', '', 'javascript')
      .code(`\
/* tailwind.config.js */
module.exports = {
  variants: {
    extend: {
      textOverflow: ['hover', 'focus']
    }
  }
}
`),
    new Story('Disabling', '', 'javascript')
      .code(`\
/* tailwind.config.js */
module.exports = {
  corePlugins: {
    textOverflow: false
  }
}
`)
  ])
    .render();
};
