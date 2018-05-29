// external
import path from 'path'

export default (port) => ({
  port               : port,
  publicPath         : '/js/',
  contentBase        : path.resolve( './dist' ),
  inline             : true,
  // host               : '0.0.0.0', // If used inside a docker container
  compress           : false,
  stats              : 'errors-only',
  historyApiFallback : true,
})
