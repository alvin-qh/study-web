import { Story, StoryBook } from '../../common';
import image from '../../asset/image.jpg';

window.onload = () => {
  const book = new StoryBook('Object Fit', true);
  book.append([
    new Story("Object Contain")
      .code(`\
<!-- Use 'object-contain', keep the element inside the container -->
<div class="bg-green-300">
  <img class="object-contain h-48 w-full" 
       src="${image}">
</div>
`),
    new Story("Cover")
      .code(`\
<!-- Use 'object-cover', resize element to cover the container -->
<div class="bg-indigo-300">
  <img class="object-cover h-48 w-full" 
       src="${image}">
</div>
`),
    new Story("Fill")
      .code(`\
<!-- Use 'object-fill', stretch the element to fill of the container -->
<div class="bg-blue-300">
  <img class="object-fill h-48 w-full" 
       src="${image}">
</div>
`),
    new Story("None")
      .code(`\
<!-- Use 'object-none', display the original size of element -->
<div class="bg-red-300">
  <img class="object-none h-48 w-full" 
       src="${image}">
</div>
`),
    new Story("Scale Down")
      .code(`\
<!-- Use 'object-scale-down', resize the element to fit the container -->
<div class="bg-green-300">
  <img class="object-scale-down h-48 w-full" 
       src="${image}">
</div>
`),
new Story("Responsive")
      .code(`\
<div class="bg-yellow-300">
  <img class="object-scale-down md:object-cover h-48 w-full" 
       src="${image}">
</div>
`),
new Story("Variants", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  variants: {
    extend: {
      // ...
      objectFit: ['hover', 'focus'],
    }
  }
}
`)
,new Story("Disabling", "javascript")
.code(`\
// tailwind.config.js
module.exports = {
  corePlugins: {
    // ...
    objectFit: false,
  }
}
`)
  ])
    .render();
};
