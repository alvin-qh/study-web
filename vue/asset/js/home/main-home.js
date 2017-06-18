const commonLib = require('../common/common-lib');

let app = new Vue({
    el: '#app',
    data: {
        title: 'Vue Demos',
        datetime: commonLib.times.nowString()
    }
});

setInterval(() => app.datetime = commonLib.times.nowString(), 1000);