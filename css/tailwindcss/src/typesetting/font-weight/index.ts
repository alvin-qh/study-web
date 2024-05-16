import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Font Weight', true);
  book.append([
    new Story('Font Weight', '设置字体粗细的样式')
      .code(`\
<!--
  'font-{weight}': 设置字体粗细
-->
<div class="text-xl font-sans space-y-4 text-light-blue-500 px-4 py-6 bg-light-blue-100">
  <div class="flex flex-shrink-0 items-center leading-10">
    <dt class="w-20 text-xs">thin</dt>
    <dd class="font-thin">The quick brown fox jumped over the lazy dog.</dd>
  </div>
  <div class="flex flex-shrink-0 items-center leading-10">
    <dt class="w-20 text-xs">extralight</dt>
    <dd class="font-extralight">The quick brown fox jumped over the lazy dog.</dd>
  </div>
  <div class="flex flex-shrink-0 items-center leading-10">
    <dt class="w-20 text-xs">light</dt>
    <dd class="font-light">The quick brown fox jumped over the lazy dog.</dd>
  </div>
  <div class="flex flex-shrink-0 items-center leading-10">
    <dt class="w-20 text-xs">normal</dt>
    <dd class="font-normal">The quick brown fox jumped over the lazy dog.</dd>
  </div>
  <div class="flex flex-shrink-0 items-center leading-10">
    <dt class="w-20 text-xs">medium</dt>
    <dd class="font-medium">The quick brown fox jumped over the lazy dog.</dd>
  </div>
  <div class="flex flex-shrink-0 items-center leading-10">
    <dt class="w-20 text-xs">semibold</dt>
    <dd class="font-semibold">The quick brown fox jumped over the lazy dog.</dd>
  </div>
  <div class="flex flex-shrink-0 items-center leading-10">
    <dt class="w-20 text-xs">bold</dt>
    <dd class="font-bold">The quick brown fox jumped over the lazy dog.</dd>
  </div>
  <div class="flex flex-shrink-0 items-center leading-10">
    <dt class="w-20 text-xs">extrabold</dt>
    <dd class="font-extrabold">The quick brown fox jumped over the lazy dog.</dd>
  </div>
  <div class="flex flex-shrink-0 items-center leading-10">
    <dt class="w-20 text-xs">black</dt>
    <dd class="font-black">The quick brown fox jumped over the lazy dog.</dd>
  </div>
</div>
`),
    new Story('Responsive')
      .code(`\
<p class="font-normal md:font-bold text-xl px-4 py-6 bg-red-100">
  The quick brown fox jumped over the lazy dog.
</p>
`),
    new Story('Customize', '通过配置Tailwind添加、删除和修改默认的字体粗细样式类', 'javascript')
      .code(`\
// tailwind.config.js
module.exports = {
  theme: {
    fontWeight: {
//    hairline: 100,
      'extra-light': 100,   // New
//    thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
//    semibold: 600,
      bold: 700,
//    extrabold: 800,
      'extra-bold': 800,    // New
      black: 900
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
      fontWeight: ['hover', 'focus']
    }
  }
}
`),
    new Story('Disabling', '', 'javascript')
      .code(`\
// tailwind.config.js
module.exports = {
  corePlugins: {
    fontWeight: false,
  }
}
`)
  ])
    .render();
};
