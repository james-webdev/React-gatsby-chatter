import React from "react"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import MEDIA from "../utils/mediatemplates"

import Title from "./title"
import styled from "styled-components"

const ImageWrapper = styled.div`
  .gatsby-image-wrapper {
    height: 900px;
    ${MEDIA.PHONE`
    height: 500px;
  `}
  }
  .titleWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin: 0 auto;
    width: 80%;
    h2 {
      margin-top: 9vw;
      ${MEDIA.TABLET`
        margin-top: 14vw;
      `}
      ${MEDIA.PHONE`
        margin-top: 25vw;
      `}
    }
  }
`

const BackgroundSec2 = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "stripe_1.png" }) {
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
          <BackgroundImage
            Tag="div"
            className={className}
            fluid={imageData}
            backgroundColor={`transparent`}
            width={`100%`}
          >
            <div className="titleWrapper">
              <Title as="h2" color="white">
                where intelligent voice technology
              </Title>
            </div>
          </BackgroundImage>
        </ImageWrapper>
      )
    }}
  />
)

export default BackgroundSec2
