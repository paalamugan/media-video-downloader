module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix'],
  '**/*.ts?(x)': () => 'pnpm type-check',
  '*.{json,yaml.md}': ['prettier --write'],
};
