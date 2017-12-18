import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
// import { pageQuery } from '../../.cache/dev-404-page'

const HeaderWrapper = styled.div`
  margin-bottom: 1.45rem;
  background: ${props => props.color || 'rebeccapurple'};
`
const Logo = styled.h1`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
  color: white;
  text-decoration: none;
`
const Header = ({data}) => {
  console.log(data)
  const questions = data.map(x=>x.node.frontmatter.title)

  console.log(questions)

  const links = questions.map(x=><a href={x.slice(0,x.length-1).split(' ').join('-')}>{x}</a>)
  return (  <HeaderWrapper>
    {console.log('props')}
    {console.log(data)}
    <Logo>
      <Link to="/">Gatsby</Link>
    </Logo>

    {links}
    <a href="/admin/index.html">admin</a>
  </HeaderWrapper>
)}

export default Header

