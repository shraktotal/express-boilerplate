var isProductionEnv = process.env.NODE_ENV === "production";

module.exports = {
  "extends": "airbnb-base",
  "parser": "babel-eslint",
  "env": {
    "node": true
  },
  "rules": {
    "no-multi-str": "off",
    "import/no-commonjs": "error",
    "import/no-amd": "error",
  }
};
