import { Story, StoryBook } from '../../common';


window.onload = () => {
  const book = new StoryBook('Line Height', true);
  book.append([
    new Story("Relative Line Height", "设置相对行高")
      .code(`\
<!--
  'leading-{none,tight,sung,normal,relexed,loose}': 设置相对行高
-->
<div class="space-y-6 px-4 py-6 bg-purple-100 text-purple-500">
  <div class="space-y-1">
    <dt class="font-mono text-xs">leading-none</dt>
    <dd class="leading-none text-purple-700">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, 
      rerum accusantium modi quidem, 
      ipsam illum quis sed voluptatum quae eum fugit earum.
    </dd>
  </div>
  <div class="space-y-1">
    <dt class="font-mono text-xs">leading-tight</dt>
    <dd class="leading-tight text-purple-700">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, 
      rerum accusantium modi quidem, 
      ipsam illum quis sed voluptatum quae eum fugit earum.
    </dd>
  </div>
  <div class="space-y-1">
    <dt class="font-mono text-xs">leading-snug</dt>
    <dd class="leading-snug text-purple-700">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, 
      rerum accusantium modi quidem, 
      ipsam illum quis sed voluptatum quae eum fugit earum.
    </dd>
  </div>
  <div class="space-y-1">
    <dt class="font-mono text-xs">leading-normal</dt>
    <dd class="leading-normal text-purple-700">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, 
      rerum accusantium modi quidem, 
      ipsam illum quis sed voluptatum quae eum fugit earum.
    </dd>
  </div>
  <div class="space-y-1">
    <dt class="font-mono text-xs">leading-loose</dt>
    <dd class="leading-loose text-purple-700">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, 
      rerum accusantium modi quidem, 
      ipsam illum quis sed voluptatum quae eum fugit earum.
    </dd>
  </div>
</div>
`),
    new Story("Absolute Line Height", "绝对行高")
      .code(`\
<!--
  'leading-{3~10}': 设置绝对行高
-->
<div class="space-y-6 bg-green-100 px-4 py-6 text-green-600">
  <div class="space-y-1">
    <dt class="font-mono text-xs">leading-3</dt>
    <dd class="leading-3 text-green-800">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, 
      rerum accusantium modi quidem, 
      ipsam illum quis sed voluptatum quae eum fugit earum.
    </dd>
  </div>
  <div class="space-y-1">
    <dt class="font-mono text-xs">leading-4</dt>
    <dd class="leading-4 text-green-800">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, 
      rerum accusantium modi quidem, 
      ipsam illum quis sed voluptatum quae eum fugit earum.
    </dd>
  </div>
  <div class="space-y-1">
    <dt class="font-mono text-xs">leading-5</dt>
    <dd class="leading-5 text-green-800">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, 
      rerum accusantium modi quidem, 
      ipsam illum quis sed voluptatum quae eum fugit earum.
    </dd>
  </div>
  <div class="space-y-1">
    <dt class="font-mono text-xs">leading-6</dt>
    <dd class="leading-6 text-green-800">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, 
      rerum accusantium modi quidem, 
      ipsam illum quis sed voluptatum quae eum fugit earum.
    </dd>
  </div>
  <div class="space-y-1">
    <dt class="font-mono text-xs">leading-7</dt>
    <dd class="leading-7 text-green-800">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, 
      rerum accusantium modi quidem, 
      ipsam illum quis sed voluptatum quae eum fugit earum.
    </dd>
  </div>
  <div class="space-y-1">
    <dt class="font-mono text-xs">leading-8</dt>
    <dd class="leading-8 text-green-800">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, 
      rerum accusantium modi quidem, 
      ipsam illum quis sed voluptatum quae eum fugit earum.
    </dd>
  </div>
  <div class="space-y-1">
    <dt class="font-mono text-xs">leading-9</dt>
    <dd class="leading-9 text-green-800">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, 
      rerum accusantium modi quidem, 
      ipsam illum quis sed voluptatum quae eum fugit earum.
    </dd>
  </div>
  <div class="space-y-1">
    <dt class="font-mono text-xs">leading-10</dt>
    <dd class="leading-10 text-green-800">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, 
      rerum accusantium modi quidem, 
      ipsam illum quis sed voluptatum quae eum fugit earum.
    </dd>
  </div>
</div>
`),
    new Story("Responsive")
      .code(`\
<p class="leading-none md:leading-loose bg-light-blue-100 text-blue-700 px-4 py-6">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
  Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, 
  rerum accusantium modi quidem, 
  ipsam illum quis sed voluptatum quae eum fugit earum.
</p>
`),
    new Story("Customize", "通过Tailwind配置定义行高样式类", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  theme: {
    lineHeight: {
      'extra-loose': '2.5',
      '12': '3rem'
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
      lineHeight: ['hover', 'focus']
    }
  }
}
`),
    new Story("Disabling", "", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  corePlugins: {
    lineHeight: false
  }
}
`)
  ])
    .render();
}
