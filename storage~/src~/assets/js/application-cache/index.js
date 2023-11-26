import '../../css/application-cache/index.less';
import 'bootstrap';

import hljs from 'highlight.js';
import $ from 'jquery';

import { runWith } from '../common/common';

const jsCode = `// Install offline plugin Service Work
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
});`;

const androidCode = `// Enable app cache on android
wv.getSettings().setAppCacheEnabled(true);
wv.getSettings().setAppCachePath("/app/path");
wv.getSettings().setCacheMode(WebSettings.LOAD_CACHE_ELSE_NETWORK);`;

hljs.initHighlightingOnLoad();

function showCode(selector, code) {
  $(selector).each((n, elem) => {
    $(elem).text(code);
    hljs.highlightBlock(elem);
  });
}

function showTime() {
  function drawBoxes($elem, n) {
    $elem.empty();

    for (let i = 0; i < n - 1; i++) {
      $elem.append('<div/>');
    }
    const $div = $('<div style="opacity: .8"/>');
    $elem.append($div);
  }

  const now = new Date();
  drawBoxes($('.hours'), now.getHours());
  drawBoxes($('.minutes'), now.getMinutes());
  drawBoxes($('.seconds'), now.getSeconds());
}

runWith('appcache.index', function () {
  showCode('.hljs.javascript', jsCode);
  showCode('.hljs.java', androidCode);

  showTime();
  setInterval(() => showTime(), 1000);
});
