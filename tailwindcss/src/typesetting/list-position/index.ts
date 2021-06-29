import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('List Position', true);
  book.append([
    new Story("List Postion", "设置列表标记的位置")
      .code(`\
<!--
  'list-inside': 列表标记保持在容器内
  'list-outside': 列表标记保持在容器外
-->
<div class="space-y-6 bg-light-blue-100 px-4 py-6">
  <div class="space-y-2">
    <dt class="text-xs font-mono text-blue-400">list-inside</dt>
    <dd class="bg-light-blue-200 bg-stripes bg-stripes-white text-light-blue-600 text-lg py-3">
      <ul class="list-inside list-disc">
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
        <li>Assumenda, quia temporibus eveniet a libero incidunt suscipit</li>
        <li>Quidem, ipsam illum quis sed voluptatum quae eum fugit earum</li>
      </ul>
    </dd>
  </div>
  <div class="space-y-2">
    <dt class="text-xs font-mono text-blue-400">list-outside</dt>
    <dd class="bg-light-blue-200 bg-stripes bg-stripes-white text-light-blue-600 text-lg py-3">
      <ul class="list-outside list-disc">
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
        <li>Assumenda, quia temporibus eveniet a libero incidunt suscipit</li>
        <li>Quidem, ipsam illum quis sed voluptatum quae eum fugit earum</li>
      </ul>
    </dd>
  </div>
</div>
`),
    new Story("Responsive", "使用屏幕尺寸前缀进行屏幕自适应设置")
      .code(`\
<ul class="list-outside md:list-inside p-4 text-lg bg-yellow-100 text-yellow-600">
  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
  <li>Assumenda, quia temporibus eveniet a libero incidunt suscipit</li>
  <li>Quidem, ipsam illum quis sed voluptatum quae eum fugit earum</li>
</ul>
`),
    new Story("Variants", "", "javascript")
      .code(`\
/* tailwind.config.js */      
module.exports = {
  variants: {
    extend: {
      listStylePosition: ['hover', 'focus']
    }
  }
}
`),
    new Story("Disabling", "", "javascript")
      .code(`\
/* tailwind.config.js */      
module.exports = {
  corePlugins: {
    listStylePosition: false
  }
}
`)
  ])
    .render();
}
