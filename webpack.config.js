const TerserPlugin = require("terser-webpack-plugin");
const WebpackUserscript = require("webpack-userscript");
const path = require("path");

const GITHUB_URL = "https://github.com";
const GITHUB_REPO = "mogeko/userscript-douban2rarbg";
const JSDELIVR_URL = "https://cdn.jsdelivr.net";

module.exports = {
  mode: "production",
  entry: "./src/main.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "Douban2RARBG.user.js",
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "swc-loader",
          options: {
            jsc: {
              parser: {
                syntax: "typescript",
              },
              target: "es5",
            },
          },
        },
      },
    ],
  },
  plugins: [
    new WebpackUserscript({
      headers: {
        name: "Douban2RARBG",
        namespace: "https://mogeko.me",
        supportURL: `${GITHUB_URL}/${GITHUB_REPO}/issues`,
        match: "https://movie.douban.com/subject/*",
        icon: "https://img9.doubanio.com/favicon.ico",
        updateURL: `${JSDELIVR_URL}/gh/${GITHUB_REPO}@master/dist/Douban2RARBG.user.js`,
        grant: "none",
        license: "MIT",
      },
    }),
  ],
};
