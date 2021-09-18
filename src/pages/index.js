import * as React from "react"
import { Link } from "gatsby"
import { GlobalStyle } from "../components/globalStyles"

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <h1>Hello There</h1>
      <Link to="/page-2/">Go to page 2</Link> <br />
    </>
  )
}
