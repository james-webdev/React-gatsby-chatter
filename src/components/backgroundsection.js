import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Title from "./title"
import styled from "styled-components"
import UncontrolledLottie from "./UncontrolledLottie"
import MEDIA from "../utils/mediatemplates"

const ImageWrapper = styled.span`
  .gatsby-image-wrapper {
    width: 100%;
    height: 100px;
    margin-top: 80px;
  }
  ${MEDIA.PHONE`
  
  height: 100px;
  position: relative;
  top: 50px;
  `};
`

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "mouth.png" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              src
              originalName
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <ImageWrapper>
          <UncontrolledLottie />
        </ImageWrapper>
      )
    }}
  />
)

export default BackgroundSection
