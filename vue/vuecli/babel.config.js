// Vue CLI uses babel.config.js which is a new config format in Babel 7.
// Unlike.babelrc or the babel field in package.json, this config file
// does not use a file - location based resolution, and is applied consistently
// to any file under project root, including dependencies inside node_modules.
// It is recommended to always use babel.config.js instead of other formats in
// Vue CLI projects.
//
// All Vue CLI apps use @vue/babel-preset-app, which includes babel-preset-env,
// JSX support and optimized configuration for minimal bundle size overhead.
//  See its docs for details and preset options.
//
// Also see the https://cli.vuejs.org/guide/browser-compatibility.html#polyfills section in guide.
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
}
