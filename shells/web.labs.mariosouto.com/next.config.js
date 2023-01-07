const pkg = require('./package.json');

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    ...Object.keys(pkg.dependencies),
    ...Object.keys(pkg.devDependencies)
  ].filter((name) => !name.startsWith('@devsoutinho/')),
}

module.exports = nextConfig