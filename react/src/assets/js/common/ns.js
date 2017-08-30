'use strict';

const global = global || window;

export default function (name, obj) {
    const parts = name.split('.');

    let ns = global;
    for (let i = 0; i < parts.length - 1; i++) {
        const part = parts[i];

        ns[part] = ns[part] || {};
        ns = ns[part];
    }
    ns[parts[parts.length - 1]] = obj;
};