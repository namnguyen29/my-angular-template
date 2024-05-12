import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  ...tseslint.configs.recommended,
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    rules: { 'no-unused-vars': 'error', 'no-undef': 'error' }
  }
];
