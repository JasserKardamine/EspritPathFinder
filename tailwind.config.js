/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1086b9",
        secondary: "#6ecefa",
        'secondary-hover': "#5ab8e8",
        background: "#fafbfd",
      },
      borderRadius: {
        card: "5px",
      },
      boxShadow: {
        card: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], 
      },
    },
  },
  plugins: [],
}
