const path = require('path');

const VueLoaderPlugin = require('vue-loader/lib/plugin');
const vueLoaderPlugin = new VueLoaderPlugin();

module.exports = {
  mode: 'production',

  entry: {
    'vue-quagga': path.join(__dirname, './src/index.js'),
  },

  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].js',
    libraryTarget: 'commonjs2',
  },

  plugins: [vueLoaderPlugin],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
        },
      },
    ],
  },

  devtool: 'source-map',

  optimization: {
    minimize: false,
  },
};
