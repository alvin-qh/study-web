import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Font Style', true);
  book.append([
    new Story("Italics", "定义斜体字样式")
      .code(`\
<!--
  'italic': 定义斜体字
-->
<p class="italic text-lg px-4 py-6 bg-emerald-100">
  The quick brown fox jumped over the lazy dog.
</p>
`),
    new Story("Undo Italics", "取消斜体字样式")
      .code(`\
<!--
  'not-italic': 恢复正常字体
-->
<p class="text-lg px-4 py-6 bg-yellow-100">
  <span class="italic">The quick brown fox <span class="not-italic font-medium">jumped over</span> the lazy dog</span>.
</p>
`),
    new Story("Responsive")
      .code(`\
<p class="italic md:not-italic text-lg px-4 py-6 bg-orange-100">
  The quick brown fox jumped over the lazy dog.
</p>
`),
    new Story("Variants", "", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  variants: {
    extend: {
      fontStyle: ['hover', 'focus']
    }
  }
}
`),
    new Story("Disabling", "", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  corePlugins: {
    fontStyle: false,
  }
}
`)
  ])
    .render();
}
