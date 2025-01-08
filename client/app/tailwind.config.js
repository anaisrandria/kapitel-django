/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				beige: "rgb(242, 239, 235)",
			},
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
				hanken: ["Hanken Grotesk", "sans-serif"],
				lora: ["Lora", "serif"],
			},
			fontSize: {
				s: ["13px", "16px"],
			},
		},
	},
	plugins: [],
};

