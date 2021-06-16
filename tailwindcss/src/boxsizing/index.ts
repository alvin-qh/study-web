import { Story, StoryBook } from '../common';

window.onload = () => {
  const book = new StoryBook('Box sizing', true);
  book.append([
    new Story("Size include border and padding")
      .code(`\
<div class="box-border border-red-600 h-32 w-32 p-4 border-4 bg-red-400">
  <!-- ... -->
</div>
`),
    new Story("Size exclude border and padding")
      .code(`\
<div class="box-content border-green-600 h-32 w-32 p-4 border-4 bg-green-400">
  <!-- ... -->
</div>
`)
  ])
    .render();
};
