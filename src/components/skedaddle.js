import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import { useStaticQuery, graphql } from "gatsby"
import TextBlock from "./textblock"
import Title from "./title"
import Button from "./button"
import Img from "gatsby-image"

const SkedWrapper = styled.div`
  background-color: pink;
  max-width: 100%;
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
        <Grid item lg={4}>
          <Wrapper>
            <Img fluid={data.file.childImageSharp.fluid} alt="skedaddlelogo">
              {" "}
            </Img>
          </Wrapper>
        </Grid>
        <Grid item lg={4}>
          <TextBlock
            content="With over 30 years of running agencies that create human centric
     experiences, we set up Chatter to focus on innovating at the point when intelligent 
     voice technology and human behaviour meet."
          />
          <TextBlock
            content="voice is native to us, it provides a more 
     natural way of searching and communicating what we want."
          />
        </Grid>
        <Grid item lg={4}>
          <TextBlock
            content="We create conversational experiences for brands and their customers,
       enabling personality at scale in an increasingly automated world."
          />
          <TextBlock
            content="For brands this means being authentically involved in the world of their customers to provide support,
      choice and vCommerce capabilities. Whilst for us as consumers we look for engagements that create an 
emotional connection and add value to out lives."
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item lg={6}>
          <Title as="h2" color="#3A4E6A">
            "Hey Alexa ask Skedaddle to book me a holiday cottage..."
          </Title>
        </Grid>
        <Grid item lg={2}>
          <Wrapper style={{ padding: "30px" }}>
            <Button>Find out more</Button>
          </Wrapper>
        </Grid>
      </Grid>
    </SkedWrapper>
  )
}

export default Skedaddle
