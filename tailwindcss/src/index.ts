import { Story, StoryBook } from './common';

window.onload = () => {
  const book = new StoryBook('Tailwind Demo');
  book.append([
    new Story("Menu")
      .html(`\
<div class="container mx-auto px-4">
  <ul class="text-sm">
    <li class="inline-block"><a href="layout.html">Layout</a></li>
    <b class="text-gray-300">|</b>
    <li class="inline-block"><a href="layout.html">Flex layout</a></li>
  </ul>
</div>`)
  ])
  .render();
};
