/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#29252C',
				'secondary': '#333146', // Coma en lugar de comillas invertidas
				'third': '#36485E',     // Coma en lugar de comillas invertidas
				'accent': '#9EFFA9'     // Coma en lugar de comillas invertidas
			  }
		},
	},
	plugins: [],
}
