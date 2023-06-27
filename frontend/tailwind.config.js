/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        spotifyBlack: "#121212",
        spotifyBlackSecondary: "#212121",
        spotifyGreen: "#1DB954",
        spotifyGrey: "#535353",
        customBlue: "#rgb(0, 0, 255)",
      },
    },
  },
  plugins: [],
};
