import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Box sizing', true);
  book.append([
    new Story("Size include border and padding")
      .code(`\
<div class="box-border border-red-600 border-4 h-32 w-32 p-4 bg-red-400">
  <!-- ... -->
</div>
`),
    new Story("Size exclude border and padding")
      .code(`\
<div class="box-content border-green-600 border-4 h-32 w-32 p-4 bg-green-400">
  <!-- ... -->
</div>
`),
    new Story("Responsive")
      .code(`\
<div class="box-border md:box-content border-blue-600 border-2 p-4">
  <!-- ... -->
</div>`),
    new Story("Config variants", "javascript")
      .code(`\
// wailwind.config.js
module.exports = {
  variants: {
    extend: {
      // ...
      boxSizing: ['hover', 'focus']
    }
  }
}`),
    new Story("Disable box sizing", "javascript")
      .code(`\
// wailwind.config.js
module.exports = {
  variants: {
    extend: {
      // ...
      boxSizing: false
    }
  }
}`)
  ])
    .render();
};
