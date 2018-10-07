import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

const Title = styled.h1`
  margin-top: ${rhythm(1)}
  margin-bottom: 0;;
`
const Date = styled.p`
  ${{ ...scale(-1 / 5) }};
  display: "block";
  margin-bottom: ${rhythm(1)};
`
const Hr = styled.hr`
  margin-bottom: ${rhythm(1)};
`
const PrevAndNext = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article>
        <header>
          <Title> {post.frontmatter.title} </Title>
          <Date> {post.frontmatter.date} </Date>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <Hr />
        <footer>
          <Bio />
        </footer>
      </article>

      <nav>
        <PrevAndNext>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </PrevAndNext>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
