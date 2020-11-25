module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.vue"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
    },
    extend: {
      colors: {
        blackier: "#141414",
        blacky: "#1B1B1B",
        grey: "#F3F3F3",
        greier: "#E1E1E1",
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ["responsive", "hover"],
      margin: ["responsive", "first", "last"],
      padding: ["responsive", "first", "last"],
    },
  },
  plugins: [],
};
