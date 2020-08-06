module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'sonarjs'],
	extends: ["plugin:@typescript-eslint/recommended"],
	rules: {
		"indent": "off",
		"@typescript-eslint/indent": ["error", "tab"],
		"camelcase": "off",
		"@typescript-eslint/camelcase": ["error", {"properties": "always"}],
		"@typescript-eslint/class-name-casing": "error",
		"@typescript-eslint/explicit-function-return-type": ["error", {
			allowHigherOrderFunctions: true,
			allowExpressions: true
		}],
		"func-call-spacing": "off",
		"@typescript-eslint/func-call-spacing": ["error"],
		"@typescript-eslint/explicit-member-accessibility": ["error", { "accessibility": "no-public" }],
		"@typescript-eslint/no-explicit-any": ["off"],
		"@typescript-eslint/no-namespace": ["off"],
		"@typescript-eslint/no-parameter-properties": ["off"],
		"linebreak-style": ["error", "unix"],
		"quotes": ["error", "single"],
		"semi": ["error", "always"],
		"comma-dangle": ["error", "always-multiline"],
		"object-curly-spacing": ["error", "always"],
		"eol-last": ["error", "always"],
		"sonarjs/cognitive-complexity": ["error", 5]
	},
	parserOptions: {
		ecmaVersion: 7,
		sourceType: "module"
	},
};
