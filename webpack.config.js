const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const loader = require('sass-loader');

module.exports = {
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, './src/index.js'),
    // print: './src/print.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(gif|svg|png|jpe?g)$/i,
        type: 'asset/resource'
        // use: [
        //   {
        //     loader: 'file-loader',
        //     options: {
        //       name: '[name].[ext]',
        //       outputPath: 'assets/images/'
        //     }
        //   }
        // ]
      },
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    port: '7000',
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      title: 'Kelechi Aligwo',
      filename: "index.html"
    }),
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    assetModuleFilename: '[name][ext]'
  },
  optimization: {
    runtimeChunk: 'single',
  },
};