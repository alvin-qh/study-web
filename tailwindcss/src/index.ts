import { Story, StoryBook } from './common';

const menu = [
  {
    title: "Core",
    descript: "核心概念",
    links: [
      {title: "Install Tailwind", href: "core/install.html", descript: "安装 Tailwind"},
      {title: "Using with Preprocessors", href: "core/postcss.html", descript: "使用PostCSS对Tailwind进行处理"},
      {title: "Optimizing for Production", href: "core/optimizing.html", descript: "使用PostCSS对Tailwind进行处理"},
      {title: "Css Class", href: "core/css-class.html", descript: "Tailwind 样式类"},
    ]
  },
  {
    title: "Layout",
    descript: "定义基本的容器布局",
    links: [
      {title: "Container", href: "layout/container.html", descript: "设置容器的固定宽度，是否居中"},
      {title: "Box Sizing", href: "layout/boxsizing.html", descript: "设置容器的盒模型，是否计算边框和 padding"},
      {title: "Display", href: "layout/display.html", descript: "设置容器内元素的显示方式，即定义容器的布局方式"},
      {title: "Floating", href: "layout/floating.html", descript: "设置元素在父容器内的浮动方式"},
      {title: "Clear Floating", href: "layout/clear-floating.html", descript: "清除元素周围的其它元素浮动，即终止后续元素的浮动"},
      {title: "Object Fit", href: "layout/object-fit.html", descript: "定义元素在父容器的尺寸"},
      {title: "Object Position", href: "layout/object-position.html", descript: "控制元素在其容器中的位置"},
    ]
  },
  {
    title: "Flex Layout",
    descript: "定义弹性容器布局",
    links: [
      {title: "Flex Direction", href: "flex/direction.html", descript: "设置元素在容器中的布局方向"},
      {title: "Flex Wrap", href: "flex/wrap.html", descript: "设置容器内元素如何换行"},
      {title: "Flex Scale", href: "flex/scale.html", descript: "控制元素的放大和缩小"},
      {title: "Flex Grow", href: "flex/grow.html", descript: "控制元素在必要时进行放大"},
      {title: "Flex Shrink", href: "flex/shrink.html", descript: "控制元素在必要时进行缩小"},
      {title: "Flex Order", href: "flex/order.html", descript: "设置元素排列顺序"},
    ]
  },
  {
    title: "Grid Layout",
    descript: "定义网格容器布局",
    links: [
      {title: "Grid Template Columns", href: "grid/template-columns.html", descript: "设置网格布局的列"},
      {title: "Grid Column Start/End", href: "grid/column-start-end.html", descript: "设置网格列的大小和放置方式"},
      {title: "Grid Template Rows", href: "grid/template-rows.html", descript: "设置网格布局的行"},
      {title: "Grid Row Start/End", href: "grid/row-start-end.html", descript: "设置网格行的大小和放置方式"},
      {title: "Grid Auto Flow", href: "grid/auto-flow.html", descript: "设置网格中如何自动放置元素"},
      {title: "Grid Auto Columns", href: "grid/auto-columns.html", descript: "设置网格列大小"},
      {title: "Grid Auto Rows", href: "grid/auto-rows.html", descript: "设置网格行大小"},
      {title: "Gap", href: "grid/gap.html", descript: "设置网格之间的距离"},
    ]
  },
  {
    title: "Box Alignment",
    descript: "定义元素在容器中的定位对齐方式",
    links: [
      {title: "Justify Content", href: "box-alignment/justify-content.html", descript: "设置容器内容沿水平对齐的方式"},
      {title: "Justify Items", href: "box-alignment/justify-items.html", descript: "设置容器内元素沿水平对齐的的方式"},
      {title: "Justify Self", href: "box-alignment/justify-self.html", descript: "设置元素相对于容器沿水平对齐的方式"},
      {title: "Align Content", href: "box-alignment/align-content.html", descript: "设置容器内容的垂直对齐的方式"},
      {title: "Align Items", href: "box-alignment/align-items.html", descript: "设置容器内元素的垂直对齐的方式"},
      {title: "Align Self", href: "box-alignment/align-self.html", descript: "设置元素相对于容器沿垂直对齐的方式"},
      {title: "Place Content", href: "box-alignment/place-content.html", descript: "设置容器内容在垂直和水平两个方向对齐的方式"},
      {title: "Place Items", href: "box-alignment/place-items.html", descript: "设置容器内元素在垂直和水平两个方向对齐的方式"},
      {title: "Place Self", href: "box-alignment/place-self.html", descript: "设置元素相对于容器在垂直和水平两个方向对齐的方式"},
    ]
  },
  {
    title: "Spacing",
    descript: "定义元素的间距，包括内边距，外边距，元素间距",
    links: [
      {title: "Padding", href: "spacing/padding.html", descript: "设置元素内边距"},
      {title: "Margin", href: "spacing/margin.html", descript: "设置元素外边距"},
      {title: "Between", href: "spacing/between.html", descript: "设置元素间的间隔"},
    ]
  },
  {
    title: "Sizing",
    descript: "定义元素的间距，包括内边距，外边距，元素间距",
    links: [
      {title: "Width", href: "sizing/width.html", descript: "设置元素的宽度"},
      {title: "Min Width", href: "sizing/min-width.html", descript: "设置元素的最小宽度"},
      {title: "Max Width", href: "sizing/max-width.html", descript: "设置元素的最大宽度"},
      {title: "Height", href: "sizing/height.html", descript: "设置元素的高度"},
      {title: "Min Height", href: "sizing/min-height.html", descript: "设置元素的最小高度"},
      {title: "Max Height", href: "sizing/max-height.html", descript: "设置元素的最大高度"},
    ]
  },
  {
    title: "Typesetting",
    descript: "定义排版样式，包括字体、文本、字间距等",
    links: [
      {title: "Font Family", href: "typesetting/font-family.html", descript: "设置元素的字体名称"},
      {title: "Font Size", href: "typesetting/font-size.html", descript: "设置元素的字体大小"},
      {title: "Font Smoothing", href: "typesetting/font-smooth.html", descript: "设置元素的字体平滑度"},
      {title: "Font Style", href: "typesetting/font-style.html", descript: "设置元素的字体样式"},
      {title: "Font Weight", href: "typesetting/font-weight.html", descript: "设置元素的字体粗细"},
      {title: "Font Variant Numeric", href: "typesetting/font-variant-numeric.html", descript: "设置数字变形"},
      {title: "Letter Spacing", href: "typesetting/letter-spacing.html", descript: "设置字母间距"},
      {title: "Line Height", href: "typesetting/line-height.html", descript: "设置行高"},
      {title: "List Style", href: "typesetting/list-style.html", descript: "设置列表标记样式"},
      {title: "List Position", href: "typesetting/list-position.html", descript: "设置列表标记位置"},
      {title: "Placeholder Color", href: "typesetting/placeholder-color.html", descript: "设置占位文本颜色"},
      {title: "Placeholder Opacity", href: "typesetting/placeholder-opacity.html", descript: "设置占位文本透明度"},
      {title: "Text Align", href: "typesetting/text-align.html", descript: "设置文本对齐方式"},
      {title: "Text Color", href: "typesetting/text-color.html", descript: "设置文本颜色"},
      {title: "Text Opacity", href: "typesetting/text-opacity.html", descript: "设置文本透明度"},
      {title: "Text Decoration", href: "typesetting/text-decoration.html", descript: "设置文本装饰"},
      {title: "Text Transform", href: "typesetting/text-transform.html", descript: "设置文本转换"},
      {title: "Text Overflow", href: "typesetting/text-overflow.html", descript: "设置文本溢出"},
      {title: "Vertical Align", href: "typesetting/vertical-align.html", descript: "设置文本垂直对齐"},
      {title: "White Space", href: "typesetting/white-space.html", descript: "设置空格字符"},
      {title: "Word Break", href: "typesetting/word-break.html", descript: "设置换行样式"},
    ]
  },
  {
    title: "Background",
    descript: "定义元素的背景",
    links: [
      {title: "Attachment", href: "background/attachment.html", descript: "固定背景图像"},
      {title: "Clip", href: "background/clip.html", descript: "设置背景图像的剪裁"},
      {title: "Color", href: "background/color.html", descript: "设置背景色"},
      {title: "Opacity", href: "background/opacity.html", descript: "设置背景透明度"},
      {title: "Position", href: "background/position.html", descript: "设置背景图像的位置"},
      {title: "Repeat", href: "background/repeat.html", descript: "设置背景图像的重复方式"},
      {title: "Size", href: "background/size.html", descript: "设置背景图片的大小"},
      {title: "Image", href: "background/image.html", descript: "控制背景图片显示样式"},
    ]
  },
  {
    title: "Animation",
    descript: "定义元素的动画",
    links: [
      {title: "Transition", href: "animation/transition.html", descript: "控制元素过渡动画"},
      {title: "Duration", href: "animation/duration.html", descript: "控制过渡动画的持续时间"},
      {title: "Timing", href: "animation/timing.html", descript: "控制过渡动画的计时曲线"},
      {title: "Delay", href: "animation/delay.html", descript: "设置过渡动画的延迟时间"},
      {title: "Animate", href: "animation/animate.html", descript: "设置元素的动画样式"},
    ]
  },
  {
    title: "Transform",
    descript: "定义元素变换",
    links: [
      {title: "Transition", href: "transform/transform.html", descript: "控制元素的变换行为"},
      {title: "Origin", href: "transform/origin.html", descript: "控制元素的原点变换行为"},
      {title: "Scale", href: "transform/scale.html", descript: "控制元素的缩放行为"},
      {title: "Rotate", href: "transform/rotate.html", descript: "控制元素的旋转行为"},
      {title: "Translate", href: "transform/translate.html", descript: "控制元素的平移行为"},
      {title: "Skew", href: "transform/skew.html", descript: "控制元素的倾斜行为"},
    ]
  }
]

const menuToHtml = (): string => {
  const html: Array<string> = [];
  for (const item of menu) {
    html.push(`  <div>
    <span class="text-sm md:text-base font-medium">${item.title}</span>: 
    <span class="text-xs text-gray-500">${item.descript}</span>
    <ul>`);
    
    const block: Array<string> = []
    for (const link of item.links) {
      block.push(`
      <li class="text-xs list-item list-disc ml-10 md:text-base">
        <a href="${link.href}">${link.title}</a>: 
        <span class="text-xs text-gray-500">${link.descript}</span>
      </li>`
      )
    }
    html.push(`${block.join('')}
    </ul>
  </div>`)
    if (item !== menu[menu.length - 1]) {
      html.push('\n');
    }
  }
  return html.join("")
}

window.onload = () => {
  const book = new StoryBook('Tailwind Demo');
  book.append([
    new Story("Menu")
      .code(`\
<div class="container mx-auto px-4 space-y-4 flex flex-col">
${menuToHtml()}
</div>`)
  ])
    .render();
}
