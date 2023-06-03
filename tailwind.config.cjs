/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [{coffee: {
			...require("daisyui/src/colors/themes")["[data-theme=coffee]"],
			"base-content": "#D3D3D3"
		}}, "lofi", "garden"],
	}
}
