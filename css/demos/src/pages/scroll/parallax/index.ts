import './index.css';

import { type Component } from '@/component/base';

const images = [
  'bg-01.jpg',
  'bg-02.jpg',
  'bg-03.jpg',
];


export default class FlipScroll implements Component {
  render($h: HTMLElement): void {
    const $wrapper = document.createElement('div');
    $wrapper.className = 'parallax';
    $wrapper.innerHTML = '<div class="scroll-container"></div>';

    const $container = $wrapper.querySelector('.scroll-container')!;

    let n = 0;

    function changeImageOrder(): void {
      let prev = n - 1;
      if (prev < 0) {
        prev = images.length - 1;
      }

      let next = n + 1;
      if (next >= images.length) {
        next = 0;
      }

      $container.innerHTML = '';

      let $div: HTMLDivElement;
      let $img: HTMLImageElement;

      $div = document.createElement('div');
      $div.className = 'item prev';
      $img = document.createElement('img');
      $img.src = `/bg/${images[next]}`;
      $div.appendChild($img);
      $container.appendChild($div);

      $div = document.createElement('div');
      $div.className = 'item cur';
      $img = document.createElement('img');
      $img.src = `/bg/${images[n]}`;
      $div.appendChild($img);
      $container.appendChild($div);

      $div = document.createElement('div');
      $div.className = 'item next';
      $img = document.createElement('img');
      $img.src = `/bg/${images[prev]}`;
      $div.appendChild($img);
      $container.appendChild($div);
    }

    changeImageOrder();

    let isAnimationend = false;

    $container.addEventListener('transitionend', () => {
      isAnimationend = false;
      $container.classList.remove('scroll-up', 'scroll-down');
      changeImageOrder();
    });

    window.addEventListener('wheel', (event: WheelEvent) => {
      console.log(isAnimationend);
      if (!event.deltaY || isAnimationend) {
        return;
      }

      isAnimationend = true;

      if (event.deltaY > 0) {
        if (++n === images.length) {
          n = 0;
        }
        $container.classList.add('scroll-down');
      } else if (event.deltaY < 0) {
        if (--n < 0) {
          n = images.length - 1;
        }
        $container.classList.add('scroll-up');
      }
    });

    $h.innerHTML = '';
    $h.appendChild($wrapper);
  }
}
