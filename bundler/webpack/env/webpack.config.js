const path = require('path');
const { merge } = require('webpack-merge');
const webpack = require('webpack');

const commonConfig = require('./webpack-common.config');

// return true if "value" argument is boolean true or string "true"
function isTrue(value) {
  return value === true || value === 'true';
}

// return string ".debug" if "env["DEBUG"]" is true or "process.env["DEBUG"]" is true
// otherwise, return empty string
function isDebug(env) {
  const debug = env['DEBUG'] || process.env['DEBUG'];
  return isTrue(debug) ? '.debug' : '';
}

module.exports = env => {
  return merge(commonConfig, {
    entry: {
      index: './src/script/index.js'
    },
    plugins: [
      // define provider
      // when some symbol is defined as provider, it can be use in anywhere without "import"
      new webpack.ProvidePlugin({
        // when "component" symbol used in javascript, the specified javascript file will be imported
        component: [path.resolve(__dirname, `src/script/lib/component${isDebug(env)}.js`), 'component']
      })
    ]
  });
};
