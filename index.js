module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    'eslint-config-airbnb-base/rules/strict',
  ].map(require.resolve),
  plugins: [
    'eslint-plugin-import',
  ],
  rules: {
    
  },
};