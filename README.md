# eslint-config-ameliance

Shared ESLint Flat Configuration (ESLint 9+) for TypeScript, Prettier, and Perfectionist code sorting.

## Features

- **TypeScript-eslint v8** ready
- **Prettier** integration out of the box (with strict tab indentation)
- **eslint-plugin-perfectionist** configured for natural, unified sorting of imports, exports, interfaces, etc.
- Seamlessly works with ESM (`type: module`)

## Installation

Install the package:

```bash
npm install -D eslint-config-ameliance
```

Make sure your project has the required peer dependencies installed:

```bash
npm install -D eslint typescript-eslint @eslint/js
```

## Usage

In your project's root `eslint.config.mjs`:

```javascript
import amelianceConfig from "eslint-config-ameliance";

export default [
	...amelianceConfig,
	// Add your project-specific overrides here, e.g.:
	{
		rules: {
			"no-console": "warn",
		},
	},
];
```
