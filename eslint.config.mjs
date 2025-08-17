import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier';

export default [
	{
		ignores: [
			'dist/**',
			'node_modules/**',
			'reports/**',
			'replays/**',
			'artifacts/**',
			'logs/**',
			'screenshots/**',
			'traces/**',
			'videos/**'
		]
	},
	{
		languageOptions: {
			sourceType: 'module',
			ecmaVersion: 2023,
			globals: {
				...globals.es2023,
				...globals.node
			}
		}
	},
	js.configs.recommended,
	...tseslint.configs.recommended,
	{
		plugins: { prettier },
		rules: {
			'prettier/prettier': 'warn'
		}
	}
];