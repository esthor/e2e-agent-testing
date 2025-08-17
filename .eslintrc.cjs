module.exports = {
	root: true,
	env: { node: true, es2023: true },
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2023,
		sourceType: 'module',
		project: false,
	},
	plugins: ['@typescript-eslint', 'prettier'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
	],
	rules: {
		'prettier/prettier': 'warn',
	},
	ignorePatterns: [
		'dist/',
		'node_modules/',
		'reports/',
		'replays/',
		'artifacts/',
		'logs/',
		'screenshots/',
		'traces/',
		'videos/',
	],
};
