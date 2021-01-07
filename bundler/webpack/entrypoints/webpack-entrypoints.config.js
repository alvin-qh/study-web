const webpackConfig = require('./webpack-common.config');

const entries = {
  'index': {
    import: './src/script/index.js',    // entrypoint js file
    dependOn: 'common'    // name of depend on chunk by this chunk
  },
  'm1/index': {
    import: './src/script/m1/index.js',
    dependOn: 'common'
  },
  'm2/index': {
    import: './src/script/m2/index.js',
    dependOn: 'common'
  },
  'common': './src/script/common/common.js'   // this chunk may be depended on by other chunks
};

module.exports = {
  ...webpackConfig(entries),
  optimization: {
    runtimeChunk: 'single'    // create single 'runtime chunk' file
                              // 'runtime chunk' include some common js code such as bootstrap, require
  }
};
