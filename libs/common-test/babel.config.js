module.exports = {
  presets: [
    ["@babel/preset-react", {
      "runtime": "automatic"
    }],
    "module:metro-react-native-babel-preset",
    "@babel/preset-flow",
  ],
}
// module.exports = {
//   "presets": [
//     ["@babel/preset-react", {
//       "runtime": "automatic"
//     }],
//     "@babel/preset-flow",
//     "@babel/preset-env",
//     "@babel/preset-typescript"
//   ]
// }
