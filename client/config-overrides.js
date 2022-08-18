const {override, addBabelPlugins} = require('customize-cra')

module.exports = override(
  addBabelPlugins(
    '@babel/plugin-transform-modules-commonjs',
    '@babel/plugin-transform-react-display-name',
    '@babel/plugin-transform-react-jsx',
    '@babel/plugin-syntax-jsx'
  ),
)