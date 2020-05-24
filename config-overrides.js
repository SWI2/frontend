const {
  addDecoratorsLegacy,
  disableEsLint,
  override,
  experimentalDecorators
} = require('customize-cra')

module.exports = override(addDecoratorsLegacy(), disableEsLint())
