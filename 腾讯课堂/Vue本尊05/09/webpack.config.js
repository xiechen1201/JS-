const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const autoprefixer = require("autoprefixer");

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    path: resolve(__dirname, "dist"),
    filename: "main.js"
  },
  devtool: "source-map",
  externals: {
    vue: "Vue"
  },
  resolve: {
    extensions: [".js", ".jsx", ".vue"]
  },
  resolveLoader: {
    modules: ["node_modules", resolve(__dirname, "./loaders")]
  },
  module: {
    rules: [
      {
        test: /\.tpl/,
        loader: "tpl-loader"
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false
            }
          }
        ]
      },
      {
        test: /\.vue$/i,
        loader: "vue-loader"
      },
      {
        test: /\.scss$/i,
        use: [
          "vue-style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  autoprefixer({
                    overrideBrowserslist: ["> 1%", "last 2 versions"]
                  })
                ]
              }
            }
          },
          "sass-loader"
        ]
      },
      {
        test: /\.css$/i,
        use: [
          "vue-style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  autoprefixer({
                    overrideBrowserslist: ["> 1%", "last 2 versions"]
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
      template: resolve(__dirname, "./public/index.html")
    })
  ]
};
