import js from "@eslint/js";

export default [
  {
    ignores: ["**/*.min.js"],
  },

  js.configs.recommended,

  {
    languageOptions: {
      globals: {
        document: "readonly",
      },
    },
  },
];
