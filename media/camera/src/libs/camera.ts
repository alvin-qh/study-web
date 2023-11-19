function _findGetUserMediaFunction(): ((constraints?: MediaStreamConstraints) => MediaStream) | null {
  const possibleProperties = [
    'getUserMedia',
    'webkitGetUserMedia',
    'mozGetUserMedia',
    'oGetUserMedia'
  ];

  for (const prop of possibleProperties) {
    const nav = (window.navigator as unknown) as Record<string, (constraints?: MediaStreamConstraints) => MediaStream>;
    if (nav[prop]) {
      return nav[prop];
    }
  }
  return null;
}

export function createMediaDevices(): MediaDevices {
  const mediaDevices = window.navigator.mediaDevices || {};
  if (!mediaDevices.getUserMedia) {
    mediaDevices.getUserMedia = async (constraints?: MediaStreamConstraints) => {
      return await new Promise((resolve, reject) => {
        const func = _findGetUserMediaFunction();
        if (!func) {
          reject(new Error('getUserMedia is not implemented in this browser')); return;
        }
        resolve(func.call(window.navigator, constraints));
      });
    };
  }
  return mediaDevices;
}

class VideoContext {
  streams?: MediaStream[];
}

const _context = new VideoContext();

export function stopTrack(): void {
  if (_context.streams) {
    _context.streams.forEach((stream) => {
      if (stream) {
        stream.getTracks().forEach((track) => { track.stop(); });
      }
    });
  }
}

export function startTrack(stream: MediaStream): void {
  if (_context.streams) {
    _context.streams.push(stream);
  } else {
    _context.streams = [stream];
  }
}
