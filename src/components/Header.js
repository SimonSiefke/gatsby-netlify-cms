import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

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
const Header = props => (
  <HeaderWrapper color={props.color}>
    <Logo>
      <Link to="/">Gatsby</Link>
    </Logo>
    <Link to="/first-post">first post</Link>
    <Link to="/second-post">second post</Link>
    <Link to="/third-post">third post</Link>
    <Link to="/fourth-post">fourth post</Link>
    <Link to="/fifth-post">fifth post</Link>
  </HeaderWrapper>
)

export default Header
