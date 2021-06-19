import { Story, StoryBook } from './common';

const menu = [
  {
    title: "Layout",
    links: [
      {title: "Container", href: "layout/container.html"},
      {title: "Box sizing", href: "layout/boxsizing.html"},
      {title: "Display", href: "layout/display.html"},
      {title: "Floating", href: "layout/floating.html"},
      {title: "Clear Floating", href: "layout/clear-floating.html"},
      {title: "Object Fit", href: "layout/object-fit.html"},
      {title: "Object Position", href: "layout/object-position.html"},
    ]
  }
]

const menuToHtml = (): string => {
  const html: Array<string> = [];
  for (const item of menu) {
    html.push('  <div>');
    html.push(`\n    <h3 class="text-sm md:text-base font-medium">${item.title}</h3>`);
    
    const block: Array<string> = []
    for (const link of item.links) {
      block.push(`\n    <li class="inline-block text-xs md:text-base"><a href="${link.href}">${link.title}</a></li>`)
    }
    html.push(block.join(`\n    <b class="text-gray-300">|</b>`))
    html.push(`\n  </div>`)
  }
  return html.join("")
}

window.onload = () => {
  const book = new StoryBook('Tailwind Demo');
  book.append([
    new Story("Menu")
      .code(`\
<div class="container mx-auto px-4">
${menuToHtml()}
</div>`)
  ])
    .render();
};
