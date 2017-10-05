module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-preact`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-offline`
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/_posts`,
        name: 'posts'
      }
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `lime`,
        // Disable the loading spinner.
        showSpinner: false
      }
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `Gatsby Netlify CMS Example`,
    //     short_name: `Gatsby`,
    //     start_url: `/`,
    //     background_color: `lime`,
    //     theme_color: `#191919`,
    //     display: `minimal-ui`
    //   }
    // },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        staticFileGlobs: [
          `public/**/*.{js,woff2}`,
          `public/index.html`
          // `public/manifest.json`,
          // `public/offline-plugin-app-shell-fallback/index.html`
        ],
        stripPrefix: 'public',
        navigateFallback: `/offline-plugin-app-shell-fallback/index.html`,
        // Only match URLs without extensions.
        // So example.com/about/ will pass but
        // example.com/cheeseburger.jpg will not.
        // We only want the service worker to handle our "clean"
        // URLs and not any files hosted on the site.
        navigateFallbackWhitelist: [/^.*(?!\.\w?$)/],
        cacheId: `gatsby-plugin-offline`,
        // Do cache bust JS URLs until can figure out how to make Webpack's
        // URLs truely content-addressed.
        dontCacheBustUrlsMatching: /(.\w{8}.woff2)/, //|-\w{20}.js)/,
        runtimeCaching: [
          {
            // Add runtime caching of images.
            urlPattern: /\.(?:png|jpg|jpeg|webp|svg|gif|tiff)$/,
            handler: `fastest`
          }
        ],
        skipWaiting: false
      }
    },
    'gatsby-transformer-remark'
  ]
}
