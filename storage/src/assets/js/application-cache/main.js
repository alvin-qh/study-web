import "../../css/application-cache/index.less";
import "../../images/cat.png";

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
