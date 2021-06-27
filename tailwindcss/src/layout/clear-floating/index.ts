import { Story, StoryBook } from '../../common';
import image from '../../asset/image.jpg';

window.onload = () => {
  const book = new StoryBook('Clear Floating', true);
  book.append([
    new Story("Clear Left", "清除之前元素的左浮动")
      .code(`\
<!-- 
  'clear-left': 清除当前元素的左浮动，当前元素放置在之前左浮动元素的下方 
-->
<img class="float-left w-40 h-40" src="${image}">
<img class="float-right w-60 h-60" src="${image}">
<p class="clear-left">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Nam venenatis et lorem sit amet vehicula. Etiam vel 
  nibh nec nisi euismod mollis ultrices condimentum velit. 
  Proin velit libero, interdum ac rhoncus sit amet, 
  pellentesque ac turpis. Quisque ac luctus turpis, 
  vel efficitur ante. Cras convallis risus vel vehicula dapibus. 
  Donec eget neque fringilla, faucibus mi quis, porttitor magna. 
  Cras pellentesque leo est, et luctus neque rutrum eu. 
  Aliquam consequat velit sed sem posuere, vitae sollicitudin 
  mi consequat. Mauris eget ipsum sed dui rutrum fringilla. 
  Donec varius vehicula magna sit amet auctor. Ut congue 
  vehicula lectus in blandit. Vivamus suscipit eleifend turpis, 
  nec sodales sem vulputate a. Curabitur pulvinar libero viverra, 
  efficitur odio eu, finibus justo. Etiam eu vehicula felis.
</p>
`),
    new Story("Clear Right", "清除之前元素的右浮动")
      .code(`\
<!-- 
  'clear-right': 清除当前元素的右浮动，当前元素放置在之前右浮动元素的下方 
-->
<img class="float-left w-40 h-40" src="${image}">
<img class="float-right w-60 h-60" src="${image}">
<p class="clear-right">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Nam venenatis et lorem sit amet vehicula. Etiam vel 
  nibh nec nisi euismod mollis ultrices condimentum velit. 
  Proin velit libero, interdum ac rhoncus sit amet, 
  pellentesque ac turpis. Quisque ac luctus turpis, 
  vel efficitur ante. Cras convallis risus vel vehicula dapibus. 
  Donec eget neque fringilla, faucibus mi quis, porttitor magna. 
  Cras pellentesque leo est, et luctus neque rutrum eu. 
  Aliquam consequat velit sed sem posuere, vitae sollicitudin 
  mi consequat. Mauris eget ipsum sed dui rutrum fringilla. 
  Donec varius vehicula magna sit amet auctor. Ut congue 
  vehicula lectus in blandit. Vivamus suscipit eleifend turpis, 
  nec sodales sem vulputate a. Curabitur pulvinar libero viverra, 
  efficitur odio eu, finibus justo. Etiam eu vehicula felis.
</p>
`),
    new Story("Clear Both", "清除之前元素的所有浮动")
      .code(`\
<!-- 
  'clear-both': 清除当前元素的浮动，将元素放置在所有之前的浮动元素下方 
-->
<img class="float-left w-40 h-40" src="${image}">
<img class="float-right w-60 h-60" src="${image}">
<p class="clear-both">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Nam venenatis et lorem sit amet vehicula. Etiam vel 
  nibh nec nisi euismod mollis ultrices condimentum velit. 
  Proin velit libero, interdum ac rhoncus sit amet, 
  pellentesque ac turpis. Quisque ac luctus turpis, 
  vel efficitur ante. Cras convallis risus vel vehicula dapibus. 
  Donec eget neque fringilla, faucibus mi quis, porttitor magna. 
  Cras pellentesque leo est, et luctus neque rutrum eu. 
  Aliquam consequat velit sed sem posuere, vitae sollicitudin 
  mi consequat. Mauris eget ipsum sed dui rutrum fringilla. 
  Donec varius vehicula magna sit amet auctor. Ut congue 
  vehicula lectus in blandit. Vivamus suscipit eleifend turpis, 
  nec sodales sem vulputate a. Curabitur pulvinar libero viverra, 
  efficitur odio eu, finibus justo. Etiam eu vehicula felis.
</p>
`),
    new Story("Don't Clear", "不清除当前元素的浮动，相当于不增加 'clear-{left, right, both}' 类的情况")
      .code(`\
<!-- 
  'clear-none': 重置所有的清除浮动行为，即不再对浮动进行清除
-->
<img class="float-left w-40 h-40 m-2" src="${image}">
<img class="float-right w-60 h-60 m-2" src="${image}">
<p class="clear-none">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Nam venenatis et lorem sit amet vehicula. Etiam vel 
  nibh nec nisi euismod mollis ultrices condimentum velit. 
  Proin velit libero, interdum ac rhoncus sit amet, 
  pellentesque ac turpis. Quisque ac luctus turpis, 
  vel efficitur ante. Cras convallis risus vel vehicula dapibus. 
  Donec eget neque fringilla, faucibus mi quis, porttitor magna. 
  Cras pellentesque leo est, et luctus neque rutrum eu. 
  Aliquam consequat velit sed sem posuere, vitae sollicitudin 
  mi consequat. Mauris eget ipsum sed dui rutrum fringilla. 
  Donec varius vehicula magna sit amet auctor. Ut congue 
  vehicula lectus in blandit. Vivamus suscipit eleifend turpis, 
  nec sodales sem vulputate a. Curabitur pulvinar libero viverra, 
  efficitur odio eu, finibus justo. Etiam eu vehicula felis.
</p>
`),
    new Story("Responsive")
      .code(`\
<img class="float-left w-40 h-40 m-2" src="${image}">
<img class="float-right w-60 h-60 m-2" src="${image}">
<p class="clear-none md:clear-left">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Nam venenatis et lorem sit amet vehicula. Etiam vel 
  nibh nec nisi euismod mollis ultrices condimentum velit. 
  Proin velit libero, interdum ac rhoncus sit amet, 
  pellentesque ac turpis. Quisque ac luctus turpis, 
  vel efficitur ante. Cras convallis risus vel vehicula dapibus. 
  Donec eget neque fringilla, faucibus mi quis, porttitor magna. 
  Cras pellentesque leo est, et luctus neque rutrum eu. 
  Aliquam consequat velit sed sem posuere, vitae sollicitudin 
  mi consequat. Mauris eget ipsum sed dui rutrum fringilla. 
  Donec varius vehicula magna sit amet auctor. Ut congue 
  vehicula lectus in blandit. Vivamus suscipit eleifend turpis, 
  nec sodales sem vulputate a. Curabitur pulvinar libero viverra, 
  efficitur odio eu, finibus justo. Etiam eu vehicula felis.
</p>
`),
new Story("Variants", "", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  variants: {
    extend: {
      clear: ['hover', 'focus']
    }
  }
}
`),
new Story("Disabling", "", "javascript")
      .code(`\
// tailwind.config.js
  module.exports = {
    corePlugins: {
      clear: false
    }
  }
`)
  ])
    .render();
};
