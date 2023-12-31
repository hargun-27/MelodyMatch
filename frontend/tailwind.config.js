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
        spotifyWhite: "#F5F5F7",
      },
      boxShadow: {
        'custom': '0px 20px 99px 30px rgba(0, 0, 0, 0.40)',
      },
    },
  },
  plugins: [],
};
