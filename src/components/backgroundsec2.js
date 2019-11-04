import React from "react"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Grid from "@material-ui/core/Grid"
import Title from "./title"
import styled from "styled-components"
import MEDIA from "../utils/mediatemplates"

const ImageWrapper = styled.span`
  .gatsby-image-wrapper {
    width: 100%;
    height: 900px;
  }
  ${MEDIA.PHONE`
  position: relative;
  bottom: 0px;
  top: 600px;
  
  `};
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
            Tag="section"
            className={className}
            fluid={imageData}
            backgroundColor={`transparent`}
            width={`100%`}
          >
            <Grid
              container
              justify="center"
              alignItems="center"
              style={{ height: "900px" }}
            >
              <Grid
                item
                xs={12}
                style={{
                  position: "relative",
                  top: "80px",
                }}
              >
                <Title as="h2" color="white">
                  Talking technology.
                </Title>
              </Grid>
            </Grid>
          </BackgroundImage>
        </ImageWrapper>
      )
    }}
  />
)

export default BackgroundSec2
