const ionic = require("@aparajita/tailwind-ionic");

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [ionic("src/theme/variables.css")],
};
