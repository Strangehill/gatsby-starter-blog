import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { rhythm, scale } from "../utils/typography"

const H1 = styled.h1`
  ${{ ...scale(1.5) }};
  margin-bottom: ${rhythm(1.5)};
  margin-top: 0;
`
const HeaderLink = styled(Link)`
  box-shadow: none;
  color: inherit;
`
const H3 = styled.h3`
  font-family: Montserrat, sans-serif;
  margin-top: 0;
`
const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`

const Layout = ({ location, title, children }) => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          social {
            twitter
          }
        }
      }
    }
  `)
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <H1>
        <HeaderLink to={"/"}>{title}</HeaderLink>
      </H1>
    )
  } else {
    header = (
      <H3>
        <HeaderLink to={"/"}>{title}</HeaderLink>
      </H3>
    )
  }
  return (
    <Container>
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with care and attention, by
        {` `}
        <a
          href={`https://twitter.com/${data.site.siteMetadata.social.twitter}`}
        >
          Antonio
        </a>
      </footer>
    </Container>
  )
}

export default Layout
