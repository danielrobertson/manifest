module.exports = {
	plugins: ['@typescript-eslint'],
	rules: {
		'@typescript-eslint/adjacent-overload-signatures': 'error',
		'@typescript-eslint/array-type': [
			'error',
			{
				default: 'array',
			},
		],
		'@typescript-eslint/await-thenable': 'off',
		'@typescript-eslint/ban-ts-comment': [
			'error',
			{
				minimumDescriptionLength: 3,
				'ts-check': false,
				'ts-expect-error': 'allow-with-description',
				'ts-ignore': true,
				'ts-nocheck': true,
			},
		],
		'@typescript-eslint/ban-tslint-comment': 'error',
		'@typescript-eslint/ban-types': 'off',
		'@typescript-eslint/brace-style': 'off',
		'@typescript-eslint/class-literal-property-style': 'off',
		'@typescript-eslint/comma-dangle': 'off',
		'@typescript-eslint/comma-spacing': 'off',
		'@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
		'@typescript-eslint/consistent-type-assertions': [
			'error',
			{
				assertionStyle: 'as',
				objectLiteralTypeAssertions: 'allow-as-parameter',
			},
		],
		'@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
		'@typescript-eslint/consistent-type-imports': 'off',
		'@typescript-eslint/default-param-last': 'error',
		'@typescript-eslint/dot-notation': 'error',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-member-accessibility': [
			'error',
			{
				accessibility: 'no-public',
			},
		],
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/func-call-spacing': 'off',
		'@typescript-eslint/indent': 'off',
		'@typescript-eslint/keyword-spacing': 'off',
		'@typescript-eslint/lines-between-class-members': [
			'error',
			{
				exceptAfterOverload: true,
			},
		],
		'@typescript-eslint/member-delimiter-style': 'off',
		'@typescript-eslint/member-ordering': 'error',
		'@typescript-eslint/method-signature-style': 'error',
		'@typescript-eslint/naming-convention': 'off',
		'@typescript-eslint/no-array-constructor': 'error',
		'@typescript-eslint/no-base-to-string': 'error',
		'@typescript-eslint/no-confusing-non-null-assertion': 'error',
		'@typescript-eslint/no-confusing-void-expression': [
			'error',
			{
				ignoreVoidOperator: true,
			},
		],
		'@typescript-eslint/no-dupe-class-members': 'error',
		'@typescript-eslint/no-duplicate-enum-values': 'error',
		'@typescript-eslint/no-duplicate-imports': 'off',
		'@typescript-eslint/no-dynamic-delete': 'off',
		'@typescript-eslint/no-empty-function': 'off',
		'@typescript-eslint/no-empty-interface': [
			'error',
			{
				allowSingleExtends: true,
			},
		],
		'@typescript-eslint/no-explicit-any': [
			'error',
			{
				ignoreRestArgs: true,
			},
		],
		'@typescript-eslint/no-extra-non-null-assertion': 'error',
		'@typescript-eslint/no-extra-parens': 'off',
		'@typescript-eslint/no-extra-semi': 'off',
		'@typescript-eslint/no-extraneous-class': 'error',
		'@typescript-eslint/no-floating-promises': [
			'error',
			{
				ignoreIIFE: true,
				ignoreVoid: true,
			},
		],
		'@typescript-eslint/no-for-in-array': 'error',
		'@typescript-eslint/no-implicit-any-catch': 'error',
		'@typescript-eslint/no-implied-eval': 'error',
		'@typescript-eslint/no-inferrable-types': [
			'error',
			{
				ignoreParameters: true,
				ignoreProperties: true,
			},
		],
		'@typescript-eslint/no-invalid-this': 'error',
		'@typescript-eslint/no-invalid-void-type': 'off',
		'@typescript-eslint/no-loop-func': 'error',
		'@typescript-eslint/no-loss-of-precision': 'error',
		'@typescript-eslint/no-magic-numbers': 'off',
		'@typescript-eslint/no-misused-new': 'error',
		'@typescript-eslint/no-misused-promises': [
			'error',
			{
				checksConditionals: true,
			},
		],
		'@typescript-eslint/no-namespace': [
			'error',
			{
				allowDeclarations: true,
				allowDefinitionFiles: true,
			},
		],
		'@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
		'@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/no-parameter-properties': 'error',
		'@typescript-eslint/no-redeclare': 'off',
		'@typescript-eslint/no-redundant-type-constituents': 'error',
		'@typescript-eslint/no-require-imports': 'off',
		'@typescript-eslint/no-shadow': [
			'error',
			{
				ignoreOnInitialization: true,
				ignoreTypeValueShadow: true,
			},
		],
		'@typescript-eslint/no-this-alias': [
			'error',
			{
				allowDestructuring: true,
			},
		],
		'@typescript-eslint/no-throw-literal': 'error',
		'@typescript-eslint/no-type-alias': 'off',
		'@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
		'@typescript-eslint/no-unnecessary-condition': 'off',
		'@typescript-eslint/no-unnecessary-qualifier': 'error',
		'@typescript-eslint/no-unnecessary-type-arguments': 'off',
		'@typescript-eslint/no-unnecessary-type-assertion': 'error',
		'@typescript-eslint/no-unnecessary-type-constraint': 'error',
		'@typescript-eslint/no-unsafe-argument': 'error',
		'@typescript-eslint/no-unsafe-assignment': 'error',
		'@typescript-eslint/no-unsafe-call': 'error',
		'@typescript-eslint/no-unsafe-member-access': 'error',
		'@typescript-eslint/no-unsafe-return': 'error',
		'@typescript-eslint/no-unused-expressions': 'error',
		'@typescript-eslint/no-unused-vars': [
			'error',
			{
				args: 'none',
				caughtErrors: 'all',
				ignoreRestSiblings: true,
				vars: 'all',
			},
		],
		'@typescript-eslint/no-use-before-define': [
			'error',
			{
				classes: true,
				enums: true,
				functions: true,
				typedefs: true,
				variables: true,
			},
		],
		'@typescript-eslint/no-useless-constructor': 'error',
		'@typescript-eslint/no-useless-empty-export': 'off',
		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/non-nullable-type-assertion-style': 'error',
		'@typescript-eslint/object-curly-spacing': 'off',
		'@typescript-eslint/prefer-as-const': 'error',
		'@typescript-eslint/prefer-enum-initializers': 'off',
		'@typescript-eslint/prefer-for-of': 'error',
		'@typescript-eslint/prefer-function-type': 'error',
		'@typescript-eslint/prefer-includes': 'error',
		'@typescript-eslint/prefer-literal-enum-member': 'error',
		'@typescript-eslint/prefer-namespace-keyword': 'off',
		'@typescript-eslint/prefer-nullish-coalescing': 'error',
		'@typescript-eslint/prefer-optional-chain': 'error',
		'@typescript-eslint/prefer-readonly': 'off',
		'@typescript-eslint/prefer-readonly-parameter-types': 'off',
		'@typescript-eslint/prefer-reduce-type-parameter': 'error',
		'@typescript-eslint/prefer-regexp-exec': 'off',
		'@typescript-eslint/prefer-string-starts-ends-with': 'error',
		'@typescript-eslint/prefer-ts-expect-error': 'error',
		'@typescript-eslint/promise-function-async': [
			'error',
			{
				allowAny: true,
				allowedPromiseNames: ['Awaitable', 'PromiseLike', 'Thenable'],
				checkArrowFunctions: false,
			},
		],
		'@typescript-eslint/quotes': [
			'error',
			'single',
			{
				avoidEscape: true,
			},
		],
		'@typescript-eslint/require-array-sort-compare': 'off',
		'@typescript-eslint/require-await': 'error',
		'@typescript-eslint/restrict-plus-operands': [
			'error',
			{
				checkCompoundAssignments: true,
			},
		],
		'@typescript-eslint/restrict-template-expressions': 'off',
		'@typescript-eslint/return-await': ['error', 'in-try-catch'],
		'@typescript-eslint/semi': 'off',
		'@typescript-eslint/sort-type-union-intersection-members': 'error',
		'@typescript-eslint/space-before-function-paren': 'off',
		'@typescript-eslint/space-infix-ops': 'off',
		'@typescript-eslint/strict-boolean-expressions': 'off',
		'@typescript-eslint/switch-exhaustiveness-check': 'error',
		'@typescript-eslint/triple-slash-reference': [
			'error',
			{
				lib: 'never',
				path: 'never',
				types: 'never',
			},
		],
		'@typescript-eslint/type-annotation-spacing': 'off',
		'@typescript-eslint/typedef': 'off',
		'@typescript-eslint/unbound-method': [
			'off',
			{
				ignoreStatic: true,
			},
		],
		'@typescript-eslint/unified-signatures': [
			'error',
			{
				ignoreDifferentlyNamedParameters: true,
			},
		],
		'default-param-last': 'off',
		'dot-notation': 'off',
		'lines-between-class-members': 'off',
		'no-array-constructor': 'off',
		'no-dupe-class-members': 'off',
		'no-duplicate-imports': 'off',
		'no-empty-function': 'off',
		'no-implied-eval': 'off',
		'no-invalid-this': 'off',
		'no-loop-func': 'off',
		'no-loss-of-precision': 'off',
		'no-redeclare': 'off',
		'no-return-await': 'off',
		'no-shadow': 'off',
		'no-throw-literal': 'off',
		'no-undef': 'off',
		'no-unused-expressions': 'off',
		'no-unused-vars': 'off',
		'no-use-before-define': 'off',
		'no-useless-constructor': 'off',
		'no-void': 'off',
		quotes: 'off',
		'require-await': 'off',
	},
	overrides: [
		{
			files: ['*.stories.tsx'],
			rules: {
				'@typescript-eslint/consistent-type-assertions': 'off',
			},
		},
	],
};