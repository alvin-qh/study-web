import './shining.css';

import { type Component } from '@/component/base';

export default class Shining implements Component {
  render($h: HTMLElement): void {
    const $div = document.createElement('div');
    $div.className = 'shinning-border-cards';

    $div.innerHTML = `
    <div class="card">
      <div class="inner">Card-1</div>
    </div>
    <div class="card">
      <div class="inner">Card-2</div>
    </div>
    <div class="card">
      <div class="inner">Card-3</div>
    </div>
    <div class="card">
      <div class="inner">Card-4</div>
    </div>
    <div class="card">
      <div class="inner">Card-5</div>
    </div>
    <div class="card">
      <div class="inner">Card-6</div>
    </div>`;

    const $cards = $div.querySelectorAll<HTMLDivElement>('.card')!;

    $div.addEventListener('mouseover', (e: MouseEvent) => {
      $cards.forEach($card => {
        const rect = $card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        $card.style.setProperty('--x', `${x}px`);
        $card.style.setProperty('--y', `${y}px`);
      });
    });

    $h.innerHTML = '';
    $h.appendChild($div);
  }
}
