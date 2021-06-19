import { Story, StoryBook } from '../../common';
import image from '../../asset/image.jpg';

window.onload = () => {
  const book = new StoryBook('Clear Floating', true);
  book.append([
    new Story("Clear Left")
      .code(`\
<!-- 
  Use 'clear-left', 
  put the element under the element with 'float-left' class 
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
    new Story("Clear Right")
      .code(`\
<!-- 
  Use 'clear-right', 
  put the element under the element with 'float-right' class 
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
    new Story("Clear Both")
      .code(`\
<!-- 
  Use 'clear-both', 
  put the element under the element either with 'float-left' or 'float-right' class 
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
    new Story("Don't Clear")
      .code(`\
<!-- 
  Use 'clear-none', 
  reset any clear property on element
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
new Story("Variants", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  variants: {
    extend: {
      // ...
      clear: ['hover', 'focus'],
    }
  }
}
`),
new Story("Disabling", "javascript")
      .code(`\
// tailwind.config.js
  module.exports = {
    corePlugins: {
      // ...
      clear: false,
    }
  }
`)
  ])
    .render();
};
