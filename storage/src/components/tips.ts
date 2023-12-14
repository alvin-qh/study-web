export class Tips {
  private readonly _$tips: HTMLElement;

  constructor() {
    const $tips = document.createElement('div');
    $tips.classList.add('tips', 'hide');
    $tips.style.display = 'none';
    $tips.innerHTML = `
    <span></span>
    <i class="close">
      <a href='#'>x</a>
    </i>`;

    $tips.addEventListener('transitionend', () => {
      if ($tips.classList.contains('hide')) {
        $tips.style.display = 'none';
      }
    });

    const $close = $tips.querySelector('.close a')!;
    $close.addEventListener('click', () => {
      $tips.classList.add('hide');
    });

    this._$tips = $tips;
  }

  show(message: string): void {
    this._$tips.querySelector('span')!.textContent = message;
    this._$tips.style.display = 'block';

    setTimeout(() => { this._$tips.classList.remove('hide'); }, 10);
  }

  render($h: HTMLElement): void {
    $h.appendChild(this._$tips);
  }
}
