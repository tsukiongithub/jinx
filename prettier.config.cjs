/** @type {import("prettier").Config} */
module.exports = {
	singleAttributePerLine: true,
	tabWidth: 4,
	semi: true,
	useTabs: true,
	lineHeight: 1.5,
	printWidth: 600,
	plugins: [require.resolve("prettier-plugin-tailwindcss")],
};
