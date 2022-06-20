module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  plugins: ['eslint-plugin-prettier'],
  extends: ['plugin:prettier/recommended', 'airbnb-base'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {},
};
