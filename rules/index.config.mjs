import amelianceBaseConfig from './ameliance-base.config.mjs';
import amelianceTypescriptConfig from './ameliance-typescript.config.mjs';
import eslintPluginPerfectionistConfig from './eslint-plugin-perfectionist.config.mjs';

/** @type {import('eslint').Linter.Config[]} */
const localEslintConfigs = [
	eslintPluginPerfectionistConfig,
	amelianceBaseConfig,
	amelianceTypescriptConfig,
];

export default localEslintConfigs;
