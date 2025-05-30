import globals from 'globals';
import importPlugin from 'eslint-plugin-import';
import pluginJs from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default [
  {
    ignores: [
      // List all folders/files that should exclude linting. Example below:
      // 'src/'
    ]
  },
  // Using the recommended config from @eslint/js.
  pluginJs.configs.recommended,
  // Using the recommended flat config from eslint-plugin-import. Required to check import path/name is correct.
  importPlugin.flatConfigs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      // For frontend js, sourceType must be "modules".
      sourceType: 'module',
      // We want the latest ECMAScript.
      ecmaVersion: 'latest',
      // Instruct ESLint to support React JSX.
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      // Define global variables for Node.js, browser, and ES2025+.
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.latest
      }
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      'jsx-a11y': jsxA11y
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      ...jsxA11y.flatConfigs.recommended.rules,

      // Basic rules. From the rules below comment out the rules you don't want.      
      semi: 'error',
      quotes: ['error', 'single'],
      'prefer-const': 'warn',
      'no-unused-vars': 'warn',
      'spaced-comment': 'warn',
      'eol-last': ['error', 'always'],
      'no-param-reassign': 'warn',
      indent: ['warn', 2, { SwitchCase: 1 }],
      'default-case': 'warn',
      'prefer-destructuring': 'warn',
      'arrow-body-style': 'warn',
      'prefer-template': 'warn',
      'camelcase': 'warn',
      'no-trailing-spaces': 'warn',
      'max-len': ['warn', { code: 250 }],
      'brace-style': 'warn',
      'no-multi-spaces': 'warn',
      'no-multiple-empty-lines': 'warn',
      'no-unneeded-ternary': ["warn", { "defaultAssignment": false }],
      'no-empty-character-class': 'warn',
      'no-nested-ternary': 'warn',
      'no-lonely-if': 'warn',
      'object-curly-newline': 'warn',
      'func-names': 'warn',
      'prefer-arrow-callback': 'warn',
      'object-shorthand': 'warn',
      'dot-notation': 'warn',
      'operator-assignment': 'warn',
      'no-console': 'warn'

      // Import-related rules. Enable below line, if you implement aliases with module-resolver.   
      // 'import/no-unresolved': [2, { ignore: ['^@'] }]
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  }
];