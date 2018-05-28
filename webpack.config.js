var path = require('path')
var merge = require('webpack-merge')
var webpack = require('webpack')

const baseConfig = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map',
  externals: {
    'quagga': 'quagga',
    'webrtc-adapter': 'webrtc-adapter',
  }
};

let config;
if (process.env.NODE_ENV === 'production') {

  const productionConfig = merge(baseConfig, {
    devtool: '#source-map',
    plugins: (module.exports.plugins || []).concat([
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        compress: {
          warnings: false
        }
      }),
      new webpack.LoaderOptionsPlugin({
        minimize: true
      })
    ]),
  });
  config = [
    merge(productionConfig, {
      entry: path.resolve(__dirname + '/src/plugins.js'),
      output: {
        filename: 'vue-quagga.min.js',
        libraryTarget: 'window',
        library: 'Scanner'
      }
    }),
    merge(productionConfig,
      {
        entry: path.resolve(__dirname + '/src/index.js'),
        output: {
          filename: 'vue-quagga.js',
          libraryTarget: 'umd',
          library: 'Scanner',
          umdNamedDefine: true
        }
      }),
  ];
}

module.exports = config;
