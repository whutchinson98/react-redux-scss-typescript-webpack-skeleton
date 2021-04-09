const path = require('path');
module.exports = {
  entry: ['./src/index.tsx', './src/sass/main.scss'],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
        {
            test: /\.scss$/,
            use: [
                {
                loader: 'style-loader',
                }, {
                loader: 'css-loader',
                }, {
                loader: 'sass-loader',
            }],
        },
        {
            test: /\.(js|ts)x?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
            },
        },
    ],
  },
  resolve: {
    // Enable webpack find ts and tsx files without an extension
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },

  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
  },
};
