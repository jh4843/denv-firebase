module.exports = {
  // root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "google",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 8,
    project: ["tsconfig.json", "tsconfig.dev.json"],
    sourceType: "module",
  },
  ignorePatterns: [
    "/lib/**/*", // Ignore built files.
  ],
  plugins: ["@typescript-eslint", "import", "prettier"],
  rules: {
    "quote-props": "off",
    quotes: "off",
    "@typescript-eslint/quotes": "error",
    "object-curly-spacing": "off",
    indent: "off",
    "max-len": "off",
    "arrow-parens": "off",
  },
};
