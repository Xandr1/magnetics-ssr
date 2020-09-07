module.exports = {
	root: true,
	env: {
		node: true,
		browser: true,
		es6: true
	},
	extends: ['plugin:vue/essential', 'eslint:recommended'],
	parserOptions: {
		parser: 'babel-eslint'
	},
	rules: {
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-console': ['off'],
		'no-var': ['error'],
		indent: [1, 'tab'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		'no-loop-func': ['error'],
		'block-spacing': ['error', 'always'],
		camelcase: ['error'],
		eqeqeq: ['error', 'always'],
		'brace-style': [
			'error',
			'1tbs',
			{
				allowSingleLine: true
			}
		],
		'comma-style': ['error', 'last'],
		'comma-spacing': [
			'error',
			{
				before: false,
				after: true
			}
		],
		'eol-last': ['error'],
		'func-call-spacing': ['error', 'never']
	}
}
