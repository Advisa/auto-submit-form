// internal
import { PRODUCTION }            from '../environment'
import HtmlWebpackHarddiskPlugin from './HtmlWebpackHarddiskPlugin'
import HtmlWebpackPlugin         from './HtmlWebpackPlugin'
import WebpackDefinePlugin       from './WebpackDefinePlugin'
import ExtractTextWebpackPlugin  from './ExtractTextWebpackPlugin'


const plugins = [
  HtmlWebpackPlugin,
  ExtractTextWebpackPlugin,
]

PRODUCTION
  ? plugins.push(
    ...[

    ]
  )
  : plugins.push(
    ...[
      HtmlWebpackHarddiskPlugin,
      WebpackDefinePlugin,
    ]
  )

export default plugins
