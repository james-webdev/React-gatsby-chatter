import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import { useStaticQuery, graphql } from "gatsby"
import TextBlock from "./textblock"
import Title from "./title"
import Button from "./button"
import Img from "gatsby-image"
import MEDIA from "../utils/mediatemplates"
import SKD from "../images/skdadl-logo.svg"
import AmaGoo from "./amagoo"

const SkedWrapper = styled.div`
  background-image: linear-gradient(pink, lightblue);
  ${MEDIA.PHONE`
  font-size: 15px;
  padding: 20px;
  `};

  .alexaopen {
    ${MEDIA.PHONE`
  font-size: 28px;
  font-weight: light;
  span{
    display: inline-block;
    width: 111px;
    height:25px;
    margin-left: 5px;
    background-repeat: no-repeat;
    background-image: url('${SKD}');
  }
  
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
          <TextBlock customClass="alexaopen" content="Alexa, open" />
          <TextBlock
            content="skedadl is an exciting new voice skill that allows you to book your 
            dream holiday cottage in just a few words without having to trawl through hundreds
            of websites results. Powered by some of the leading holiday cottage booking engines, 
            skedadl makes it super simple to book your perfect retreat without having to lift 
            a finger. Just sit back and let skedadl do all the work for you."
          />
          <TextBlock
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
          />
          <TextBlock content="-Lorem ipsum dolor sit amet" />
          <TextBlock content="-Lorem ipsum dolor sit amet" />
          <TextBlock content="-Lorem ipsum dolor sit amet" />
          <TextBlock content="-Lorem ipsum dolor sit amet" />
        </Grid>
        <Grid item lg={2}>
          <Wrapper style={{ padding: "30px", marginLeft: "25px" }}>
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
        <AmaGoo />
      </Grid>
    </SkedWrapper>
  )
}

export default Skedaddle
