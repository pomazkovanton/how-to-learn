module.exports = {
  extends: ["stylelint-config-standard",
    "stylelint-config-rational-order",
    "stylelint-prettier/recommended"],
  plugins: ["stylelint-order"],
  rules: {
    "prettier/prettier": true,
    'at-rule-no-unknown': null,
  }
};
