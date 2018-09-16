module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings"
  ],
  parserOptions: {
    ecmaVersion: 7,
    sourceType: "module"
  },
  env: {
    browser: true,
    node: true,
    mocha: true,
    jquery: true
  },
  rules: {
    "no-console": 1,
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "single"],
    semi: ["error", "always"]
  }
};
