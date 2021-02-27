module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.vue"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#FCA311",
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
