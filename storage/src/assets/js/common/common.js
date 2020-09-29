import "../../css/common/common.less";

import * as OfflinePluginRuntime from 'offline-plugin/runtime';

OfflinePluginRuntime.install({
  onUpdateReady() {
    console.log('SW Event:', 'onUpdateReady');
    OfflinePluginRuntime.applyUpdate();
    location.reload();
  },
  onUpdated() {
    console.log('SW Event:', 'onUpdated');
  }
});


export function runWith(name, cb) {
  const app = document.getElementById('app');
  if (app) {
    const role = app.getAttribute('app:name');
    if (role === name) {
      cb();
    }
  }
}

export class StringBuilder {
  constructor(s) {
    this._buf = s ? [s] : [];
  }

  append(s) {
    this._buf.push(s);
    return this;
  }

  toString(separator = '') {
    return this._buf.join(separator);
  }
}
