;
(function (global) {
    var storageState = document.getElementById('storage-state');

    function displayStorageInfo(storage) {
        var storageSize = storageState
            .getElementsByClassName('storage-size')[0]
            .getElementsByTagName('span')[0];
        storageSize.innerHTML = storage.length + '个';

        var data = [];
        for (var n in storage) {
            if (storage.hasOwnProperty(n)) {
                data.push([n, storage[n] || ''].join('='));
            }
        }
        var storageContent = storageState
            .getElementsByClassName('storage-content')[0]
            .getElementsByTagName('div')[0];
        storageContent.innerHTML = data.join('<br>');
    }

    function displayEventInfo(e) {
        var storageEvent = storageState
            .getElementsByClassName('storage-event')[0]
            .getElementsByTagName('div')[0];
        storageEvent.innerHTML = [
            'key=' + e.key,
            'old value=' + e.oldValue,
            'new value=' + e.newValue,
            'url=' + e.url
        ].join('<br>')
    }

    document.addEventListener('DOMContentLoaded', function (e) {
        var queryString = new QueryString();
        var storage = global[queryString.get('type')];
        if (storage) {
            displayStorageInfo(storage);

            window.addEventListener("storage", function (e) {
                displayStorageInfo(storage);
                displayEventInfo(e);
            });
        }
    });

})(this);