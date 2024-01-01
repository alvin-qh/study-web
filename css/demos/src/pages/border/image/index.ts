import './index.css';

import { type Component } from '@/component/base';

export default class Shining implements Component {
  render($h: HTMLElement): void {
    const $div = document.createElement('div');
    $div.className = 'image-border';

    $div.innerHTML = `
    <div class="border-frame">
      <p>Three rings for the Eleven-kings under the sky,</p>
      <p>Seven for the Dwarf-lords in their halls of stone,</p>
      <p>Nine for Mortal Men doomed to die,</p>
      <p>One for the Dark Lord on his dark throne,</p>
      <p>In the Land of Mordor, where the shadows lie.</p>
      <p>One Ring to rule them all, One Ring to find them,</p>
      <p>One Ring to bring them all, and in the darkness bind them.</p>
      <p>In the Land of Mordor, where the shadows lie.</p>
    </div>`;
    $h.appendChild($div);
  }
}
