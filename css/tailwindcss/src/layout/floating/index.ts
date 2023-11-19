import image from '../../asset/image.jpg';
import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Floating', true);
  book.append([
    new Story('Float Right', '将元素浮动到父容器的右侧')
      .code(`\
<!--
  'float-right': 设置向右浮动
-->
<img class="float-right w-28 h-28 m-1"
     src="${image}">
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem
  sit amet vehicula. Etiam vel nibh nec nisi euismod mollis ultrices condimentum
  velit. Proin velit libero, interdum ac rhoncus sit amet, pellentesque ac turpis.
  Quisque ac luctus turpis, vel efficitur ante. Cras convallis risus vel vehicula
  dapibus. Donec eget neque fringilla, faucibus mi quis, porttitor magna. Cras
  pellentesque leo est, et luctus neque rutrum eu. Aliquam consequat velit sed
  sem posuere, vitae sollicitudin mi consequat. Mauris eget ipsum sed dui rutrum
  fringilla. Donec varius vehicula magna sit amet auctor. Ut congue vehicula
  lectus in blandit. Vivamus suscipit eleifend turpis, nec sodales sem vulputate a.
  Curabitur pulvinar libero viverra, efficitur odio eu, finibus justo.
  Etiam eu vehicula felis.
</p>
`),
    new Story('Float Left', '将元素浮动到父容器的左侧')
      .code(`\
<!--
  'float-left': 设置向左浮动
-->
<img class="float-left w-28 h-28 m-1"
     src="${image}">
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem
  sit amet vehicula. Etiam vel nibh nec nisi euismod mollis ultrices condimentum
  velit. Proin velit libero, interdum ac rhoncus sit amet, pellentesque ac turpis.
  Quisque ac luctus turpis, vel efficitur ante. Cras convallis risus vel vehicula
  dapibus. Donec eget neque fringilla, faucibus mi quis, porttitor magna. Cras
  pellentesque leo est, et luctus neque rutrum eu. Aliquam consequat velit sed
  sem posuere, vitae sollicitudin mi consequat. Mauris eget ipsum sed dui rutrum
  fringilla. Donec varius vehicula magna sit amet auctor. Ut congue vehicula
  lectus in blandit. Vivamus suscipit eleifend turpis, nec sodales sem vulputate a.
  Curabitur pulvinar libero viverra, efficitur odio eu, finibus justo.
  Etiam eu vehicula felis.
</p>
`),
    new Story('No Float', '不浮动')
      .code(`\
<!--
  'float-none': 设置元素不浮动
-->
<img class="float-none w-28 h-28 m-1"
     src="${image}">
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem
  sit amet vehicula. Etiam vel nibh nec nisi euismod mollis ultrices condimentum
  velit. Proin velit libero, interdum ac rhoncus sit amet, pellentesque ac turpis.
  Quisque ac luctus turpis, vel efficitur ante. Cras convallis risus vel vehicula
  dapibus. Donec eget neque fringilla, faucibus mi quis, porttitor magna. Cras
  pellentesque leo est, et luctus neque rutrum eu. Aliquam consequat velit sed
  sem posuere, vitae sollicitudin mi consequat. Mauris eget ipsum sed dui rutrum
  fringilla. Donec varius vehicula magna sit amet auctor. Ut congue vehicula
  lectus in blandit. Vivamus suscipit eleifend turpis, nec sodales sem vulputate a.
  Curabitur pulvinar libero viverra, efficitur odio eu, finibus justo.
  Etiam eu vehicula felis.
</p>
`),
    new Story('Responsive')
      .code(`\
<img class="float-none md:float-left w-28 h-28 m-1"
     src="${image}">
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem
  sit amet vehicula. Etiam vel nibh nec nisi euismod mollis ultrices condimentum
  velit. Proin velit libero, interdum ac rhoncus sit amet, pellentesque ac turpis.
  Quisque ac luctus turpis, vel efficitur ante. Cras convallis risus vel vehicula
  dapibus. Donec eget neque fringilla, faucibus mi quis, porttitor magna. Cras
  pellentesque leo est, et luctus neque rutrum eu. Aliquam consequat velit sed
  sem posuere, vitae sollicitudin mi consequat. Mauris eget ipsum sed dui rutrum
  fringilla. Donec varius vehicula magna sit amet auctor. Ut congue vehicula
  lectus in blandit. Vivamus suscipit eleifend turpis, nec sodales sem vulputate a.
  Curabitur pulvinar libero viverra, efficitur odio eu, finibus justo.
  Etiam eu vehicula felis.
</p>
`)
  ])
    .render();
};
