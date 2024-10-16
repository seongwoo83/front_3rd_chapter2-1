import globals from 'globals'
import pluginJs from '@eslint/js'
import prettierPlugin from 'eslint-plugin-prettier'
import babelParser from '@babel/eslint-parser'

export default [
  {
    languageOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
      globals: globals.browser,
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ['@babel/preset-react'],
        },
      },
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...prettierPlugin.configs.recommended.rules,
      'prettier/prettier': 'error',
      'valid-jsdoc': 'off', // valid-jsdoc 규칙 비활성화
      'require-jsdoc': 'off', // valid-jsdoc 규칙 비활성화
    },
  },
]
