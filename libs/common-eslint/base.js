module.exports = {
  "env": {
    "jest/globals": true,
  },
  "parser": "@typescript-eslint/parser",
  "extends": [
    "next",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "plugin:prettier/recommended",
  ],
  "plugins": ["@typescript-eslint"],
  "rules": {
    "import/no-default-export": "error",
    "no-console": ["error", { "allow": ["warn", "error"] }],
    "@next/next/no-img-element": "off",
    "@next/no-html-link-for-pages": "off",
    "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_", "varsIgnorePattern": "^_" }],
  },
  "overrides": [
    {
      "files": [
        "pages/**/*.{tsx,ts}",
        "jest.config.{ts,js}",
        "jest.native.config.ts",
        "jest.web.config.ts",
        "webpack.config.{ts,js}",
        "metro.config.{ts,js}",
        "next.config.{ts,js}",
      ],
      "rules": {
        "import/no-default-export": "off",
      }
    },
    {
      "files": [
        "webpack.config.{ts,js}",
        "metro.config.{ts,js}",
        "next.config.{ts,js}",
      ],
      "rules": {
        "@typescript-eslint/no-var-requires": "off",
        "no-console": "off",
      },
    }
  ],
  "ignorePatterns": [
    "node_modules/",
    "dist/",
  ],
  "globals": {
    "globalThis": false,
  },
}
