import { Story, StoryBook } from './common';

const menu = [
  {
    title: "Layout",
    descript: "定义基本的容器布局",
    links: [
      {title: "Container", href: "layout/container.html", descript: "设置容器的固定宽度，是否居中"},
      {title: "Box sizing", href: "layout/boxsizing.html", descript: "设置容器的盒模型，是否计算边框和 padding"},
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
  }
]

const menuToHtml = (): string => {
  const html: Array<string> = [];
  for (const item of menu) {
    html.push(`    <div>
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
};
