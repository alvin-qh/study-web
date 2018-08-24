import "../../css/common/common.less";

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