// internal
const _root_ = require( './webpack.config.babel' )._root_

module.exports = {
  content: _root_( './public' ),
  clipboard: false,
  logLevel: 'warn',
  hot: {
    hot: true,
    logLevel: 'warn',
    reload: true,
  }
}
