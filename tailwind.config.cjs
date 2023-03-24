/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			transitionDelay: {
				600: "600ms",
				800: "800ms",
				1200: "1200ms",
				1400: "1400ms",
				1600: "1600ms",
				1700: "1700ms",
				1800: "1800ms",
				1900: "1900ms",
				2000: "2000ms",
			},
			backgroundImage: {
				heroImage: "url('/hero.jpg')",
			},
			fontFamily: {
				poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
				raleway: ["Raleway", ...defaultTheme.fontFamily.mono],
			},
			colors: {
				blue: "#82AAE3",
				teal: "#91D8E4",
				sky: "#BFEAF5",
				cold: "#EAFDFC",
			},
			container: {
				padding: {
					DEFAULT: "1rem",
					sm: "2rem",
					lg: "4rem",
					xl: "5rem",
					"2xl": "6rem",
				},
			},
			transitionProperty: {
				zIndex: "z-index",
			},
		},
	},
	plugins: [],
};
