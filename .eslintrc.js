module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/jsx-runtime",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "@typescript-eslint", "prettier"],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "import/prefer-default-export": 0,
    "prettier/prettier": "error",
    "react/jsx-filename-extension": [1, { extensions: [".jsx", ".tsx"] }],
    "@typescript-eslint/no-unused-vars": [
      "error",
      { varsIgnorePattern: "^_", argsIgnorePattern: "^_" },
    ],
    "no-use-before-define": "off",
    "no-shadow": "off",
    "func-names": ["error", "always", { generators: "never" }],
    "react/prop-types": 0,
    "react/require-default-props": 0,
    "react/jsx-props-no-spreading": 0,
    "no-underscore-dangle": 0,
    "no-nested-ternary": "off",
    "react/jsx-wrap-multilines": [
      "error",
      { declaration: false, assignment: false },
    ],
    // NOTE: https://github.com/import-js/eslint-plugin-import/issues/1174
    "import/no-extraneous-dependencies": 0,
  },
  overrides: [
    {
      files: ["./*.js", "apps/*/*.js", "packages/*/*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": 0,
      },
    },
    {
      files: ["**/store/**/*", "packages/helpers/**/*"],
      rules: {
        // "func-names": 0,
      },
    },
  ],
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
  ignorePatterns: ["**/dist/*"],
};
