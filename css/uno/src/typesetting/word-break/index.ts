import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Word Break', true);
  book.append([
    new Story('Normal', '设置默认的文本换行, 只在换行和空格处换行')
      .code(`\
<!--
  'break-normal': 设置默认的文本换行, 只在换行和空格处换行
-->
<div class="flex justify-center bg-light-blue-100 px-4 py-6">
  <div class="break-normal w-1/3 rounded-md bg-light-blue-200 text-light-blue-600 p-4 text-lg font-medium">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiisitaquequodpraesentiumexplicaboincidunt? Dolores beatae nam at sed dolorum ratione dolorem nisi velit cum.
  </div>
</div>
`),
    new Story('Break Words', '必要时, 在一个单词内进行换行')
      .code(`\
<!--
  'break-words': 必要时, 在一个单词内进行换行
-->
<div class="flex justify-center bg-yellow-100 px-4 py-6">
  <div class="break-words w-1/3 rounded-md bg-yellow-200 text-yellow-600 p-4 text-lg font-medium">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiisitaquequodpraesentiumexplicaboincidunt? Dolores beatae nam at sed dolorum ratione dolorem nisi velit cum.
  </div>
</div>
`),
    new Story('Break All', '在必要的位置添加换行, 而不试图保持完整的单词')
      .code(`\
<!--
  'break-all': 在必要的位置添加换行, 而不试图保持完整的单词
-->
<div class="flex justify-center bg-green-100 px-4 py-6">
  <div class="break-all w-1/3 rounded-md bg-green-200 text-green-600 p-4 text-lg font-medium">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiisitaquequodpraesentiumexplicaboincidunt? Dolores beatae nam at sed dolorum ratione dolorem nisi velit cum.
  </div>
</div>
`),
    new Story('Responsive', '')
      .code(`\
<div class="flex justify-center bg-orange-100 px-4 py-6">
  <div class="break-normal md:break-all w-1/3 rounded-md bg-orange-200 text-orange-600 p-4 text-lg font-medium">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiisitaquequodpraesentiumexplicaboincidunt? Dolores beatae nam at sed dolorum ratione dolorem nisi velit cum.
  </div>
</div>
`),
    new Story('Variants', '', 'javascript')
      .code(`\
/* tailwind.config.js */
module.exports = {
  variants: {
    extend: {
      wordBreak: ['hover', 'focus']
    }
  }
}
`),
    new Story('Disabling', '', 'javascript')
      .code(`\
/* tailwind.config.js */
module.exports = {
  corePlugins: {
    wordBreak: false
  }
}
`)
  ])
    .render();
};
