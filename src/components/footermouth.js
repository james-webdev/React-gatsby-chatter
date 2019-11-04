import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const ImgWrapper = styled.div`
  position: relative;
`

const FooterMouth = () => {
  const data = useStaticQuery(graphql`
    query MyQueryFooter {
      file(relativePath: { eq: "footer-mouth.svg" }) {
        id
        publicURL
      }
    }
  `)
  return (
    <ImgWrapper>
      <img src={data.file.publicURL} alt="footermouthimage" />
    </ImgWrapper>
  )
}

export default FooterMouth
