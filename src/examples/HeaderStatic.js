import React from "react"
import { StaticQuery, graphql } from "gatsby"

const HeaderStatic = () => (
  <StaticQuery
    query={graphql`
      {
        site {
          info: siteMetadata {
            person {
              age
              name
            }
            author
            data
            description
            title
          }
        }
      }
    `}
    render={data => <h2>{data.site.info.description}</h2>}
  ></StaticQuery>
)

export default HeaderStatic
