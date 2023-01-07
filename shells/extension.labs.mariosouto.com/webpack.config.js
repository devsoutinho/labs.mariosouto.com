const path = require("path");
const { HtmlPlugin, config } = require("@devsoutinho/tooling/webpack");

const popup = "popup";
const background = "background";
const content = "content";


module.exports = config({
  entry: {
    [popup]: path.resolve("_extension", "popup.tsx"),
    [content]: path.resolve("_extension", "content.tsx"),
    [background]: path.resolve("_extension", "background.ts"),
  },
  plugins: [
    new HtmlPlugin({
      title: "React Extension",
      filename: "popup.html",
      chunks: [popup],
    })
  ]
});