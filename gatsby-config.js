module.exports = {
  siteMetadata: {
    title: `a site+blog starter`,
    producer: {
      name: `Strangehill`,
      summary: `who lives and works in Taiwan, building useful things.`
    },
    description: `A customized variation of the official Gatsby starter blog.`,
    siteUrl: `https://gatsby-starter-blog-demo.netlify.com/`,
    social: {
      twitter: `strangehill`
    }
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      }
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `a tweaked fork of the gatsby starter blog`,
        short_name: `a gatsby site+blog template`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#AA3377`,
        display: `minimal-ui`,
        icon: `content/assets/noun_big_planet.svg`
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /content\/assets\/.*\.svg/
        }
      }
    },
    {
      resolve: `gatsby-plugin-i18n`,
      options: {
        langKeyDefault: `en`,
        useLangKeyLayout: false,
        pagesPaths: ["/content/blog/"],
        markdownRemark: {
          postPage: require.resolve("./src/templates/blog-post.js"),
          query: `
          {
            allMarkdownRemark {
              edges {
                node {
                  fields {
                    slug
                    langKey
                  }
                }
              }
            }
          }
          `
        }
      }
    }
  ]
}
