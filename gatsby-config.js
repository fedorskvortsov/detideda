module.exports = {
  siteMetadata: {
    title: `DetiDeda`,
    description: `The official DetiDeda website. The rock band from Yaroslavl.`,
    author: `@fedorskvortsov`,
    siteUrl: `https://detideda.ru/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `team`,
        path: `${__dirname}/src/team`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `albums`,
        path: `${__dirname}/src/albums`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `songs`,
        path: `${__dirname}/src/songs`,
      },
    },
    `gatsby-plugin-mdx`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `DetiDeda`,
        short_name: `DetiDeda`,
        description: `The official DetiDeda website.`,
        lang: `ru`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo-512x512.png`, // This path is relative to the root of the site.
        legacy: false,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
