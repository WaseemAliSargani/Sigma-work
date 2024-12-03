// tailwind.config.js

module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      spacing: (() => {
        const spacingValues = {};
        for (let i = 1; i <= 10000; i++) {
          spacingValues[`${i}`] = `${i}px`;
        }
        return spacingValues;
      })(),
      // You can extend other properties as needed
      borderRadius: (() => {
        const borderRadiusValues = {};
        for (let i = 1; i <= 1000; i++) {
          borderRadiusValues[`${i}`] = `${i}px`;
        }
        return borderRadiusValues;
      })(),
    },
  },
  plugins: [],
};
