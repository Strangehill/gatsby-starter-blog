import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../../components/layout"

const H1 = styled.h1`
  margin-top: 0;
`

const AboutPage = ({ location, data }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <div>
        <H1> About </H1>
        <p> Our brand. </p>
        <p> Our team. </p>
        <h2> This site. </h2>
        <p>
          Twitter Icon made by{" "}
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            {" "}
            www.flaticon.com
          </a>
        </p>
        <p>
          Go {` `}
          <Link to="/">back to the homepage</Link>.
        </p>
      </div>
    </Layout>
  )
}

export default AboutPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
