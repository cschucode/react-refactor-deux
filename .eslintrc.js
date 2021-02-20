module.exports = {
    "parser": "babel-eslint",
    "env": {
      "browser": true,
      "node": true
    },
    "extends": "airbnb",
    "rules": {
      "semi": [2, "never"],
      "camelcase": "off",
      "jsx-a11y/anchor-is-valid": [ "error", { "components": [ "Link" ], "specialLink": [ "to" ] } ],
      "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
      "max-len": [
        2,
        120,
        2
      ],
      "react/jsx-filename-extension": "off",
      "import/no-unresolved": "off",
      "import/extensions": "never",
      "react/forbid-prop-types": "off",
      "react/prefer-stateless-function": "off",
    }
};
