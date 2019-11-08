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
  background-image: linear-gradient(pink, lightblue);
  padding: 50px;
  border-radius: 20px;

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

const Skedaddle = () => (
  <SkedWrapper>
    <Grid container justify="center" alignItems="center">
      <Grid item lg={6}>
        <Title>
          Imagine yourself three hundred miles away in a cozy, countryside
          retreat far from the humdrum of everyday life.
        </Title>
      </Grid>
      <Grid item lg={6}>
        <Title>
          Well, now you're just three words closer to your dream break...
        </Title>
      </Grid>
    </Grid>
    <Grid container>
      <Grid item lg={6}>
        <Tagline />

        <StyledCopy>
          <StyledCopyLeft>
            <p>
              skedadl is an exciting new voice skill that allows you to book
              your dream holiday cottage in just a few words without having to
              trawl through hundreds of websites results. Powered by some of the
              leading holiday cottage booking engines, skedadl makes it super
              simple to book your perfect retreat without having to lift a
              finger. Just sit back and let skedadl do all the work for you.
            </p>
          </StyledCopyLeft>
          <StyledCopyRight>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <p>
              -Lorem ipsum dolor sit amet
              <br />
              -Lorem ipsum dolor sit amet
              <br />
              -Lorem ipsum dolor sit amet
              <br />
              -Lorem ipsum dolor sit amet
              <br />
            </p>
          </StyledCopyRight>
        </StyledCopy>
      </Grid>
      <StyledButton>
        <Button>Let's chat Skdadl</Button>
      </StyledButton>
    </Grid>
    <Grid item lg={4}>
      <img className="logo-with-strap" src={SkdadlWithStrap} alt="skdadl" />

      <AmaGoo />
    </Grid>
  </SkedWrapper>
)

export default Skedaddle
