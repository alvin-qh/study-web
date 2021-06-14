import { Story, StoryBook } from './common';

window.onload = () => {
  const book = new StoryBook('Tailwind Demo');
  book.append([
    new Story("Menu")
      .html(`
<div class="container mx-auto px-4">
  <ul class="list-disc">
    <li><a href="#">Layout</a></li>
  </ul>
</div>
      `)
  ])
  .render();
};
