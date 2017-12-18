import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Header from '../components/Header'
import gatsbyPluginPreact from 'gatsby-plugin-preact';

const Post = styled.article`
  color: #716c6c;
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`
const Title = styled.h1`
  color: black;
  padding: 10px 0;
  text-decoration: underline;
  margin: 0;
  font-weight: 400;
`
const Text = styled.div``

export default function Template({ data }) {
  const { markdownRemark: post } = data
  const {title} = post.frontmatter
  console.log(title)

  return (
    <div>
      <Header data={[]}/>
      <Post>
        <h1>{title}</h1>
        <br/>
        {/* <Helmet title={title} /> */}
        {/* <Title>{title}</Title> */}
        <Text dangerouslySetInnerHTML={{ __html: post.html }} />
      </Post>
    </div>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($title: String!) {
    markdownRemark(frontmatter: { title: { eq: $title } }) {
      html
      frontmatter {
        title

      }
    }
  }
`
