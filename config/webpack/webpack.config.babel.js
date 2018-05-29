// external
import webpack from 'webpack'
import path    from 'path'

// internal
import devServerConfig from './devServerConfig'
import plugins         from './plugins'
import { PRODUCTION }  from './environment'

// loaders
import babel  from './loaders/babel'
import css    from './loaders/css'
import fonts  from './loaders/fonts'
import images from './loaders/images'


const port = process.env.PORT || 4000

export default {
  devtool: 'cheap-module-source-map',
  entry: [
    'babel-polyfill',
    // './src/js/app.jsx',
    './src/js/app_w_redux.jsx', // if you want to use Redux
  ],
  output: {
    path: path.resolve( './dist' ),
    filename: 'index.js',
    publicPath: '/js/',
  },
  devServer : devServerConfig( port ),
  plugins   : plugins,
  module    : {
    rules : [
      babel,
      css,
      fonts,
      images,
    ],
  },
  resolve : {
    modules : [ 'node_modules' ],
    alias   : {
      scss          : path.resolve( './src/scss' ),
      '@components' : path.resolve( './src/js/components' ),
      '@src'        : path.resolve( './src' ),
      '@redux'      : path.resolve( './src/js/redux' ),
    },
    extensions : [ '.js', '.jsx' ],
  },
}
