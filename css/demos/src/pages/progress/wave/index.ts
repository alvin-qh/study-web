import './index.css';

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

    let mouseDown = false;

    $slide.addEventListener('mousedown', (e: MouseEvent) => {
      e.preventDefault();
      mouseDown = true;
    });

    $progressBar.addEventListener('mousemove', (e: MouseEvent) => {
      e.preventDefault();

      if (!mouseDown) {
        return;
      }

      if (e.target === $slide) {
        return;
      }

      progressValue = Math.round((e.offsetX / $progressBar.clientWidth) * 100);
      if (progressValue <= 0 || progressValue > 100) {
        return;
      }
      changeProgress(progressValue);
    });

    window.document.addEventListener('mouseup', (e: MouseEvent) => {
      e.preventDefault();
      mouseDown = false;
    });

    $h.innerHTML = '';
    $h.appendChild($div);
  }
}
