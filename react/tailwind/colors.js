const tailwindColors = require('tailwindcss/colors');

const colors = Object.assign(
  {},
  ...([].concat(
    ...Object.keys(tailwindColors)
      .map(key => {
        const newKey = key.replace(/[A-Z]/, c => `-${c.toLowerCase()}`);
        return {
          [newKey]: tailwindColors[key]
        }
      })
  ))
);

module.exports = colors;
