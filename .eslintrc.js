module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    "no-console": "off",
    "no-restricted-globals": "off", 
    "max-len": "off",
    "linebreak-style": ["error", (process.platform === "win32" ? "windows" : "unix")],
    "global-require": "off"
  }
};
