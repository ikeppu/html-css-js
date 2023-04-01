const path = require("path");
// const TerserPlugin = require("terser-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
    //path: "http://some-cdn.com/",
  },
  mode: "development",
  devServer: {
    port: 9000,
    static: {
      directory: path.resolve(__dirname, "./dist"),
    },
    devMiddleware: {
      index: "index.html",
      writeToDisk: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 3 * 1024,
          },
        },
      },
      {
        test: /\.txt/,
        type: "asset/source",
      },
      {
        test: /\.css$/,
        // use: ["style-loader", "css-loader"],
        use: ["style-laoder", "css-loader"],
      },
      {
        test: /\.scss$/,
        // use: ["style-loader", "css-loader", "sass-loader"],
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /.\.js$/,
        exclude: "/node_modules/",
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
      {
        test: /\.hbs$/,
        use: ["handlebars-loader"],
      },
    ],
  },
  // optimization: {
  //   minimizer: [
  //     new CssMinimizerPlugin(),
  //   ],
  //   minimize: true,
  // },
  plugins: [
    // new TerserPlugin(),
    // new MiniCssExtractPlugin({
    //   filename: "styles.css",
    // }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "src/index.hbs",

      title: "Hello World",
      description: "description",
    }),
  ],
};
