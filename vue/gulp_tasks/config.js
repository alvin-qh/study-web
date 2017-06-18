'use strict';

const path = require('path');

module.exports = {
    isPROD: (process.env.NODE_ENV === 'production'),
    paths: {
        source: file => path.join('asset', file || ''),
        build: file => path.join('asset/.build', file || ''),
        dest: file => path.join('www/asset', file || ''),
        bower: file => path.join('bower_components', file || ''),
        modules: file => path.join('node_modules', file || '')
    },
    cleanOptions: {
        force: true
    }
};