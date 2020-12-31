import React from "react"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import Layout from "../component/layout"

const ProductTemplate = ({
  data: {
    product: {
      image: { fixed },
      price,
      title,
      info: { info },
    },
  },
}) => {
  return (
    <Layout>
      <div style={{ textAlign: "center" }}>
        <Link to="/products">back to products</Link>
        <h1>Single Product: {title}</h1>
      </div>
      <section className="single-product">
        <article>
          <Image fixed={fixed} alt={title} />
        </article>
        <article>
          <h1>{title}</h1>
          <h3>${price}</h3>
          <p>{info}</p>
          <button>add to cart</button>
        </article>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleProduct($slug: String) {
    product: contentfulProduct(slug: { eq: $slug }) {
      image {
        fixed(width: 300) {
          ...GatsbyContentfulFixed
        }
      }
      price
      title
      info {
        info
      }
    }
  }
`

export default ProductTemplate
