module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-preact`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/_posts`,
        name: 'posts'
      }
    },
    'gatsby-transformer-remark'
  ]
}
