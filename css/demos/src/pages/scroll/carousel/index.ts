import './index.css';

import { type Component } from '@/component/base';

export default class Carousel implements Component {
  render($h: HTMLElement): void {
    const $div = document.createElement('div');
    $div.className = 'carousel-wrapper';

    $div.innerHTML = `
    <div class="carousel">
      <div class="carousel-list">
        <div class="carousel-item">1</div>
        <div class="carousel-item">2</div>
        <div class="carousel-item">3</div>
        <div class="carousel-item">4</div>
        <div class="carousel-item">5</div>
      </div>
      <div class="carousel-arrow left"></div>
      <div class="carousel-arrow right"></div>
      <div class="indicator">
        <span class="active"></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>`;

    $div.querySelectorAll<HTMLDivElement>('.carousel-list .carousel-item')!.forEach(item => {
      const color = `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, '0')}`;
      item.style.setProperty('--color', color);
    });

    const $carousel = $div.querySelector<HTMLDivElement>('.carousel')!;
    const $leftBtn = $carousel.querySelector('.carousel-arrow.left')!;
    const $rightBtn = $carousel.querySelector('.carousel-arrow.right')!;
    const $indicators = $carousel.querySelectorAll('.indicator span')!;

    let n = 0;

    function moveTo(newPos: number, oldPos: number): number {
      $indicators[oldPos].classList.remove('active');
      $indicators[newPos].classList.add('active');
      $carousel.style.setProperty('--n', `${newPos}`);
      return newPos;
    }

    $leftBtn.addEventListener('click', () => {
      n = moveTo(Math.max(n - 1, 0), n);
    });

    $rightBtn.addEventListener('click', () => {
      n = moveTo(Math.min(n + 1, $indicators.length - 1), n);
    });

    $indicators.forEach(($item, i) => {
      $item.addEventListener('click', () => {
        n = moveTo(i, n);
      });
    });

    $h.innerHTML = '';
    $h.appendChild($div);
  }
}
