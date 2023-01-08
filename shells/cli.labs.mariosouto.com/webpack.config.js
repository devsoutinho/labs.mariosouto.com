const path = require("path");
const shell = require("shelljs");
const { config } = require("@devsoutinho/common-tooling/webpack");

class CLIPlugin {
  apply(compiler) {
    compiler.hooks.done.tap("CLI Plugin", () => {
      shell
        .echo("#!/usr/bin/env node\n")
        .cat(`${__dirname}/dist/index.js`)
        .to(`${__dirname}/.bin`);

      shell.chmod(755, `${__dirname}/cli.js`);
    });
  }
}

module.exports = config({
  __dirname,
  target: "node",
  entry: {
    index: path.resolve("index.ts"),
  },
  plugins: [new CLIPlugin()],
});
