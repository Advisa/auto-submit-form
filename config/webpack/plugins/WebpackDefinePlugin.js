// external
import webpack from 'webpack'

// internal
import { PRODUCTION, LOCAL } from '../environment'

export default new webpack.DefinePlugin({
  PRODUCTION  : PRODUCTION === true,
  DEVELOPMENT : PRODUCTION === false,
  LOCAL       : LOCAL === true,
})
