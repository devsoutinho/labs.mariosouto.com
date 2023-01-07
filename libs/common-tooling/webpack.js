const path = require("path");
const { merge } = require("webpack-merge");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin: CleanPlugin } = require("clean-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');
const webpack = require("webpack");

function common({ __dirname, entry, plugins, outputFolder, target }) {
  const outFolder = outputFolder || "dist";
  return {
    target,
    entry,
    plugins: [
      new CleanPlugin({
        cleanStaleWebpackAssets: false,
      }),
      new CopyPlugin({
        patterns: [
          { from: path.resolve("public"), to: path.resolve(outFolder), }
        ]
      }),
      ...plugins,
    ],
    module: {
      rules: [
        {
          use: "ts-loader",
          test: /\.tsx?$/,
        }
      ]
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
      plugins: [new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, "tsconfig.json"),
      })]
    },
    output: {
      filename: "[name].js",
      path: path.resolve(__dirname, outFolder),
    },
  };
}

module.exports = {
  TsconfigPathsPlugin,
  HtmlPlugin,
  BannerPlugin: webpack.BannerPlugin,
  ShebangPlugin: require("webpack-shebang-plugin"),
  config({ __dirname, entry, plugins = [], target, outputFolder }) {
    if (!__dirname) {
      throw new Error("Missing: `__dirname`");
    }

    return (env, argv) => {
      const isProduction = argv.mode === "production";
      const commonConfig = common({
        __dirname,
        target,
        entry,
        plugins,
        outputFolder,
      });

      if (isProduction) {
        return merge(commonConfig, {
          mode: "production",
          devtool: "source-map",
        });
      }
      if (!isProduction) {
        return merge(commonConfig, {
          mode: "development",
          devtool: "cheap-module-source-map",
        });
      }

      throw new Error("Please, set your `mode` to `production` or `development`");
    }
  }
}
