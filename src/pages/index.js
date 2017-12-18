import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/Header'
export default function Home({ data }) {
  // console.log(data.allMarkdownRemark.edges)

  return (
    <div>
      <Header data={data.allMarkdownRemark.edges}/>
      <h1>Hi people</h1>
      <div>
        {data}
        <p>Welcome to your new Gatsby site.</p>
      </div>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  )
}
export const pageQuery = graphql`
  query HomePageQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title

          }
        }
      }
    }
  }
`
