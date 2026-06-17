const config = {
	name: 'local/ameliance-base',
	files: ['**/*.{js,mjs,cjs,ts,mts,cts,tsx,jsx}'],
	rules: {
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single', { avoidEscape: true }],
		semi: ['error', 'always'],
		'no-console': ['warn'],
		'comma-dangle': [
			'error',
			{
				arrays: 'always-multiline',
				objects: 'always-multiline',
				imports: 'always-multiline',
				exports: 'always-multiline',
				functions: 'always-multiline',
			},
		],
		'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
	},
};

export default config;
