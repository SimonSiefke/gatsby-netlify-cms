import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Header from '../components/Header'

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
  const title = post.frontmatter.title

  return (
    <div>
      <Header color={post.frontmatter.color} />
      <Post>
        <Helmet title={title} />
        <Title>{title}</Title>
        <Text dangerouslySetInnerHTML={{ __html: post.html }} />
      </Post>
    </div>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        color
      }
    }
  }
`
