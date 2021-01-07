const path = require('path');
const webpack = require('webpack');

const webpackConfig = require('./webpack-common.config');

// return true if 'value' argument is boolean true or string 'true'
function isTrue(value) {
  return value === true || value === 'true';
}

// return string '.debug' if "env['DEBUG']" is true or "process.env['DEBUG']" is true
// otherwise, return empty string
function isDebug(env) {
  const debug = env['DEBUG'] || process.env['DEBUG'];
  return isTrue(debug) ? '.debug' : '';
}

module.exports = env => {
  return {
    ...webpackConfig,
    plugins: [
      ...webpackConfig.plugins,

      // define provider
      // when some symbol is defined as provider, it canbe use in anywhere without 'import'
      new webpack.ProvidePlugin({

        // when 'component' symbol used in javasciprt, the specified javascript file will be imported
        component: [path.resolve(__dirname, `src/script/lib/component${isDebug(env)}.js`), 'component']
      })
    ]
  };
}
