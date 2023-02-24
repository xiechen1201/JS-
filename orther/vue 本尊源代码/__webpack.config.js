const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const VueLoaderPlugin = require('vue-loader/lib/plugin');
const { VueLoaderPlugin } = require('vue-loader');
const autoprefixer = require('autoprefixer');

/**
 * 2.6 -> vue-loader   npm i vue-loader@15.4.1 -D
 * 3   -> vue-loader   npm i vue-loader@16.5.0 -D
 */

/**
 * 1、webpack各种依赖之间的版本兼容问题非常大
 * 2、webpack性能优化是很困难
 * 3、复杂配置的上手很困难
 */

/**
 * sass less -> sass sass-loader
 * postcss postcss-loader -> autoprefixer
 * css-loader: 模块化解析
 * vue-style-loader
 */

const _ = './47.vue/';

module.exports = {
  mode: 'development',
  entry: _ + 'src/main.js',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  externals: {
    'vue': 'Vue'
  },
  // resolve: {
  //   alias: {
  //     'vue$': 'vue/dist/vue.esm.js'
  //   }
  // },
  resolve: {
    extensions: ['.js', '.jsx', '.vue']
  },
  devtool: 'source-map',
  // resolveLoader: {
  //   modules: [
  //     'node_modules',
  //     resolve(__dirname, './24.vue/loaders')
  //   ]
  // },
  module: {
    rules: [
      // {
      //   test: /\.tpl$/,
      //   loader: 'tpl-loader',
      //   options: {
      //     consoleLog: false
      //   }
      // },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false
            }
          }
        ]
      },
      {
        test: /\.vue$/i,
        loader: 'vue-loader'
      },
      {
        test: /\.scss$/i,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  autoprefixer({
                    overrideBrowserslist: [
                      "> 1%",
                      "last 2 versions"
                    ]
                  })
                ]
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.css$/i,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  autoprefixer({
                    overrideBrowserslist: [
                      "> 1%",
                      "last 2 versions"
                    ]
                  })
                ]
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, _ + 'public/index.html')
    })
  ]
}