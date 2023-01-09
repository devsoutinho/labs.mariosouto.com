const isNative = process.env.UI_PLATFORM === "native";

function native(api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      ["@babel/plugin-proposal-export-namespace-from"],
      [
        "module-resolver",
        {
          alias: {
            "@src": "./src",
          },
        },
      ],
    ],
  };
}

const web = {
  presets: [
    [
      "@babel/preset-react",
      {
        runtime: "automatic",
      },
    ],
    "@babel/preset-env",
    "@babel/preset-typescript",
  ],
};

module.exports = isNative ? native : web;
