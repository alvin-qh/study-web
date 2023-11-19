import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Vertical Align', true);
  book.append([
    new Story('Baseline', '将元素与其后的元素按照父元素的基线对齐')
      .code(`\
<!--
  'align-baseline': 将元素与其后的元素按照父元素的基线对齐
-->
<div class="leading-none relative px-4 py-6 bg-light-blue-100 text-lg">
  <span class="align-baseline inline-block w-0 h-8">
    <span class="absolute top-auto border-light-blue-300 border-t border-b border-dashed w-full h-8"></span>
    <span class="absolute top-auto border-light-blue-300 border-t border-b border-dashed w-full h-4"></span>
  </span>
  <span class="relative z-10 text-light-blue-600 font-medium">
    The quick brown fox jumped over the lazy dog.
  </span>
</div>
`),
    new Story('Top', '将元素与其后的元素按照父元素的顶部对齐')
      .code(`\
<!--
  'align-top': 将元素与其后的元素按照父元素的顶部对齐
-->
<div class="leading-none relative px-4 py-6 bg-green-100 text-lg">
  <span class="align-top inline-block w-0 h-8">
    <span class="absolute top-auto border-green-300 border-t border-b border-dashed w-full h-8"></span>
    <span class="absolute top-auto border-green-300 border-t border-b border-dashed w-full h-4"></span>
  </span>
  <span class="relative z-10 text-green-600 font-medium">
    The quick brown fox jumped over the lazy dog.
  </span>
</div>
`),
    new Story('Middle', '将元素与其后的元素按照父元素的中部对齐')
      .code(`\
<!--
  'align-middle': 将元素与其后的元素按照父元素的中部对齐
-->
<div class="leading-none relative px-4 py-6 bg-purple-100 text-lg">
  <span class="align-middle inline-block w-0 h-8">
    <span class="absolute top-auto border-purple-300 border-t border-b border-dashed w-full h-8"></span>
    <span class="absolute top-auto border-purple-300 border-t border-b border-dashed w-full h-4"></span>
  </span>
  <span class="relative z-10 text-purple-600 font-medium">
    The quick brown fox jumped over the lazy dog.
  </span>
</div>
`),
    new Story('Bottom', '将元素与其后的元素按照父元素的底部对齐')
      .code(`\
<!--
  'align-bottom': 将元素与其后的元素按照父元素的底部对齐
-->
<div class="leading-none relative px-4 py-6 bg-teal-100 text-lg">
  <span class="align-bottom inline-block w-0 h-8">
    <span class="absolute top-auto border-teal-300 border-t border-b border-dashed w-full h-8"></span>
    <span class="absolute top-auto border-teal-300 border-t border-b border-dashed w-full h-4"></span>
  </span>
  <span class="relative z-10 text-teal-600 font-medium">
    The quick brown fox jumped over the lazy dog.
  </span>
</div>
`),
    new Story('Text Top', '将元素的文本与其后的元素按照父元素的顶部对齐')
      .code(`\
<!--
  'align-text-top': 将元素的文本与其后的元素按照父元素的顶部对齐
-->
<div class="leading-none relative px-4 py-6 bg-amber-100 text-lg">
  <span class="align-text-top inline-block w-0 h-8">
    <span class="absolute top-auto border-amber-300 border-t border-b border-dashed w-full h-8"></span>
    <span class="absolute top-auto border-amber-300 border-t border-b border-dashed w-full h-4"></span>
  </span>
  <span class="relative z-10 text-amber-600 font-medium">
    The quick brown fox jumped over the lazy dog.
  </span>
</div>
`),
    new Story('Text Bottom', '将元素的文本与其后的元素按照父元素的底部对齐')
      .code(`\
<!--
  'align-text-top': 将元素的文本与其后的元素按照父元素的底部对齐
-->
<div class="leading-none relative px-4 py-6 bg-fuchsia-100 text-lg">
  <span class="align-text-bottom inline-block w-0 h-8">
    <span class="absolute top-auto border-fuchsia-300 border-t border-b border-dashed w-full h-8"></span>
    <span class="absolute top-auto border-fuchsia-300 border-t border-b border-dashed w-full h-4"></span>
  </span>
  <span class="relative z-10 text-fuchsia-600 font-medium">
    The quick brown fox jumped over the lazy dog.
  </span>
</div>
`),
    new Story('Responsive', '使用屏幕尺寸前缀进行屏幕自适应设置')
      .code(`\
<div class="leading-none relative px-4 py-6 bg-yellow-100 text-lg">
  <span class="align-top md:align-middle inline-block w-0 h-8">
    <span class="absolute top-auto border-yellow-300 border-t border-b border-dashed w-full h-8"></span>
    <span class="absolute top-auto border-yellow-300 border-t border-b border-dashed w-full h-4"></span>
  </span>
  <span class="relative z-10 text-yellow-600 font-medium">
    The quick brown fox jumped over the lazy dog.
  </span>
</div>
`),
    new Story('Variants', '', 'javascript')
      .code(`\
/* tailwind.config.js */
module.exports = {
  variants: {
    extend: {
      verticalAlign: ['hover', 'focus']
    }
  }
}
`),
    new Story('Disabling', '', 'javascript')
      .code(`\
/* tailwind.config.js */
module.exports = {
  corePlugins: {
    verticalAlign: false
  }
}
`)
  ])
    .render();
};
