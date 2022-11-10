/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: '@antfu',
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'vue/html-self-closing': 'off',
    'vue/no-deprecated-slot-attribute': 'off',
  },
}
