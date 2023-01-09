const {
  nextConfigDefault,
  transpilePackages,
} = require("@devsoutinho/common-tooling/next.config");
const pkg = require("./package.json");

/** @type {import('next').NextConfig} */

const nextConfig = {
  ...nextConfigDefault,
  transpilePackages: transpilePackages(pkg),
};

module.exports = nextConfig;
