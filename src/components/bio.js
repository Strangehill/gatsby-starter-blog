/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import TwitterLogo from "../../content/assets/social-media-icons/twitter.inline.svg"

const Wrapper = styled.div`
  display: flex;
  margin-bottom: ${rhythm(2.5)};
  a {
    box-shadow: none;
    svg {
      margin-left: 1em;
      fill: currentColor;
    }
  }
`

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/noun_profile.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          producer {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const { producer, social } = data.site.siteMetadata
  return (
    <Wrapper>
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={producer.name}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        This Website+Blog template is managed by{" "}
        <strong>{producer.name}</strong>
        {` `}
        {producer.summary}
        {` `}
        <a href={`https://twitter.com/${social.twitter}`}>
          You should follow him on Twitter.
          <TwitterLogo width="24" height="auto" />
        </a>
      </p>
    </Wrapper>
  )
}

export default Bio
