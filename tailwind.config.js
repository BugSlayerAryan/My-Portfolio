// force rebuild
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        bolb: {
          "0%": { transform: "sacle(1)" },
          "33%": { transform: "sacle(1.2)" },
          "66%": { transform: "sacle(0.8)" },
          "100%": { transform: "sacle(1)" },
        },
      },
      animation: {
        bolb: "bolb 10s infinite",
      },
      backgroundImage: {
        'skills-gradient': 'linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%)',
      },
    },
  },
  plugins: [],
};
