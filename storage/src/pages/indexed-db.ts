function checkSupport($root: Element): boolean {
  if (!window.indexedDB) {
    $root.innerHTML = `
    <div class="not-support">
      Your browser does not support IndexDB
    </div>
    `;
    return false;
  }
  return true;
}

export default (): HTMLElement => {
  const $root = document.createElement('div');
  if (!checkSupport($root)) {
    return $root;
  }

  $root.innerHTML = `
  <div class="tips hide" style="display: none">
    <span></span>
    <i class="close">
      <a href="javascript:;">x</a>
    </i>
  </div>`;

  const $tips = $root.querySelector<HTMLDivElement>('.tips')!;
  const $tipClose = $root.querySelector<HTMLAnchorElement>('.close a')!;

  $tips.addEventListener('transitionend', () => {
    if ($tips.classList.contains('hide')) {
      $tips.style.display = 'none';
    }
  });

  $tipClose.addEventListener('click', () => {
    $tips.classList.add('hide');
  });

  function showTips(message: string): void {
    $tips.querySelector('span')!.textContent = message;
    $tips.style.display = 'block';

    setTimeout(() => { $tips.classList.remove('hide'); }, 10);
  }

  const request = window.indexedDB.open('test');
  request.onerror = () => {
    showTips('Cannot use Indexed DB on this browser');
  };

  return $root;
};
