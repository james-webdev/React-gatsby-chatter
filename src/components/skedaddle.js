import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import { useStaticQuery, graphql } from "gatsby"
import TextBlock from "./textblock"
import Title from "./title"
import Button from "./button"
import Img from "gatsby-image"
import MEDIA from "../utils/mediatemplates"

const SkedWrapper = styled.div`
  background-image: linear-gradient(pink, lightgreen);

  ${MEDIA.PHONE`
  font-size: 15px;
  padding: 20px;

`};
`
const Wrapper = styled.div`
  padding: 20px;
`

const Skedaddle = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allImageSharp {
        edges {
          node {
            id
          }
        }
      }
      file(
        relativePath: { eq: "skedaddle.png" }
        childImageSharp: { children: {}, fluid: {} }
      ) {
        childImageSharp {
          fluid {
            aspectRatio
            base64
            sizes
            src
            srcSet
          }
        }
      }
    }
  `)
  return (
    <SkedWrapper>
      <Grid container justify="center" alignItems="center">
        <Grid item lg={6}>
          <Title as="h2" color="#3A4E6A">
            Imagine yourself three hundred miles away in a cozy, countryside
            retreat far from the humdrum of everyday life.
          </Title>
        </Grid>
        <Grid item lg={6}>
          <Title as="h2" color="#3A4E6A">
            Well, now you're just three words closer to your dream break...
          </Title>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item lg={6}>
          <TextBlock
            content="With over 30 years of running agencies that create human centric
     experiences, we set up Chatter to focus on innovating at the point when intelligent 
     voice technology and human behaviour meet."
          />
          <TextBlock
            content="voice is native to us, it provides a more 
     natural way of searching and communicating what we want."
          />
          <TextBlock
            content="With over 30 years of running agencies that create human centric
     experiences, we set up Chatter to focus on innovating at the point when intelligent 
     voice technology and human behaviour meet."
          />
          <TextBlock
            content="With over 30 years of running agencies that create human centric
     experiences, we set up Chatter to focus on innovating at the point when intelligent 
     voice technology and human behaviour meet."
          />
        </Grid>
        <Grid item lg={2}>
          <Wrapper style={{ padding: "30px" }}>
            <Button>Let's chat Skdadl</Button>
          </Wrapper>
        </Grid>
      </Grid>
      <Grid item lg={4}>
        <Wrapper>
          <Img fluid={data.file.childImageSharp.fluid} alt="skedaddlelogo">
            {" "}
          </Img>
        </Wrapper>
      </Grid>
    </SkedWrapper>
  )
}

export default Skedaddle
