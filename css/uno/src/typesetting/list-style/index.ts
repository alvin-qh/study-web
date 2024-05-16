import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('List Style', true);
  book.append([
    new Story('List Style', '设置列表标记样式')
      .code(`\
<!--
  'list-none': 不显示列表标记
  'list-disc': 圆形列表标记
  'list-decimal': 数字列表标记
-->
<div class="px-4 py-6 space-y-6 bg-purple-100 text-purple-800">
  <div class="space-y-2">
    <dt class="text-purple-400">list-none (default)</dt>
    <dd>
      <ul class="list-none list-inside leading-relaxed">
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
        <li>Assumenda, quia temporibus eveniet a libero incidunt suscipit</li>
        <li>Quidem, ipsam illum quis sed voluptatum quae eum fugit earum</li>
      </ul>
    </dd>
  </div>
  <div class="space-y-2">
    <dt class="text-purple-400">list-disc</dt>
    <dd>
      <ul class="list-disc list-inside leading-relaxed">
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
        <li>Assumenda, quia temporibus eveniet a libero incidunt suscipit</li>
        <li>Quidem, ipsam illum quis sed voluptatum quae eum fugit earum</li>
      </ul>
    </dd>
  </div>
  <div class="space-y-2">
    <dt class="text-purple-400">list-disc</dt>
    <dd>
      <ol class="list-decimal list-inside leading-relaxed">
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
        <li>Assumenda, quia temporibus eveniet a libero incidunt suscipit</li>
        <li>Quidem, ipsam illum quis sed voluptatum quae eum fugit earum</li>
      </ol>
    </dd>
  </div>
</div>
`),
    new Story('Responsive', '使用屏幕尺寸前缀进行屏幕自适应设置')
      .code(`\
<ul class="list-none md:list-disc list-inside px-4 py-6 bg-yellow-100 text-yellow-700">
  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
  <li>Assumenda, quia temporibus eveniet a libero incidunt suscipit</li>
  <li>Quidem, ipsam illum quis sed voluptatum quae eum fugit earum</li>
</ul>
`),
    new Story('Customize', '通过Tailwind添加、删除和修改列表标记样式类', 'javascript')
      .code(`\
/* tailwind.config.js */      
module.exports = {
  theme: {
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman'
    }
  }
}
`),
    new Story('Variants', '', 'javascript')
      .code(`\
/* tailwind.config.js */      
module.exports = {
  variants: {
    extend: {
      listStyleType: ['hover', 'focus']
    }
  }
}
`),
    new Story('Disabling', '', 'javascript')
      .code(`\
/* tailwind.config.js */      
module.exports = {
  corePlugins: {
    listStyleType: false,
  }
}
`)
  ])
    .render();
};
