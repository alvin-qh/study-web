import { each as _each } from 'lodash-es';

function _findGetUserMediaFunction() {
  const possibleProperties = [
    'getUserMedia',
    'webkitGetUserMedia',
    'mozGetUserMedia',
    'oGetUserMedia'
  ];

  for (const prop of possibleProperties) {
    if ((navigator as any)[prop]) {
      return (navigator as any)[prop];
    }
  }
  return null;
}

export function createMediaDevices() {
  const mediaDevices = navigator.mediaDevices || {};
  if (!mediaDevices.getUserMedia) {
    mediaDevices.getUserMedia = constraints => {
      const getUserMedia = _findGetUserMediaFunction();
      if (!getUserMedia) {
        return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
      }
      return new Promise((resolve, reject) => {
        getUserMedia.call(navigator, constraints, resolve, reject);
      });
    };
  }
  return mediaDevices;
}

type VideoContext = {
  streams: Array<MediaStream>;
}

const context: VideoContext = {
  streams: []
};

export function stopTrack() {
  _each(context.streams, stream => {
    if (stream) {
      _each(stream.getTracks(), track => track.stop());
    }
  });
  context.streams = [];
}

export function startTrack(stream: MediaStream) {
  context.streams.push(stream);
}
