// external
import HtmlWebpackPlugin from 'html-webpack-plugin'

// internal
import { PRODUCTION, LOCAL } from '../environment'

export default new HtmlWebpackPlugin({
  filename          : '../dist/index.html',
  template          : './src/templates/index.template.html',
  alwaysWriteToDisk : (PRODUCTION ? false : true),
  chunksSortMode    : 'dependency',
  PRODUCTION        : PRODUCTION,
  LOCAL             : LOCAL,
})
