// external
import webpack from 'webpack'

// Check array of arguments passed to webpack for prod env variable
const debug = process.argv.indexOf( '--env.prod' ) === -1 ? true : false
export const LOCAL = process.argv.indexOf( '--env.local' ) === -1 ? false : true

/**
 * Export ENVIRONMENT
 *
 * Whether or not it's production.
 *
 * @return boolean
 */
export const PRODUCTION = debug === false

export default new webpack.DefinePlugin({
  PRODUCTION    : debug === false,
  'process.env' : {
    'NODE_ENV' : (
      debug === true
      ? JSON.stringify( 'development'  )
      : JSON.stringify( 'production'  )
    )
  }
})
