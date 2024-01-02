import './index.css';

import { type Component } from '@/component/base';

function isRectEqual(r1: DOMRect, r2: DOMRect): boolean {
  return Math.abs(r1.x - r2.x) <= 5 && Math.abs(r1.y - r2.y) <= 5;
}

export default class Shining implements Component {
  render($h: HTMLElement): void {
    const $div = document.createElement('div');
    $div.className = 'bezier-movement';
    $div.innerHTML = `
    <canvas></canvas>
    <div class="ball"></div>`;

    $h.innerHTML = '';
    $h.appendChild($div);

    const $ball = $div.querySelector<HTMLDivElement>('.bezier-movement .ball')!;
    const $canvas = $div.querySelector('canvas')!;

    function initCanvas(): void {
      const divRect = $div.getBoundingClientRect();
      $canvas.width = divRect.width;
      $canvas.height = divRect.height;
    }
    initCanvas();

    let lastRect: DOMRect | null = null;
    const divRect = $div.getBoundingClientRect();

    const points: Array<[number, number]> = [];

    function drawTrack(): void {
      const rect = $ball.getBoundingClientRect();
      if (!lastRect || !isRectEqual(lastRect, rect)) {
        if (points.length > 300) {
          points.shift();
        }
        points.push([(rect.x - divRect.x) + (rect.width / 2), (rect.y - divRect.y) + (rect.height / 2)]);
        lastRect = rect;
      }

      const ctx = $canvas.getContext('2d')!;
      ctx.clearRect(0, 0, $canvas.width, $canvas.height);

      for (const [x, y] of points) {
        ctx.beginPath();
        ctx.strokeStyle = '#fff2';
        ctx.arc(x, y, 2, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.closePath();
      }
      window.requestAnimationFrame(drawTrack);
    }
    drawTrack();
  }
}
