import { Story, StoryBook } from '../common';

window.onload = () => {
  const book = new StoryBook('Layout', true);
  book.append([
    new Story("Container")
      .html(`\
<div class="container mx-auto px-4">
    <div class="bg-red-200 h-8"></div>
</div>`)
  ])
  .render();
};
