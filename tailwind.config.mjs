/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				abril: ["Abril", "serif"],
				lora: ["Lora", "serif"],
				myriad: ["MyriadPro", "sans-serif"],
				lovelyHome: ["LovelyHome", "sans-serif"],
			},
			fontSize: {
				"2xs": "0.625rem",
			},
			colors: {
				"old-cream": "#efebe0", // unused
				"cream": "#edeec9", // unused
				"cornsilk": "#fff3d6", // unused
				"cosmic-latte": "#fff9eb", // unused
				"onyx": "#313533",
				"bittersweet": "#ee6352",
				"coral-pink": "#f28b7d", // bittersweet-tint
				"cambridge-blue": "#77bfa3",
			},
			listStyleImage: {
				"checkmark-sm": "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" width=\"12\" height=\"12\" stroke-width=\"2\"> <path d=\"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0\"></path> <path d=\"M9 12l2 2l4 -4\"></path></svg>')",
				"checkmark-md": "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" width=\"16\" height=\"16\" stroke-width=\"2\"> <path d=\"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0\"></path> <path d=\"M9 12l2 2l4 -4\"></path></svg>')",
			},
		},
	},
	plugins: [],
}
