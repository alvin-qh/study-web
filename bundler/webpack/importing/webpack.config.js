const commonConfig = require("./webpack-common.config.js");
const { merge } = require("webpack-merge");

const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = merge(commonConfig, {
  entry: {
    "index": "./src/script/index.js"
  },
  plugins: [

    // plugin to analogize bundle composition
    new BundleAnalyzerPlugin({
      analyzerMode: "static",   // report saved as "html" file, also can be "server", "static", "json" or "disabled"
      reportFilename: "../bundle-report.html",    // report file name ("analyzerMode" must be "static")
      openAnalyzer: false,      // open report file
      generateStatsFile: true,  // create a statistics file, which is a json file that holds the metadata of the analysis results
      statsFilename: "../stats.json"  // name of statistics file ("generateStatsFile" must be true)
    })
  ],
  optimization: {
    runtimeChunk: "single",

    // tells webpack which algorithm to use when choosing module ids
    // set to "false" (default value) tells webpack that none of built-in algorithms should be used
    //    "natural": numeric ids in order of usage.
    //    "named": readable ids for better debugging.
    //    "deterministic": module names are hashed into small numeric values.
    //    "size": numeric ids focused on minimal initial download size.
    moduleIds: "deterministic",

    splitChunks: {
      minChunks: 1,     // the minimum times must a module be shared among chunks before splitting
      minSize: 1,       // minimum size, in bytes, for a chunk to be generated

      cacheGroups: {
        default: false,       // do not generate default group

        // "common" group
        common: {
          chunks: "initial",  // this group for only statically imported module
          name: "common",     // chunk name of this group
          reuseExistingChunk: true   // this group can be reused
        },

        // "async" group
        async: {
          test: /[\\/]node_modules[\\/]/,   // select module from "**/node_modules/" folder
          chunks: "async",  // this group for only synchronized imported module
          name: "async",    // chunk name of this group
          reuseExistingChunk: true  // this group can be reused
        }
      }
    }
  }
});
