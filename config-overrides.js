const path = require("path")
const { override, addWebpackAlias } = require("customize-cra")

module.exports = override(
  // add an alias for the external local module
  addWebpackAlias({
    "@flux-layout": path.resolve(__dirname, "./src/flux/flux-layout/src")
  })
);