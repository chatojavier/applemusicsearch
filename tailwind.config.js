module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			gray: {
				DEFAULT: "#1f1f1f",
				900: "#252526",
				800: "#363636",
				700: "#3b3b3c",
				500: "#afafaf",
				200: "#ededed",
			},
			red: "#d60017",
			white: "#fff",
		},
		extend: {
			maxWidth: {
				"8/10": "80%",
			},
		},
	},
	variants: {
		extend: {
			ringColor: ["hover"],
		},
	},
	plugins: [],
};
