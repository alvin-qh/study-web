import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Font Size', true);
  book.append([
    new Story("Font Size", "设置文本字体尺寸")
      .code(`\
<!-- 
  'text-{size}': 设置文本字体大小
                 size按从小到大依次为'xs', 'sm', 'base', 'lg', 'xl', '{1~9}xl'
-->
<div class="px-10 py-5 space-y-4 overflow-hidden bg-gradient-to-r from-purple-50 to-purple-100">
  <div class="flex items-center">
    <dt class="w-16 flex-shrink-0 leading-10">xs</dt>
    <dd class="text-xs font-medium">The quick brown fox jumped over the lazy dog.</dd>
  </div>
  <div class="flex items-center">
    <dt class="w-16 flex-shrink-0 leading-10">sm</dt>
    <dd class="text-sm font-medium">The quick brown fox jumped over the lazy dog.</dd>
  </div>
  <div class="flex items-center">
    <dt class="w-16 flex-shrink-0 leading-10">base</dt>
    <dd class="text-base font-medium">The quick brown fox jumped over the lazy dog.</dd>
  </div>
  <div class="flex items-center">
    <dt class="w-16 flex-shrink-0 leading-10">lg</dt>
    <dd class="text-lg font-medium">The quick brown fox jumped over the lazy dog.</dd>
  </div>
  <div class="flex items-center">
    <dt class="w-16 flex-shrink-0 leading-10">xl</dt>
    <dd class="text-xl font-medium">The quick brown fox jumped over the lazy dog.</dd>
  </div>
  <div class="flex items-center">
    <dt class="w-16 flex-shrink-0 leading-10">2xl</dt>
    <dd class="text-2xl font-medium">The quick brown fox jumped over the lazy dog.</dd>
  </div>
  <div class="flex items-center">
    <dt class="w-16 flex-shrink-0 leading-10">3xl</dt>
    <dd class="text-3xl font-medium">The quick brown fox jumped over the lazy dog.</dd>
  </div>
  <div class="flex items-center">
    <dt class="w-16 flex-shrink-0 leading-10">4xl</dt>
    <dd class="text-4xl font-medium">The quick brown fox jumped over the lazy dog.</dd>
  </div>
  <div class="flex items-center">
    <dt class="w-16 flex-shrink-0 leading-10">5xl</dt>
    <dd class="text-5xl font-medium">The quick brown fox jumped over the lazy dog.</dd>
  </div>
  <div class="flex items-center">
    <dt class="w-16 flex-shrink-0 leading-10">6xl</dt>
    <dd class="text-6xl font-medium">The quick brown fox jumped over the lazy dog.</dd>
  </div>
  <div class="flex items-center">
    <dt class="w-16 flex-shrink-0 leading-10">7xl</dt>
    <dd class="text-7xl font-medium">The quick brown fox jumped over the lazy dog.</dd>
  </div>
  <div class="flex items-center">
    <dt class="w-16 flex-shrink-0 leading-10">8xl</dt>
    <dd class="text-8xl font-medium">The quick brown fox jumped over the lazy dog.</dd>
  </div>
  <div class="flex items-center">
    <dt class="w-16 flex-shrink-0 leading-10">9xl</dt>
    <dd class="text-9xl font-medium">The quick brown fox jumped over the lazy dog.</dd>
  </div>
</div>
`),
    new Story("Responsive")
      .code(`\
<p class="text-base md:text-lg py-5 px-4 bg-green-100 font-medium">
  The quick brown fox jumped over the lazy dog.
</p>
`),
    new Story("Customize", "通过配置Tailwind，可以添加、删除和修改默认的字体尺寸样式类", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  theme: {
    fontSize: {
//    'xs': '.75rem',
//    'sm': '.875rem',
      'tiny': '.875rem',    // New class
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
//    '3xl': '1.875rem',
//    '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem'
    }
  }
}
`),
    new Story("Default Line Height", "可以通过Tailwind配置设置默认的行高样式类", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  theme: {
    fontSize: {
      sm: ['14px', '20px'],     // class-name: ['font-size', 'line-height']
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px']
    }
  }
}
`),
    new Story("Default Letter Spacing", "可以通过Tailwind配置设置默认的字间距样式类", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  theme: {
    fontSize: {
      '2xl': ['24px', {
        letterSpacing: '-0.01em'
      }],

      // Or with a default line-height as well
      '3xl': ['32px', {
        letterSpacing: '-0.02em',   // letter spacing
        lineHeight: '40px'          // line height
      }]
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
      fontSize: ['hover', 'focus']
    }
  }
}
`),
    new Story("Disabling", "", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  corePlugins: {
    fontSize: false
  }
}
`)
  ])
    .render();
}
