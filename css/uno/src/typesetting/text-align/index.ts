import { Story, StoryBook } from '../../common';

window.onload = () => {
  const book = new StoryBook('Container', true);
  book.append([
    new Story('Align Left', '文本左对齐')
      .code(`\
<!--
  'text-left': 文本左对齐
-->
<div class="px-4 py-6 bg-purple-100">
  <p class="text-left font-flow leading-5 text-3xl text-purple-600">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Nobis fugit, enim molestiae praesentium eveniet,
    recusandae et error beatae facilis ex harum consequuntur,
    quia pariatur non. Doloribus illo, ullam blanditiis ab.
  </p>
</div>
`),
    new Story('Align Center', '文本居中对齐')
      .code(`\
<!--
  'text-center': 文本居中对齐
-->
<div class="px-4 py-6 bg-rose-100">
  <p class="text-center font-flow leading-5 text-3xl text-rose-600">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Nobis fugit, enim molestiae praesentium eveniet,
    recusandae et error beatae facilis ex harum consequuntur,
    quia pariatur non. Doloribus illo, ullam blanditiis ab.
  </p>
</div>
`),
    new Story('Align Right', '文本右对齐')
      .code(`\
<!--
  'text-right': 文本右对齐
-->
<div class="px-4 py-6 bg-green-100">
  <p class="text-right font-flow leading-5 text-3xl text-green-600">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Nobis fugit, enim molestiae praesentium eveniet,
    recusandae et error beatae facilis ex harum consequuntur,
    quia pariatur non. Doloribus illo, ullam blanditiis ab.
  </p>
</div>
`),
    new Story('Align Justify', '文本两端对齐')
      .code(`\
<!--
  'text-right': 文本两端对齐
-->
<div class="px-4 py-6 bg-yellow-100">
  <p class="text-justify font-flow leading-5 text-3xl text-yellow-600">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Nobis fugit, enim molestiae praesentium eveniet,
    recusandae et error beatae facilis ex harum consequuntur,
    quia pariatur non. Doloribus illo, ullam blanditiis ab.
  </p>
</div>
`),
    new Story('Responsive', '')
      .code(`\
<div class="px-4 py-6 bg-blue-100">
  <p class="text-left md:text-center font-flow leading-5 text-3xl text-blue-600">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Nobis fugit, enim molestiae praesentium eveniet,
    recusandae et error beatae facilis ex harum consequuntur,
    quia pariatur non. Doloribus illo, ullam blanditiis ab.
  </p>
</div>
`),
    new Story('Variants', '', 'javascript')
      .code(`\
/* tailwind.config.js */
module.exports = {
  variants: {
    extend: {
      textAlign: ['hover', 'focus']
    }
  }
`),
    new Story('Disabling', '', 'javascript')
      .code(`\
/* tailwind.config.js */
module.exports = {
  corePlugins: {
    textAlign: false,
  }
}
`)
  ])
    .render();
};
