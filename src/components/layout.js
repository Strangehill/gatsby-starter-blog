import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Footer from "./footer"
import { rhythm, scale, cssVariables } from "../utils/typography"
import catalogEs from "../locales/es/messages.js"
import catalogEn from "../locales/en/messages.js"
import catalogZh from "../locales/zh/messages.js"
import { I18nProvider } from "@lingui/react"

const { brandColor } = cssVariables

const Nav = styled.nav`
  text-align: right;
  > * {
    padding: 0.5rem; 0.4rem 0.25rem 0.2rem;
    :not(:first-child) {
      margin-left: 0.4em;
    }
  }
`
const HeaderLink = styled(Link)`
  box-shadow: none;
  color: inherit;
  &.current-page {
    border-bottom: 2px solid ${brandColor};
    font-weight: bold;
  }
`
const H1 = styled.h1`
  ${{ ...scale(1.5) }};
  margin-bottom: ${rhythm(1.5)};
  margin-top: 0;
`
const H3 = styled.h3`
  font-family: Montserrat, sans-serif;
  margin-top: 0;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(44)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`
const Main = styled.main`
  flex: 1;
`
const Header = styled.header`
  @media (min-width: 600px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    nav {
      min-width: 10em;
    }
  }
`

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header
  let navbar = (
    <Nav>
      <HeaderLink to="/about/" activeClassName="current-page">
        About
      </HeaderLink>
      {` `}
      <HeaderLink to="/blog/" activeClassName="current-page">
        Blog
      </HeaderLink>
    </Nav>
  )

  if (location.pathname === rootPath) {
    header = (
      <Header>
        <H1>
          <HeaderLink to={"/"}>{title}</HeaderLink>
        </H1>
        <p>Serving Your World</p>
        {navbar}
      </Header>
    )
  } else {
    header = (
      <Header>
        <H3>
          <HeaderLink to={"/"}>{title}</HeaderLink>
        </H3>
        <p>Serving Your World</p>
        {navbar}
      </Header>
    )
  }
  return (
    <I18nProvider
      language="zh"
      catalogs={{
        en: catalogEn,
        es: catalogEs,
        zh: catalogZh
      }}
    >
      <Container>
        {header}
        <Main>{children}</Main>
        <Footer />
      </Container>
    </I18nProvider>
  )
}

export default Layout
