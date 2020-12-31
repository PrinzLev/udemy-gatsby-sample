import React from "react"
import Layout from "../component/layout"
import { ExampleButton } from "../component/button"
import "../index.css"
export default function Home() {
  return (
    <Layout>
      <h1>Hello world!</h1>
      <ExampleButton>Click Me</ExampleButton>
    </Layout>
  )
}
