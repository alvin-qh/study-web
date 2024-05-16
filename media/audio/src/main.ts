import './style.css';

const $app = document.querySelector('#app')!;

$app.innerHTML = `
  <div class="audio-analyzer">
    <canvas></canvas>
    <audio src="/music.mp3" controls></audio>
  </div>
`;

const $canvas = $app.querySelector<HTMLCanvasElement>('.audio-analyzer canvas')!;
const $audio = $app.querySelector<HTMLAudioElement>('.audio-analyzer audio')!;

function initCanvas(): void {
  const rect = $canvas.getBoundingClientRect();
  const ctx = $canvas.getContext('2d')!;
  ctx.canvas.width = rect.width;
  ctx.canvas.height = rect.height;
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  ctx.translate($canvas.width / 2, $canvas.height / 2);
}

initCanvas();

const R = 100.0;

function draw(data: number[] | Uint8Array): void {
  console.log(data);
  const ctx = $canvas.getContext('2d')!;
  ctx.clearRect(-$canvas.width, -$canvas.height, $canvas.width * 2, $canvas.height * 2);

  const eachRadian = 2 * Math.PI / data.length;
  const colorStep = 360 / data.length;

  for (let i = 0; i < data.length; i++) {
    const radian = eachRadian * i;

    const x1 = Math.cos(radian) * R;
    const y1 = Math.sin(radian) * R;

    const x2 = Math.cos(radian) * (R + Math.min(Math.max(data[i], 1), 255));
    const y2 = Math.sin(radian) * (R + Math.min(Math.max(data[i], 1), 255));

    ctx.beginPath();

    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);

    ctx.strokeStyle = `hsl(${colorStep * i}, 100%, 50%)`;
    ctx.stroke();
  }
}

$audio.addEventListener('play', () => {
  const audioCtx = new AudioContext();

  const analyser = audioCtx.createAnalyser();
  analyser.fftSize = 512;

  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);

  const source = audioCtx.createMediaElementSource($audio);
  source.connect(analyser);
  analyser.connect(audioCtx.destination);

  function update(): void {
    analyser.getByteFrequencyData(dataArray);
    draw(dataArray.subarray(0, 180));
    window.requestAnimationFrame(update);
  }
  window.requestAnimationFrame(update);
});
