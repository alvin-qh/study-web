import './index.css';

import { type Component } from '@/component/base';

export default class Shining implements Component {
  render($h: HTMLElement): void {
    const $div = document.createElement('div');
    $div.className = 'menu-3d';

    $div.innerHTML = `
    <ul>
      <li style="--i:6" data-icon="&#xf015">
        <a href="#">Home</a>
      </li>
      <li style="--i:5" data-icon="&#xf2bb">
        <a href="#">About</a>
      </li>
      <li style="--i:4" data-icon="&#xf03a">
        <a href="#">Service</a>
      </li>
      <li style="--i:3" data-icon="&#xf07c">
        <a href="#">Portfolio</a>
      </li>
      <li style="--i:2" data-icon="&#xf0c0">
        <a href="#">Our Team</a>
      </li>
      <li style="--i:1" data-icon="&#x40">
        <a href="#">Contact</a>
      </li>
    </ul>`;

    $h.innerHTML = '';
    $h.appendChild($div);
  }
}
