const colors = require("./tailwind/colors");
const { pluginStripes } = require("./tailwind/plugins");

require("./tailwind/colors");

console.log("aaaaa");

module.exports = {
  purge: [
    "./src/**/*.ts",
    "./src/**/*.tsx",
    "./src/**/*.css",
  ],
  darkMode: false, // or "media" or "class"
  theme: {
    container: {
      center: true
    },
    colors,
    extend: {
      fontFamily: {
        "source": [
          "Source Sans Pro",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji"
        ],
        "ubuntu-mono": [
          "Ubuntu Mono",
          "ui-monospace", 
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace"
        ],
        "flow": [
          "Flow"
        ]
      },
      backgroundSize: {
        "6": "6rem"
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      boxShadow: ["active", "hover"],
      transitionProperty: ["responsive", "motion-safe", "motion-reduce"],
      animation: ["hover", "focus"],
    }
  },
  plugins: [
    pluginStripes
  ]
}
