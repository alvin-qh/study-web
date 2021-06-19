import { Story, StoryBook } from '../../common';
import image from '../../asset/image.jpg';

window.onload = () => {
  const book = new StoryBook('Object Position', true);
  book.append([
    new Story("Position")
      .code(`\
<!-- Use 'object-{side}' to set the position of object -->
<div class="grid grid-cols-3 gap-4 bg-yellow-300">
  <img class="object-none object-left-top w-48 h-48" 
       src="${image}">
  <img class="object-none object-top w-48 h-48"
       src="${image}">
  <img class="object-none object-right-top w-48 h-48"
       src="${image}">
  <img class="object-none object-left w-48 h-48"
       src="${image}">
  <img class="object-none object-center w-48 h-48"
       src="${image}">
  <img class="object-none object-right w-48 h-48"
       src="${image}">
  <img class="object-none object-left-bottom w-48 h-48"
       src="${image}">
  <img class="object-none object-bottom w-48 h-48"
       src="${image}">
  <img class="object-none object-right-bottom w-48 h-48"
       src="${image}">
</div>
`),
    new Story("Responsive")
      .code(`\
<div class="bg-blue-300">
  <img class="object-none 
              object-center w-48 h-48 
              md:object-fill md:w-auto md:h-auto"
       src="${image}">
</div>
`),
    new Story("Custom", "javascript")
      .code(`\
// tailwind.config.js
// Enable or disable some object position in all 9 positions
module.exports = {
  theme: {
    objectPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
//    'left-bottom': 'left bottom',
//    'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
      'center-bottom': 'center bottom'
      'center-top': 'center top',
    }
  }
}
`),
    new Story("Variants", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  variants: {
    extend: {
      // ...
      objectPosition: ['hover', 'focus'],
    }
  }
}
`)
    , new Story("Disabling", "javascript")
      .code(`\
// tailwind.config.js
module.exports = {
  corePlugins: {
    // ...
    objectPosition: false,
  }
}
`)
  ])
    .render();
};
