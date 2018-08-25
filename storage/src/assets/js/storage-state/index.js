import "../../css/storage-state/index.less";

import querystring from "querystring";
import {runWith} from "../common/common";

runWith('storageState.index', function () {
    const $state = $('#storage-state');

    function showStorageInfo(s) {
        $state.find('.storage-size span').text(s.length);

        const data = [];
        for (const n in s) {
            if (s.hasOwnProperty(n)) {
                data.push(`${n}=${s[n] || ''}`);
            }
        }
        $state.find('.storage-content div').html(data.join('<br>'));
    }


    function showEventInfo(e) {
        $('.storage-event div').html([
            `key=${e.key}`,
            `old value=${e.oldValue}`,
            `new value=${e.newValue}`,
            `url=${e.url}`].join('<br>'));
    }

    const params = querystring.parse(location.search.substr(1));
    const storage = window[params['type']];
    if (storage) {
        showStorageInfo(storage);
        $(window).on("storage", e => {
            showStorageInfo(storage);
            showEventInfo(e.originalEvent);
        });
    }
});