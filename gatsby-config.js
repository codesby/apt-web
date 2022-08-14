require("dotenv").config();
module.exports = {
  siteMetadata: {
    title: `Apt Home Assistant`,
    siteUrl: `https://apt.codesby.dev`,
    author: `@codesby`,
  },
  plugins: [
    "gatsby-plugin-firebase",
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
