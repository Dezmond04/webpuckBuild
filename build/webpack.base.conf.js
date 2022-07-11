const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

const PATHS = {
  src: path.join(__dirname, "../src"),
  dist: path.join(__dirname, "../dist"),
  assets: "assets/",
};

module.exports = {
  externals: {
    paths: PATHS,
  },
  entry: {
    app: `${PATHS.src}/js`,
  },

  output: {
    filename: `${PATHS.assets}js/[name].js`,
    path: PATHS.dist,
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: "/node_modules/",
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loader: {
            scss: "vue-style-loader!css-loader!sass-loader",
          },
        },
      },
      {
        // Fonts
        test: /\.(woff|woff2|ttf|eot)$/,
        type: 'asset/resource',
        generator: {
        filename: `${PATHS.assets}fonts/[name][ext][query]`,
      },
      },
      {
        test: /\.(jpeg|jpg|gif|svg|png|ico)$/,
        // type: 'asset/inline',
        type: 'asset/resource',
        generator: {
          filename: `${PATHS.assets}img/[name][ext]`,
        }
      },
      {
        // scss
        test: /\.scss$/,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { sourceMap: false },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              postcssOptions: {
                plugins: [
                  require("autoprefixer"),
                  require("css-mqpacker"),
                  require("cssnano")({
                    preset: [
                      "default",
                      {
                        discardComments: {
                          removeAll: true,
                        },
                      },
                    ],
                  }),
                ],
              },
            },
          },
          {
            loader: "sass-loader",
            options: { sourceMap: false },
          },
        ],
      },

      {
        test: /\.css$/,
        use: [
          // "style-loader",
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { sourceMap: true },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              postcssOptions: {
                plugins: [
                  require("autoprefixer"),
                  require("css-mqpacker"),
                  require("cssnano")({
                    preset: [
                      "default",
                      {
                        discardComments: {
                          removeAll: true,
                        },
                      },
                    ],
                  }),
                ],
                
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.cjs.js",
    },
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}css/[name].css`,
    }),
    new HtmlWebpackPlugin({
      hash: false,
      template: `${PATHS.src}/index.html`,
      filename: "./index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        // Fonts:
        {
          from: `${PATHS.src}/fonts`,
          to: `${PATHS.dist}/${PATHS.assets}fonts`
        },
        { from: `${PATHS.src}/img`, to: `${PATHS.dist}/${PATHS.assets}/img` },
        { from: `${PATHS.src}/static`, to: "" },
      ],
    }),
  ],
};
