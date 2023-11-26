import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('White Spaces', true);
  book.append([
    new Story('Normal', '使文本在换行或空格处折行')
      .code(`\
<!--
  'whitespace-normal': 使文本在换行或空格处折行
-->
<div class="bg-blue-100 flex justify-center px-4 py-6">
    <div class="whitespace-normal bg-blue-300 rounded-md p-4 font-flow w-1/2 text-blue-600 text-3xl leading-5 font-medium">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  Omnis quidem itaque beatae, rem tenetur quia iure,
  eum natus enim maxime laudantium quibusdam illo nihil,

  reprehenderit saepe quam aliquid odio accusamus.
    </div>
</div>
`),
    new Story('No Wrap', '禁止文本换行')
      .code(`\
<!--
  'whitespace-nowrap': 禁止文本换行
-->
<div class="bg-green-100 flex justify-center px-4 py-6">
    <div class="whitespace-nowrap overflow-hidden bg-green-300 rounded-md p-4 font-flow w-1/2 text-green-600 text-3xl leading-5 font-medium">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  Omnis quidem itaque beatae, rem tenetur quia iure,
  eum natus enim maxime laudantium quibusdam illo nihil,

  reprehenderit saepe quam aliquid odio accusamus.
    </div>
</div>
`),
    new Story('No Wrap', '保留文本中的换行和空格, 但不自动折行')
      .code(`\
<!--
  'whitespace-pre': 保留文本中的换行和空格, 但不自动折行
-->
<div class="bg-yellow-100 flex justify-center px-4 py-6">
    <div class="whitespace-pre overflow-x-auto bg-yellow-300 rounded-md p-4 font-flow w-1/2 text-yellow-600 text-3xl leading-5 font-medium">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  Omnis quidem itaque beatae, rem tenetur quia iure,
  eum natus enim maxime laudantium quibusdam illo nihil,

  reprehenderit saepe quam aliquid odio accusamus.
    </div>
</div>
`),
    new Story('Pre Line', '保留换行但不保留空格, 文本按需要自动折行')
      .code(`\
<!--
  'whitespace-pre-line': 保留换行但不保留空格, 文本按需要自动折行
-->
<div class="bg-light-blue-100 flex justify-center px-4 py-6">
    <div class="whitespace-pre-line bg-light-blue-300 rounded-md p-4 font-flow w-1/2 text-light-blue-600 text-3xl leading-5 font-medium">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  Omnis quidem itaque beatae, rem tenetur quia iure,
  eum natus enim maxime laudantium quibusdam illo nihil,

  reprehenderit saepe quam aliquid odio accusamus.
    </div>
</div>
`),
    new Story('Pre Wrap', '即保留换行也保留空格, 并且文本按照需要自动折行')
      .code(`\
<!--
  'whitespace-pre-wrap': 即保留换行也保留空格, 并且文本按照需要自动折行
-->
<div class="bg-rose-100 flex justify-center px-4 py-6">
    <div class="whitespace-pre-wrap bg-rose-300 rounded-md p-4 font-flow w-1/2 text-rose-600 text-3xl leading-5 font-medium">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  Omnis quidem itaque beatae, rem tenetur quia iure,
  eum natus enim maxime laudantium quibusdam illo nihil,

  reprehenderit saepe quam aliquid odio accusamus.
    </div>
</div>
`),
    new Story('Responsive', '使用屏幕尺寸前缀进行屏幕自适应设置')
      .code(`\
<div class="bg-green-100 flex justify-center px-4 py-6">
    <div class="whitespace-normal md:whitespace-pre overflow-x-auto bg-green-300 rounded-md p-4 font-flow w-1/2 text-green-600 text-3xl leading-5 font-medium">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  Omnis quidem itaque beatae, rem tenetur quia iure,
  eum natus enim maxime laudantium quibusdam illo nihil,

  reprehenderit saepe quam aliquid odio accusamus.
    </div>
</div>
`),
    new Story('Variants', '', 'javascript')
      .code(`\
/* tailwind.config.js */
module.exports = {
  variants: {
    extend: {
      whitespace: ['hover', 'focus']
    }
  }
}
`),
    new Story('Disabling', '', 'javascript')
      .code(`\
/* tailwind.config.js */
module.exports = {
  corePlugins: {
    whitespace: false
  }
}
`)
  ])
    .render();
};
