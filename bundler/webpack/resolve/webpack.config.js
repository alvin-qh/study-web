const path = require('path');
const { merge } = require('webpack-merge');

const commonConfig = require('./webpack-common.config.js');

module.exports = merge(commonConfig, {
  // see also: https://webpack.js.org/configuration/resolve
  resolve: {
    // a list of directories where requests of server-relative URLs (starting with "/")
    // are resolved,
    // defaults to context configuration option. On non-Windows systems these requests
    // are resolved as an absolute path first.
    roots: [__dirname],

    // create aliases to import or require certain modules more easily
    alias: {
      common$: path.resolve(__dirname, 'src/script/lib/common.js')
      // ["@fortawesome/fontawesome-free"]: false   // disable this module
    },

    // the JSON files to use for descriptions
    descriptionFiles: ['package.json'],

    // If true, it will not allow extension-less files
    // So by default "require("./foo")" works if "./foo" has a ".js" extension,
    // but with this enabled only "require("./foo.js")" will work
    enforceExtension: false,

    // the default module extensions
    // "import "./foo.js"" or "import "../bar.css"" can be "import "./foo"" or "import "../bar""
    extensions: ['.js', '.css'],

    // the filename to be used while resolving directories
    mainFiles: ['index'],

    // the entrypoint of module
    mainFields: ['browser', 'module', 'main'],

    // enable aggressive, but unsafe, caching of modules. Passing true will cache everything
    // also can be regexp like "unsafeCache: /src\/index/"
    unsafeCache: true,

    // when enabled, webpack would prefer to resolve module requests as relative
    // requests instead of using modules from "node_modules" directories
    preferRelative: false,

    // a function which decides whether a request should be cached or not.
    // an object is passed to the function with path and request properties
    // it must return a boolean
    cachePredicate() {
      return true;
    },

    // a list of resolve restrictions to restrict the paths that a request can be resolved on
    restrictions: []
  }
});
