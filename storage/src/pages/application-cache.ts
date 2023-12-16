// eslint-disable-next-line import/no-unresolved
import { registerSW } from 'virtual:pwa-register';

if ('serviceWorker' in navigator) {
  registerSW();
}

function showTime($root: HTMLElement): void {
  function drawBoxes($elem: HTMLElement, n: number): void {
    $elem.innerHTML = '';

    for (let i = 0; i < n - 1; i++) {
      const $box = document.createElement('div');
      $elem.appendChild($box);
    }

    const $box = document.createElement('div');
    $box.style.opacity = '0.7';
    $elem.append($box);

    const $timer = document.createElement('span');
    $timer.innerText = `${n}`;
    $elem.append($timer);
  }

  const now = new Date();
  drawBoxes($root.querySelector('.hours')!, now.getHours());
  drawBoxes($root.querySelector('.minutes')!, now.getMinutes());
  drawBoxes($root.querySelector('.seconds')!, now.getSeconds());
}

export default (): HTMLElement => {
  const $main = document.createElement('div');
  $main.className = 'container';

  const $row = document.createElement('div');
  $row.className = 'timer-ticket';

  $row.innerHTML = `
  <div class="hours"></div>
  <div class="minutes"></div>
  <div class="seconds"></div>`;
  $main.appendChild($row);

  showTime($row);
  setInterval(() => { showTime($row); }, 1000);

  return $main;
};
