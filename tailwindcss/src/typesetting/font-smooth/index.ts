import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Font Smoothing', true);
  book.append([
    new Story("Subpixel Antialiasing", "使用subpixel antialiasing渲染文本")
      .code(`\
<!--
  'subpixel-antialiased': 以subpixel antialiasing方式渲染字体
-->
<p class="subpixel-antialiased py-6 px-4 text-lg bg-light-blue-100">
  The quick brown fox jumped over the lazy dog.
</p>
`),
    new Story("Grayscale Antialiasing", "使用grayscale antialiasing渲染文本")
      .code(`\
<!--
  'antialiased': 以grayscale antialiasing方式渲染字体
-->
<p class="antialiased py-6 px-4 text-lg bg-green-100">
  The quick brown fox jumped over the lazy dog.
</p>
`),
    new Story("Responsive")
      .code(`\
<p class="text-lg antialiased sm:subpixel-antialiased md:antialiased py-6 px-4 bg-orange-100">
  The quick brown fox jumped over the lazy dog.
</p>
`),
    new Story("Variants", "", "javascript")
      .code(`\
/* tailwind.config.js */      
module.exports = {
  variants: {
    extend: {
      fontSmoothing: ['hover', 'focus']
    }
  }
}
`),
    new Story("Disable Container", "", "javascript")
      .code(`\
/* tailwind.config.js */      
module.exports = {
  corePlugins: {
    fontSmoothing: false,
  }
}
`)
  ])
    .render()
}
