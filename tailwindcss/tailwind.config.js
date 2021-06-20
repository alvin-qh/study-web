const colors = require('./tailwind/colors');
const { pluginStripes } = require('./tailwind/plugins');

require('./tailwind/colors');

module.exports = {
  purge: [
    './src/**/*.ts'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true
    },
    colors
  },
  variants: {
  },
  plugins: [
    pluginStripes
  ]
}
