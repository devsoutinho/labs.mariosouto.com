module.exports = {
  nextConfigDefault: {
    reactStrictMode: true,
  },
  transpilePackages: (pkg) => {
    return [
      ...Object.keys(pkg.dependencies),
      ...Object.keys(pkg.devDependencies)
    ].filter((name) => !name.startsWith('@devsoutinho/'))
  }
}