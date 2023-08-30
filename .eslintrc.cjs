module.exports = {
  root: true,
  env: {
    node: true,
  },
  parserOptions: {
    project: './tsconfig.json',
  },
  ignorePatterns: ['*.cjs'],
  extends: ['birbcore'],
};
