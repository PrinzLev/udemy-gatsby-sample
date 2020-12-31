import React from "react"
import Header from "../examples/Header"
import HeaderStatic from "../examples/HeaderStatic"
import Layout from "../component/layout"
import { graphql } from "gatsby"

export const data = graphql`
  query {
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
`
const ExamplesPage = ({ data }) => {
  const {
    site: {
      info: { author },
    },
  } = data
  return (
    <Layout>
      <h1>Hello from examples page</h1>
      <Header />
      <HeaderStatic />
      <h3>{author}</h3>
    </Layout>
  )
}

export default ExamplesPage
