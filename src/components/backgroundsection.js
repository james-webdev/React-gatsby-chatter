import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Title from "./title"
import styled from "styled-components"
import UncontrolledLottie from "./UncontrolledLottie"
import MEDIA from "../utils/mediatemplates"

const AnimationWrapper = styled.span`

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
        <AnimationWrapper>
          <UncontrolledLottie />
        </AnimationWrapper>
      )
    }}
  />
)

export default BackgroundSection
