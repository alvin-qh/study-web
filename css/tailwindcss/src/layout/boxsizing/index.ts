import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Box sizing', true);
  book.append([
    new Story('Size Include Border and Padding', '在计算元素尺寸时包含边框和内边距')
      .code(`\
<!--
  'box-border': 元素尺寸包含边框和内边距
-->
<div class="box-border border-red-600 border-4 h-32 w-32 p-4 bg-red-400">
  <!-- ... -->
</div>
`),
    new Story('Size Exclude Border and Padding', '在计算元素尺寸时排除边框和内边距')
      .code(`\
<!--
  'box-content': 元素尺寸不包含边框和内边距
-->
<div class="box-content border-green-600 border-4 h-32 w-32 p-4 bg-green-400">
  <!-- ... -->
</div>
`),
    new Story('Responsive')
      .code(`\
<div class="box-border md:box-content border-blue-600 border-2 p-4">
  <!-- ... -->
</div>`)
  ])
    .render();
};
