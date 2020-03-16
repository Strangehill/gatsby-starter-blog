import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import TwitterLogo from "../../content/assets/social-media-icons/twitter.svg"

const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
  grid-column-gap: 1.2rem;
  grid-row-gap: 0.5rem;
  font-size: 0.8em;
  div {
    display: flex;
    > * {
      margin: auto;
      box-shadow: none;
    }
    svg {
      display: block;
      fill: currentColor;
      transition: 1.2s;
    }
    a:hover svg {
      fill: black;
      transition: 1.2s;
    }
  }
`
const Footer = ({ className }) => {
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
  const twitter = data.site.siteMetadata.social.twitter

  return (
    <StyledFooter className={className}>
      <div>
        <a
          href={`https://twitter.com/${twitter}`}
          aria-label={`Follow ${twitter} on Twitter`}
        >
          <TwitterLogo width="36" height="36" />
        </a>
      </div>
      <div>
        <p>Copyright © {new Date().getFullYear()} </p>
      </div>
    </StyledFooter>
  )
}


export default Footer
