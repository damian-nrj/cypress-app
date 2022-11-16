/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  plugins: ['cypress'],
  extends: ['plugin:cypress/recommended'],
  rules: {
    'cypress/no-unnecessary-waiting': 'off',
  },
};
