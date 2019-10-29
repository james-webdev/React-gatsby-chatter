import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Head from "components/head"
//import GlobalStyle from "global.css.js"
const Layout = ({ data, children }) => (
  <div>
    <Head />
    {children}
  </div>
)

const LayoutWithQuery = props => (
  <StaticQuery render={data => <Layout data={data} />} />
)
export default LayoutWithQuery
