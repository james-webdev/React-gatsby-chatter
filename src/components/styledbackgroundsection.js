import React from "react"
import { graphql, StaticQuery } from "gatsby"

import BackgroundImage from "gatsby-background-image"
import Grid from "@material-ui/core/Grid"
import TextBlock from "./textblock"
import BTextBlock from "./buttontext"
import BlockQuote from "./blockquote"
import Button from "./button"
import Title from "./title"

const BackgroundSection = ({ className }) => (
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
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          <Grid container direction="row" justify="" alignItems="flex-start">
            <Grid item lg={4} justify="left">
              <TextBlock content="With over 30 years of running agencies that create human centric experiences, we set up Chatter to focus on innovating at the point when intelligent voice technology and human behaviour meet. voice is native to us, it provides a more natural way of searching and communicating what we want." />
            </Grid>
            <Grid item lg={4}>
              <TextBlock
                content="We create conversational experiences for brands and their customers, enabling personality 
        at scale in an increasingly automated world. For brands this means being authentically involved in the world of their customers to provide support,
        choice and vCommerce capabilities. Whilst for us as consumers we look for engagements that create an 
        emotional connection and add value to out lives."
              />
            </Grid>
            <Grid item lg={4}>
              <BlockQuote content="We innovate where intelligent voice technology and human behaviour meet" />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item lg={2} alignItems="flex-end">
              <Grid item lg={12}>
                <BTextBlock
                  content="If you'd like to know
           more get in touch:"
                />
              </Grid>
              <Grid item lg={12}>
                <Button />
              </Grid>
              <Title />
            </Grid>
            <Grid item lg={4}></Grid>
            <Grid item lg={6}>
              <Title content="Talking Technology." color="white" />
            </Grid>
          </Grid>
        </BackgroundImage>
      )
    }}
  />
)

export default BackgroundSection
