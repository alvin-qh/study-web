import './style.css';

const $app = document.querySelector('#app')!;

$app.innerHTML = `
<div class="net-status">
</div>`;

const $netStatus = document.querySelector('.net-status')!;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const conn = (window.navigator as any).connection;

function showNetworkStatus(): void {
  $netStatus.innerHTML = '';

  // `navigator.onLine` 属性表示当前浏览器是否联网
  if (navigator.onLine) {
    $netStatus.classList.remove('offline');
  } else {
    $netStatus.classList.add('offline');
  }

  function newRow(label: string, value: string): void {
    $netStatus.innerHTML += `<div class="row">
      <span class="label">${label}</span>:
      <span class="value">${value}</span>
    </div>`;
  }

  // Connection 对象中包含了当前浏览器监测到的网络状态情况
  newRow('网络状态', navigator.onLine ? (conn.effectiveType as string) : '离线');
  newRow('延迟', navigator.onLine ? `${conn.rtt as number} ms` : '--');
  newRow('带宽', navigator.onLine ? `${conn.downlink as number} MB` : '--');
}

conn.addEventListener('change', () => { showNetworkStatus(); });

showNetworkStatus();
