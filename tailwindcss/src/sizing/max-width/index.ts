import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Max Width', true);
  book.append([
    new Story("Max Width", "设置元素的最大宽度")
      .code(`\
<!--
  'max-w-{size}': 设置元素的最大宽度
-->
<div class="space-y-4 py-5 text-white text-lg font-semibold">
  <div class="max-w-md w-1/2 py-5 flex items-center justify-center bg-green-500">
    max-w-md
  </div>
  <div class="max-w-md w-full py-5 flex items-center justify-center bg-green-500">
    max-w-md
  </div>
</div>
`),
    new Story("Prose", "设置文字排版的最佳阅读宽度")
      .code(`\
<!--
  'max-w-prose': 设置元素的最佳阅读宽度
-->
<div class="max-w-prose py-4 px-5 m-auto text-white font-semibold bg-warm-gray-500">
  <p class="font-bold">Why do you never see elephants hiding in trees?</p>
  <p>Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.</p>
</div>
`),
    new Story("Responsive")
      .code(`\
<div class="py-5 max-w-sm md:max-w-lg m-auto flex justify-center text-white text-lg font-semibold bg-blue-500">
  Responsive
</div>
`),
    new Story("Customize", "Max-Width Scale", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  theme: {
    maxWidth: {
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%'
    }
  }
}
`),
    new Story("Variants", "", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  variants: {
    extend: {
      maxWidth: ['hover', 'focus']
    }
  }
}
`),
    new Story("Disabling", "", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  corePlugins: {
    maxWidth: false
  }
}`)
  ])
    .render();
};
