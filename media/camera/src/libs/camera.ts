// 定义老旧样式的 `getUserMedia` 函数类型
type LegacyGetUserMediaFunc = (
  constraints: MediaStreamConstraints,
  successCallback: (stream: MediaStream) => void,
  errorCallback: () => void,
) => void;

/**
 * 查找各浏览器对于标准 H5 `getUserMedia` 函数的具体实现
 *
 * @returns 各浏览器 `getUserMedia` 函数的具体实现
 */
function _findGetUserMediaFunction(): LegacyGetUserMediaFunc | null {
  // `getUserMedia` 函数在不同浏览器上可能的名称
  const possibleProperties = [
    'getUserMedia',
    'webkitGetUserMedia',
    'mozGetUserMedia',
    'oGetUserMedia'
  ];

  // 在 `window.navigator` 中查找各浏览器对于标准 H5 `getUserMedia` 函数的具体实现
  for (const prop of possibleProperties) {
    const nav = (window.navigator as unknown) as Record<string, LegacyGetUserMediaFunc>;
    if (nav[prop]) {
      return nav[prop];
    }
  }
  return null;
}

/**
 * 创建 `MediaDevices` 对象
 * @returns `MediaDevices` 对象
 */
export function createMediaDevices(): MediaDevices {
  // 通过 `window.navigator` 获取 `MediaDevices` 对象
  const mediaDevices = window.navigator.mediaDevices || {};

  // 如果 `MediaDevices` 对象上不包含 `getUserMedia` 函数，则添加该函数
  if (!mediaDevices.getUserMedia) {
    mediaDevices.getUserMedia = async (constraints: MediaStreamConstraints) =>
      // 返回 `Promise<MediaStream>` 对象
      // eslint-disable-next-line no-return-await
      await new Promise((resolve, reject) => {
        const func = _findGetUserMediaFunction();
        if (!func) {
          reject(new Error('getUserMedia is not implemented in this browser'));
          return;
        }
        func.call(navigator, constraints, resolve, reject);
      });
  }
  return mediaDevices;
}

class VideoContext {
  streams?: MediaStream[];
}

// 视频流上下文对象
const _context = new VideoContext();

/**
 * 停止所有视频流
 */
export function stopTrack(): void {
  if (_context.streams) {
    _context.streams.forEach((stream) => {
      if (stream) {
        stream.getTracks().forEach((track) => { track.stop(); });
      }
    });
  }
}

/**
 * 将视频流加入到上下文中
 * @param stream 视频流对象
 */
export function startTrack(stream: MediaStream): void {
  if (_context.streams) {
    _context.streams.push(stream);
  } else {
    _context.streams = [stream];
  }
}
