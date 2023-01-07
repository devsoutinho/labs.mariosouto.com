const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");

const popup = "popup";
const background = "background";
const content = "content";

module.exports = {
  HtmlPlugin,
  config({ entry, plugins = [] }) {
    return {
      mode: "development",
      devtool: 'cheap-module-source-map',
      entry,
      plugins: [
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
}