/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#3d348b",
        secondary: "#f7b801",
        primaryText: "#637381",
        secondaryText: "#8899ab",
        stroke: "#dfe4ea",
        danger: "#e83e24",
        warning: "#f18701",
        success: "#11ad4b",
        secondaryN: "#8899ab",
        dark: "#232528",
        white: "#f9fafb",

        // primary: '#3758f9',
        // secondary: '#13c296',
        // primaryText: '#637381',
        // secondaryText: '#8899a8',
        // stroke: '#dfe4ea',
        // danger: '#e83e24',
        // warning: '#f18701',
        // success: '#11ad4b',
        // dark: '#232528',
        // white: '#f18701',
      },
    },
  },
  plugins: [],
}

