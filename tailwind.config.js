module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.vue"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#14213D",
        secondary: "#FCA311",
        tersiary: "#E5E5E5",
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
