/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        spotifyBlack: "rgb(25, 20, 20)",
        spotifyGreen: "#1DB954",
        customBlue: "#rgb(0, 0, 255)",
      },
    },
  },
  plugins: [],
};
