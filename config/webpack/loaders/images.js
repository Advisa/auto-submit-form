export default {
  test    : /\.(jpe?g|png|gif|svg)$/i,
  loaders : [
    'file-loader',
    {
      loader : 'image-webpack-loader',
      query  : {
        mozjpeg  : {
          progressive : true,
        },
        gifsicle : {
          interlaced  : false,
        },
        optipng  : {
          optimizationLevel : 4,
        },
        pngquant : {
          quality : '75-90',
          speed   : 3,
        }
      }
    }
  ]
}
