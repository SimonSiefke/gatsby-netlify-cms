const path = require('path')
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin')

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators
  const postTemplate = path.resolve('src/templates/post.js')

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              path
              title
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }
    res.data.allMarkdownRemark.edges.map(({ node }) => {
      createPage({ path: node.frontmatter.path, component: postTemplate })
    })
  })
}

// exports.modifyWebpackConfig = ({ config, stage }) => {
//   console.log(config._loaders)
//   console.log(config._plugins)
//   config._plugins = [...config._plugins]
//   return config
// }
