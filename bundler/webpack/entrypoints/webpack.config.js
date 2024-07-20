const { merge } = require('webpack-merge');

const commonConfig = require('./webpack-common.config');

module.exports = () => {
  let entries;
  let config;

  if (process.env.package === 'entrypoint') {
    entries = {
      index: {
        import: './src/script/index.js', // entrypoint js file
        dependOn: 'common' // name of depend on chunk by this chunk
      },
      'm1/index': {
        import: './src/script/m1/index.js',
        dependOn: 'common'
      },
      'm2/index': {
        import: './src/script/m2/index.js',
        dependOn: 'common'
      },
      common: './src/script/common/common.js' // this chunk may be depended on by other chunks
    };

    config = {
      optimization: {
        // create single "runtime chunk" file
        // "runtime chunk" include some common js code such as bootstrap, require
        runtimeChunk: 'single'
      }
    };

  } else if (process.env.package === 'splitthunk') {

    entries = {
      index: './src/script/index.js',
      'm1/index': './src/script/m1/index.js',
      'm2/index': './src/script/m2/index.js'
    };

    config = {
      optimization: {
        runtimeChunk: 'single',

        // split chunk into multi-files
        splitChunks: {

          cacheGroups: {
            default: false, // no "default" group

            // "common" group, group same part of all chunks into "common.xxx.js" file
            common: {
              name: 'common',
              chunks: 'all',
              minChunks: 1,
              reuseExistingChunk: true
            }
          }
        }
      }
    };
  }

  return merge(commonConfig(entries), config);
};
