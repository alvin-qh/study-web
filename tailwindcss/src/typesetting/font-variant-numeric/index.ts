import { Story, StoryBook } from '../../common';
import image from '../../asset/image.jpg';

window.onload = () => {
  const book = new StoryBook('Font Variant Numeric', true);
  book.append([
    new Story("准备工作1: font-source", "在'tailwind.config.js'中设置所需的字体样式类", "javascript")
      .code(`\
{
  theme: {
    fontFamily: {
      source: [
        "Source Sans Pro", 
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji"
      ],
      "ubuntu-mono": [
        "Ubuntu Mono",
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        "Liberation Mono",
        "Courier New",
        "monospace"
      ]
    }
  }
}
`),
new Story("准备工作2: '@font-face' in css", "在CSS中加载所需的字体", "css")
      .code(`\
@font-face {
  font-family        : Inter var;
  font-weight        : 100 900;
  font-display       : swap;
  font-style         : normal;
  font-named-instance: "Regular";
  src                : url(asset/Inter-roman-latin.var.woff2) format("woff2")
}

@font-face {
  font-family : Source Sans Pro;
  font-style  : normal;
  font-weight : 400;
  font-display: swap;
  src         : url(asset/SourceSansPro-Regular.otf) format("opentype")
}

@font-face {
  font-family: Ubuntu Mono;
  font-weight: 700;
  font-style : normal;
  src        : url(asset/Ubuntu-Mono-bold.woff2) format("woff2")
}
`),
    new Story("Ordinal", "为序数标记启用特殊字形，需要'Source Sans Pro'字体支持")
      .code(`\
<!--
  'ordinal': 为序数标记启用特殊字形
-->
<p class="ordinal font-source text-3xl text-teal-600 bg-teal-100 text-center px-4 py-6">
  1st
</p>
`),
    new Story("Slashed Zero", "强制为0增加一个短杠，需要'Source Sans Pro'字体支持")
      .code(`\
<!--
  'slashed-zero': 强制为数字0增加一个短杠，便于和字母O区分
-->
<p class="slashed-zero font-source text-3xl text-light-blue-600 bg-light-blue-100 text-center px-4 py-6">
  0
</p>
`),
    new Story("Lining Figures", "使用按基线对齐的数字字形，需要'Source Sans Pro'字体支持")
      .code(`\
<!--
  'lining-nums': 使用按基线对齐的数字字形
-->
<p class="lining-nums font-source text-3xl text-red-500 bg-red-100 text-center px-4 py-6">
  1234567890
</p>
`),
    new Story("Oldstyle Figures", "使用带有降格样式的数字字形，需要'Source Sans Pro'字体支持")
      .code(`\
<!--
  'oldstyle-nums': 使用带有降格样式的数字字形
-->
<p class="oldstyle-nums font-source text-3xl text-purple-500 bg-purple-100 text-center px-4 py-6">
  1234567890
</p>
`),
    new Story("Proportional Figures", "显示具有比例宽度的数字字形，需要'Source Sans Pro'字体支持")
      .code(`\
<!--
  'proportional-nums': 显示具有比例宽度的数字字形
-->
<div class="text-3xl text-indigo-500 bg-indigo-100 text-right px-4 py-6">
  <p class="proportional-nums font-source">12121</p>
  <p class="proportional-nums font-source">90909</p>
</div>
`),
    new Story("Tabular Figures", "显示具有统一宽度的数字字形，需要'Source Sans Pro'字体支持")
      .code(`\
<!--
  'proportional-nums': 显示具有比例宽度的数字字形
-->
<div class="text-3xl text-yellow-500 bg-yellow-100 text-right px-4 py-6">
  <p class="tabular-nums font-source">12121</p>
  <p class="tabular-nums font-source">90909</p>
</div>
`),
    new Story("Diagonal Fractions", "显示斜线分隔的分数字形，需要'Source Sans Pro'字体支持")
      .code(`\
<!--
  'diagonal-fractions': 显示斜线分隔的分数字形
-->
<p class="diagonal-fractions font-source text-3xl text-green-500 bg-green-100 text-center px-4 py-6">
  1/2 3/4 5/6
</p>
`),
    new Story("Stacked Fractions", "用堆叠分数替换用斜线分隔的数字，需要'Ubuntu Mono'字体支持")
      .code(`\
<!--
  'stacked-fractions': 用堆叠分数替换用斜线分隔的数字
-->
<p class="stacked-fractions font-ubuntu-mono text-3xl text-blue-500 bg-blue-100 text-center px-4 py-6">
  1/2 3/4 5/6
</p>
`),
    new Story("Resetting Numeric Font Variants", "重置数字字形")
      .code(`\
<!--
  'normal-nums': 重置已设置的数字字形
-->
<p class="slashed-zero tabular-nums ordinal font-source text-3xl tracking-wide text-rose-500 bg-rose-100 text-center px-4 py-6">
  01st<span class="normal-nums">01st</span>
</p>
`),
    new Story("Responsive")
      .code(`\
<div class="proportional-nums md:tabular-nums font-source text-3xl tracking-wide text-teal-500 bg-teal-100 text-center px-4 py-6">
  1234567890
</div>
`),
    new Story("Variants", "", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  variants: {
    extend: {
      fontVariantNumeric: ['hover', 'focus'],
    }
  }
}
`)
    , new Story("Disabling", "", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  corePlugins: {
    fontVariantNumeric: false,
  }
}
`)
  ])
    .render();
}
