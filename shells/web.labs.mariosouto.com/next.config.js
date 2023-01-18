const {
  nextConfigDefault,
  transpilePackages,
} = require("@devsoutinho/common-tooling/next.config");
const pkg = require("./package.json");

/** @type {import('next').NextConfig} */

const nextConfig = {
  ...nextConfigDefault,
  transpilePackages: transpilePackages(pkg),
  async redirects() {
    return [
      {
        source: "links/eventos/imersao-dev-janeiro-2023",
        destination:
          "https://imersao.dev/?utm_source=influenciadores&utm_medium=devsoutinho&utm_campaign=imersaodevjan202",
        permanent: true,
      },
      {
        source: "/challenges/001-css-preview-border-radius",
        destination:
          "https://devsoutinho.notion.site/CSS-Preview-Border-Radius-DevSoutinhoChallenges-14fd017db675495b81ce5cd5f68981f0",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
