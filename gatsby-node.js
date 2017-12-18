const path = require('path')
const remark = require('remark')
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
      console.log('node')
      console.log(node)
      createPage({ path: node.frontmatter.title.slice(0,node.frontmatter.title.length-1).split(' ').join('-'),
      title: node.frontmatter.title, component: postTemplate })
    })
  })
}
