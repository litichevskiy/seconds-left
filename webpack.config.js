const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const NODE_ENV = process.env.NODE_ENV || "development";
const IS_PRODUCTION = NODE_ENV === "production";

module.exports = [
  {
    entry: ['./src/js/sw.js'],
    output: {
      path: path.resolve(__dirname, './dist/js'),
      filename: 'sw.js',
    },
    watch: !IS_PRODUCTION,
    plugins: [],
  },
  {
    entry: ['./src/js/index.js', './src/style/index.css'],
    output: {
      path: path.resolve(__dirname, './dist/js'),
      filename: 'bundle.js',
    },
    resolve: {
        extensions: [' ', '.js'],
    },
    plugins: [
      new ExtractTextPlugin('../css/bundle.css'),
    ],
    devtool: IS_PRODUCTION ? 'none' : 'source-map',
    watch: !IS_PRODUCTION,
    module: {
      rules: [
        {
          test: /\.(png|jp(e*)g|svg)$/,
          exclude: /\/node_modules\//,
          use: [{
              loader: 'url-loader',
          }]
        },
        {
          exclude: /\/node_modules\//,
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            use: [
              {
                loader: 'css-loader',
                options: {
                  sourceMap: !IS_PRODUCTION ,
                  minimize:  IS_PRODUCTION,
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  plugins: [
                    autoprefixer({
                      browsers:['last 5 version']
                    })
                  ],
                  sourceMap: !IS_PRODUCTION
                }
              },
            ]
          })
        }
      ]
    }
  }
];

if( IS_PRODUCTION ) {
  module.exports.forEach( item => {
    item.plugins.push(
      new UglifyJsPlugin({
          uglifyOptions:{
              minimize: true
          }
      })
    )
  });
};