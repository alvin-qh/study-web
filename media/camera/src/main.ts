import '@/style.css';

import { Video } from '@/components/video';
import { createMediaDevices, startTrack, stopTrack } from '@/libs/camera';

const $app = document.querySelector('#app')!;

const $videoWrapper = document.createElement('div');
$videoWrapper.className = 'm-camera';
$app.appendChild($videoWrapper);

const $toolPane = document.createElement('div');
$toolPane.className = 'tool-pane';
$app.appendChild($toolPane);

let $row = document.createElement('div');
$row.className = 'row';
$toolPane.appendChild($row);

const $btnStart = document.createElement('button');
$btnStart.textContent = '启动';
$btnStart.type = 'button';
$btnStart.className = 'primary';
$row.appendChild($btnStart);

$row = document.createElement('div');
$row.className = 'row';
$toolPane.appendChild($row);

const $btnStop = document.createElement('button');
$btnStop.textContent = '停止';
$btnStop.type = 'button';
$btnStop.className = 'secondary';
$row.appendChild($btnStop);

$row = document.createElement('div');
$row.className = 'row';
$toolPane.appendChild($row);

const $btnCapture = document.createElement('button');
$btnCapture.textContent = '截图';
$btnCapture.type = 'button';
$btnCapture.className = 'secondary';
$row.appendChild($btnCapture);

const video = new Video({
  autoplay: true,
  playsinline: true,
  x5VideoPlayerType: 'h5'
});
video.render($videoWrapper);

const $capture = document.createElement('img');
$capture.className = 'capture';
$app.appendChild($capture);

$btnStart.addEventListener('click', () => {
  void (async() => {
    const devices = createMediaDevices();
    const stream = await devices.getUserMedia({
      audio: false,
      video: {
        deviceId: 'default',
        facingMode: 'environment'
      }
    });
    video.start(stream);

    startTrack(stream);
  })();
});

$btnStop.addEventListener('click', () => {
  video.stop();
  stopTrack();
});

$btnCapture.addEventListener('click', () => {
  const url = video.capture();
  $capture.src = url;
});

$capture.addEventListener('dblclick', (e) => {
  const $img = e.currentTarget as HTMLImageElement;

  const $link = document.createElement('a');
  $link.href = $img.src;
  $link.download = `${new Date().getTime()}.png`;

  // 创建点击事件, 并通过创建的 a 连接触发此事件
  const event = new MouseEvent('click');
  $link.dispatchEvent(event);
});
