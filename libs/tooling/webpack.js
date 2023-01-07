const path = require("path");
const { merge } = require("webpack-merge");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin: CleanPlugin } = require("clean-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

function common({ __dirname, entry, plugins }) {
  return {
    devtool: 'cheap-module-source-map',
    entry,
    resolve: {
      alias: {
        '@src': path.resolve(__dirname, 'src'),
      },
    },
    plugins: [
      new CleanPlugin({
        cleanStaleWebpackAssets: false,
      }),
      new CopyPlugin({
        patterns: [
          { from: path.resolve("public"), to: path.resolve("dist"), }
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
      extensions: [".tsx", ".ts", ".js"]
    },
    output: {
      filename: "[name].js",
      path: path.resolve(__dirname, "dist"),
    },
  };
}

module.exports = {
  TsconfigPathsPlugin,
  HtmlPlugin,
  config({ __dirname, entry, plugins = [] }) {
    if (!__dirname) {
      throw new Error("Missing: `__dirname`");
    }

    return (env, argv) => {
      const isProduction = argv.mode === "production";
      const commonConfig = common({
        __dirname,
        entry,
        plugins,
      });

      if(isProduction) {
        return merge(commonConfig, {
          mode: "production",
          devtool: "source-map",
        });
      }
      if(!isProduction) {
        return merge(commonConfig, {
          mode: "development",
          devtool: "cheap-module-source-map",
        });
      }

      throw new Error("Please, set your `mode` to `production` or `development`");
    }
  }
}
