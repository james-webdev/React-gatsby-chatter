import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import Button from "./button"

import MEDIA from "../utils/mediatemplates"
import SKD from "../images/skdadl-logo.svg"
import AmaGoo from "./amagoo"
import Tagline from "./tagline"
import SkdadlWithStrap from "../images/skdadl-with-strap.svg"

const SkedWrapper = styled.div`
  background-image: linear-gradient(#33B3CB, #B6DEE1);
  padding: 50px;
  border-radius: 10px;

  .logo-with-strap {
    width: 200px;
    height: auto;
    margin: 0 auto;
    display: block;
  }

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

const Title = styled.h2`
  color: #413d68;
  text-align: center;

  ${MEDIA.PHONE`
    font-size: 36px;
    text-align: left;
  `}
`

const StyledCopy = styled.div`
  display: flex;

  div {
    width: 50%;
    flex-shrink: 0;
    flex-grow: 0;
  }

  ${MEDIA.PHONE`
    display: block;

    div {
      width: 100%;
    }
  `}
`

const StyledCopyLeft = styled.div`
  margin-right: 10px;

  ${MEDIA.PHONE`
    margin: 0;
  `}
`

const StyledCopyRight = styled.div`
  margin-left: 10px;

  ${MEDIA.PHONE`
    margin: 0;
  `}
`

const StyledButton = styled.div`
  text-align: center;
  padding: 50px 0;
  width: 100%;
  display: block;
`

const Intro = styled.div`
  p {
    font-size: 40.52px;
    line-height: 45px;
    font-family: "Windsor", sans-serif;
    color: #403c64;
    ${MEDIA.PHONE`
      font-size: 25px;
      line-height: 32px;
    `}
  }
`

const Skedaddle = () => (
  <SkedWrapper>
    <Intro>
      <p>
        Imagine yourself three hundred miles away in a cozy, countryside retreat
        far from the humdrum of everyday life.
      </p>
      <p> Well, now you're just three words closer to your dream break...</p>
    </Intro>

    <Tagline />

    <StyledCopy>
      <StyledCopyLeft>
        <p>
          Skdadl is a personalised voice experience that enables holiday makers
          to search for, book and enjoy their perfect UK holiday using a Google
          Assistant or Alexa device. ‘Alexa, Open Skdadl' - is all it takes to
          activate the experience, and start your journey to a relaxing short
          break.
        </p>
      </StyledCopyLeft>
      <StyledCopyRight>
        <p>
          Powered by some of the leading holiday cottage agencies, Skdadl makes
          it simple to search for and book your perfect retreat without having
          to left a finger.
        </p>
        <p>Just sit back and let Skdadl do all of the work.</p>
        <p>
          – Personalised voice experience with results tailored to you
          <br />
          – Real time cottage booking availability
          <br />
          – Recognised and trusted holiday brands
          <br />
          – Search Last minute, Luxury and dog friendly cottages
          <br />
        </p>
      </StyledCopyRight>
    </StyledCopy>
    <StyledButton>
      <Button>Let's chat Skdadl</Button>
    </StyledButton>
    <Grid container direction="column" justify="center">
      <Grid item lg={6}>
        <img className="logo-with-strap" src={SkdadlWithStrap} alt="skdadl" />
        <AmaGoo />
      </Grid>
    </Grid>
  </SkedWrapper>
)

export default Skedaddle
