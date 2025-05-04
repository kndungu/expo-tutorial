// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ['dist/*'],
    rules: {
      // Enforce alphabetical sorting of JSX props
      'react/jsx-sort-props': ['error', { ignoreCase: true }],
      // Enforce alphabetical sorting of object keys
      'sort-keys': ['error', 'asc', { caseSensitive: false, natural: true }],
    },
  },
]);
