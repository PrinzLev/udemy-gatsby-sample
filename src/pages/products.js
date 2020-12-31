import React from "react"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import style from "../component/products.module.css"
import Layout from "../component/layout"

const ComponentName = ({ data }) => {
  const {
    allContentfulProduct: { nodes },
  } = data
  return (
    <Layout>
      <section className={style.page}>
        {nodes.map(({ image: { fluid }, title, slug, price, id }) => {
          return (
            <article key={id}>
              <Image fluid={fluid}></Image>
              <h3>
                {" "}
                {title} <span>${price}</span>
              </h3>
              <Link to={`/products/${slug}`}>more details</Link>
            </article>
          )
        })}
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        title
        slug
        price
        id
      }
    }
  }
`

export default ComponentName
