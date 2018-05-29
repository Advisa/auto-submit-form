// external
import ETWP         from 'extract-text-webpack-plugin'
import autoprefixer from 'autoprefixer'

// internal
import { PRODUCTION } from './../environment'

/**
 * Depending on our environment we want to export different
 * loaders regarding all our styling.
 */
const loaders =
  PRODUCTION
    // Production is TRUE
    ?
      ETWP.extract({
        fallback : 'style-loader',
        use      : [
          {
            loader  : 'css-loader',
            options : {
              url           : false,
              importLoaders : 3
            }
          },
          'resolve-url-loader',
          {
            loader  : 'postcss-loader',
            options : {
              plugins : () => ([
                autoprefixer
              ])
            }
          },
          'sass-loader'
        ]
      })
    // Production is FALSE
    :
      [
        'style-loader',
        'css-loader',
        'resolve-url-loader',
        'sass-loader?sourceMap'
      ]

export default {
  test : /\.s?css$/,
  use  : loaders
}
