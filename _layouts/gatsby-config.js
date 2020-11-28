module.exports = {
  pathPrefix: ``,
  siteMetadata: {
    title: `shobiz`,
  },
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        rootNote: "/readme",
        contentPath: `${__dirname}/..`,
        ignore: [
          "**/_layouts/**",
          "**/.git/**",
          "**/.github/**",
          "**/.vscode/**",
          "**/netlify.toml/**"
        ],
      },
    },
  ],
};
