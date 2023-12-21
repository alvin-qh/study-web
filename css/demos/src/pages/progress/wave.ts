import './wave.css';

import { type Component } from '@/component/base';

export default class WaveProgress implements Component {
  render($h: HTMLElement): void {
    const $div = document.createElement('div');
    $div.className = 'wave-progress';

    $div.innerHTML = `
    <div class="ring"></div>
    <div class="progress-bar">
      <div class="value"></div>
      <div class="slide"></div>
    </div>`;

    const $progressBar = $div.querySelector<HTMLElement>('.progress-bar')!;
    const $slide = $progressBar.querySelector<HTMLElement>('.slide')!;

    function changeProgress(percent: number): void {
      $div.style.setProperty('--percent', `${percent}%`);
    }

    let progressValue = 0;
    changeProgress(progressValue);

    let oldX = 0;
    $slide.addEventListener('mousemove', (e: MouseEvent) => {
      e.preventDefault();

      if (e.buttons === 0) {
        return;
      }
      if (e.pageX < oldX) {
        progressValue = Math.max(0, progressValue - 1);
      } else if (e.pageX > oldX) {
        progressValue = Math.min(progressValue + 1, 100);
      }
      changeProgress(progressValue);

      oldX = e.pageX;
    });

    $h.innerHTML = '';
    $h.appendChild($div);
  }
}
