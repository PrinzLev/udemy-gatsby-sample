import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import img from "../images/nature.png"

const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "river-city.png" }) {
      childImageSharp {
        fixed(width: 300, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "city-sky.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
const Images = () => {
  const data = useStaticQuery(getImages)
  return (
    <section className="images">
      <article className="single-image">
        <h3>Basic image</h3>
        <img src={img} width="100%" />
      </article>
      <article className="single-image">
        <h3>Fixed image/blur</h3>
        <Image fixed={data.fixed.childImageSharp.fixed} />
      </article>
      <article className="single-image">
        <h3>Fluid image/svg</h3>
        <Image fluid={data.fluid.childImageSharp.fluid} />
        <div className="small">
          <Image fluid={data.fluid.childImageSharp.fluid} />
        </div>
      </article>
    </section>
  )
}

export default Images
