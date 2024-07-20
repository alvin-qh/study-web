import tailwindColors from 'tailwindcss/colors';

export default Object.assign(
  ...([].concat(
    ...(Object.keys(tailwindColors)
      .map(key => {
        const newKey = key.replace(/[A-Z]/, c => `-${c.toLowerCase()}`);
        return {
          [newKey]: tailwindColors[key]
        };
      })
    )
  ))
);
