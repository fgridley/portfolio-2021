module.exports = {
  flags: {
    DEV_SSR: false,
  },
  siteMetadata: {
    title: "Fiona Gridley's Portfolio Website",
    titleTemplate: '%s · Fiona Gridley',
    description: "Portfolio of Fiona's design and development work.",
    url: 'https://www.fionagridley.com', // No trailing slash allowed!
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
    'gatsby-plugin-image',
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-transformer-sharp',
      options: {
        icon: './src/data/images/favicon.ico',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/data/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: './src/data/',
      },
      __key: 'data',
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          'UA-113644057-1', // Google Analytics / GA
        ],
      },
    },
  ],
};
