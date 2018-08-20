import "../../css/common/common.less";
import moment from "moment";

const global = global || window;

export function ns(name, obj) {
    const parts = name.split('.');

    let ns = global;
    for (let i = 0; i < parts.length - 1; i++) {
        const part = parts[i];

        ns[part] = ns[part] || {};
        ns = ns[part];
    }
    ns[parts[parts.length - 1]] = obj;
}


const DATETIME_FORMAT = 'YYYY年MM月DD日 HH:mm:ss';

export const Times = {
    nowString() {
        return moment().format(DATETIME_FORMAT);
    }
};


export function runWith(name, cb) {
    const app = document.getElementById('app');
    if (app) {
        const role = app.getAttribute('app:name');
        if (role === name) {
            cb();
        }
    }
}