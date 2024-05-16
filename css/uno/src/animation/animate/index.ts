import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Animation', true);
  book.append([
    new Story('Spin', '设置旋转动画样式')
      .code(`\
<!--
  'animate-spin': 设置旋转动画
-->
<div class="flex justify-around bg-rose-100 px-4 py-6 text-white text-lg">
  <button class="flex flex-row items-center justify-items-center
                 bg-rose-600 rounded-md shadow-md font-medium px-4 py-2">
    <svg xmlns="http://www.w3.org/2000/svg"
         class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
         fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10"
              stroke="currentColor" stroke-width="4">
      </circle>
      <path class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
      </path>
    </svg>
    Processing
  </button>
</div>
`),
    new Story('Ping', '设置水波纹一样的缩放, 消逝效果')
      .code(`\
<!--
  'animate-ping': 设置波纹动画
-->
<div class="bg-purple-100 px-4 py-6">
  <span class="flex items-center justify-center border-purple-600">
    <span class="relative inline-flex text-lg text-purple-800 font-medium bg-white border border-purple-500 rounded-md px-3 py-2">Transactions</span>
    <span class="animate-ping absolute inline-flex opacity-75 -mt-11 -mr-32 h-4 w-4 rounded-full bg-purple-400"></span>
    <span class="absolute inline-flex -mt-11 -mr-32 h-4 w-4 rounded-full bg-purple-600"></span>
  </span>
</div>
`),
    new Story('Pulse', '设置脉冲动画效果')
      .code(`\
<!--
  'animate-pulse': 设置脉冲动画
-->
<div class="flex justify-center bg-light-blue-100 px-4 py-6">
  <div class="animate-pulse flex items-top w-1/2 space-x-4 border-2 border-light-blue-500 rounded-lg p-4">
    <div class="w-12 h-12">
      <i class="flex w-full h-full rounded-full bg-light-blue-500"></i>
    </div>
    <div class="flex-1">
      <i class="flex rounded-md h-5 w-2/3 bg-light-blue-500"></i>
      <i class="flex rounded-md h-5 w-full mt-6 bg-light-blue-500"></i>
      <i class="flex rounded-md h-5 w-11/12 mt-3 bg-light-blue-500"></i>
    </div>
  </div>
</div>
`),
    new Story('Bounce ', '设置弹跳动画样式')
      .code(`\
<!--
  'animate-bounce': 设置弹跳动画
-->
<div class="flex justify-center bg-amber-100 px-4 py-6">
  <svg class="animate-bounce w-6 h-6 text-amber-900"
       fill="none"
       stroke-linecap="round"
       stroke-linejoin="round"
       stroke-width="2"
       stroke="currentColor"
       viewBox="0 0 24 24">
    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
  </svg>
</div>
`),
    new Story('None', '取消动画效果')
      .code(`\
<!--
  'animate-none': 取消动画
-->
<div class="flex justify-center px-4 py-6 bg-green-100">
  <div class="hover:animate-none animate-spin
              bg-gradient-to-r from-green-300 to-green-500
              rounded-full shadow-lg w-32 h-32 cursor-pointer">
</div>
`),
    new Story('Responsive')
      .code(`\
<div class="flex justify-center px-4 py-6 bg-light-blue-100">
  <div class="animate-none md:animate-bounce
              bg-gradient-to-r from-light-blue-300 to-light-blue-500
              shadow-lg w-32 h-32 cursor-pointer">
</div>
`),
    new Story('Customize', '通过Tailwind配置, 设置动画样式, 包括动画执行样式类和关键帧 (@keyframe) 样式类', 'javascript')
      .code(`\
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'rotate(-3deg)'
          },
          '50%': {
            transform: 'rotate(3deg)'
          }
        }
      }
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
      animation: ['hover', 'focus']
    }
  }
}
`),
    new Story('Disabling', '', 'javascript')
      .code(`\
// tailwind.config.js
module.exports = {
  corePlugins: {
    animation: false
  }
}`)
  ])
    .render();
};
