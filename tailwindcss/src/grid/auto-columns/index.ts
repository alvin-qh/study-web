import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Grid Auto Columns', true);
  book.append([
    new Story("Auto Columns", "使用'auto-cols-{size}'来设置网格列的大小")
      .code(`\
<!--
  'auto-cols-auto'
-->
<div class="grid grid-rows-2 grid-flow-col auto-cols-auto gap-4 h-64 text-white text-lg font-semibold">
  <div class="flex items-center justify-center bg-green-500">
    HyperText Markup language
  </div> 
  <div class="flex items-center justify-center bg-green-500">
    Cascading Style Sheet
  </div> 
  <div class="flex items-center justify-center bg-green-500">
    LiveScript Become JavaScript
  </div> 
  <div class="flex items-center justify-center bg-green-500">
    Bootstrap become replacement of CSS
  </div> 
</div>
<hr class="my-6">
<!--
  'auto-cols-min'
-->
<div class="grid grid-rows-2 grid-flow-col auto-cols-min gap-4 h-64 text-white text-lg font-semibold">
  <div class="p-2 flex items-center justify-center bg-purple-500">
    HyperText Markup language
  </div> 
  <div class="p-2 flex items-center justify-center bg-purple-500">
    Cascading Style Sheet
  </div> 
  <div class="p-2 flex items-center justify-center bg-purple-500">
    LiveScript Become JavaScript
  </div> 
  <div class="p-2 flex items-center justify-center bg-purple-500">
    Bootstrap become replacement of CSS
  </div> 
</div>
<hr class="my-6">
<!--
  'auto-cols-max'
-->
<div class="grid grid-rows-2 grid-flow-col auto-cols-max gap-4 h-64 text-white text-lg font-semibold">
  <div class="p-2 flex items-center justify-center bg-orange-500">
    HyperText Markup language
  </div> 
  <div class="p-2 flex items-center justify-center bg-orange-500">
    Cascading Style Sheet
  </div> 
  <div class="p-2 flex items-center justify-center bg-orange-500">
    LiveScript Become JavaScript
  </div> 
  <div class="p-2 flex items-center justify-center bg-orange-500">
    Bootstrap become replacement of CSS
  </div> 
</div>
<hr class="my-6">
<!--
  'auto-cols-fr'
-->
<div class="grid grid-rows-2 grid-flow-col auto-cols-fr gap-4 h-64 text-white text-lg font-semibold">
  <div class="p-2 flex items-center justify-center bg-cyan-500">
    HyperText Markup language
  </div> 
  <div class="p-2 flex items-center justify-center bg-cyan-500">
    Cascading Style Sheet
  </div> 
  <div class="p-2 flex items-center justify-center bg-cyan-500">
    LiveScript Become JavaScript
  </div> 
  <div class="p-2 flex items-center justify-center bg-cyan-500">
    Bootstrap become replacement of CSS
  </div> 
</div>
`),
    new Story("Responsive")
      .code(`\
<div class="grid grid-rows-2 grid-flow-col auto-cols-max md:auto-cols-min gap-4 h-64 text-white text-lg font-semibold">
  <div class="p-2 flex items-center justify-center bg-yellow-500">
    HyperText Markup language
  </div> 
  <div class="p-2 flex items-center justify-center bg-yellow-500">
    Cascading Style Sheet
  </div> 
  <div class="p-2 flex items-center justify-center bg-yellow-500">
    LiveScript Become JavaScript
  </div> 
  <div class="p-2 flex items-center justify-center bg-yellow-500">
    Bootstrap become replacement of CSS
  </div> 
</div>
`),
    new Story("Customize", "可以通过tailwind配置增加、删除或修改'grid-auto-columns'部分的样式类", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      gridAutoColumns: {
        '2fr': 'minmax(0, 2fr)'
      }
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
      gridAutoColumns: ['hover', 'focus']
    }
  }
}
`),
    new Story("Disabling", "", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  corePlugins: {
    gridAutoColumns: false
  }
}
`)
  ])
    .render();
}
